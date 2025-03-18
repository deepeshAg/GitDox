'use server'

import { z } from 'zod'
import nodemailer from 'nodemailer'
import { EmailTemplate } from '../components/email-template'

const schema = z.object({
  email: z.string().email('Invalid email address'),
})

export async function joinWaitlist(prevState: any, formData: FormData) {
  try {
    const email = formData.get('email')
    
    if (!email) {
      return { success: false, message: 'Email is required' }
    }
    
    const result = schema.safeParse({ email })
    
    if (!result.success) {
      return { success: false, message: result.error.errors[0].message }
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: false,
      requireTLS: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    // Send email using nodemailer
    const info = await transporter.sendMail({
      from: 'da76780@gmail.com',
      to: email.toString(),
      subject: 'Welcome to Our Waitlist!',
      html: EmailTemplate({ email: email.toString() }),
    })

    if (!info) {
      console.error('Error sending email')
      return { success: false, message: 'Failed to join waitlist. Please try again.' }
    }

    const count = await getWaitlistCount()

    return { 
      success: true, 
      message: 'You have been added to the waitlist! Check your email for confirmation.',
      count
    }
  } catch (error) {
    console.error('Error:', error)
    return { 
      success: false, 
      message: 'An unexpected error occurred. Please try again.' 
    }
  }
}

export async function getWaitlistCount() {
  try {
    return 100
  } catch (error) {
    return 0
  }
}