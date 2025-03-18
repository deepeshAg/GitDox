"use client"

import { JSX } from 'react'
// useToast.ts
import toast from 'react-hot-toast'

interface ToastOptions {
  position?: 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center'
  duration?: number
}

interface ToastProps {
  title?: string
  description?: string
  variant?: 'default' | 'destructive' | 'success' | 'warning'
  duration?: number
}

// New type to support both string and object parameters
type ToastParameter = string | {
  title?: string
  description?: string
  duration?: number
}

export function useToast() {
  const defaultOptions: ToastOptions = {
    position: 'top-left',
    duration: 3000,
  }

  const formatMessage = (param: ToastParameter): { message: string; duration?: number } => {
    if (typeof param === 'string') {
      return { message: param };
    }
    const { title, description, duration } = param;
    const message = title && description 
      ? `${title}\n${description}`
      : title || description || '';
    return { message, duration };
  };

  const showToast = (props: ToastProps) => {
    const { title, description, variant = 'default', duration = 3000 } = props;
    const message = title && description 
      ? `${title}\n${description}`
      : title || description || '';
      
    switch (variant) {
      case 'destructive':
        return toast.error(message, { ...defaultOptions, duration });
      case 'success':
        return toast.success(message, { ...defaultOptions, duration });
      case 'warning':
        return toast(message, { 
          ...defaultOptions, 
          duration,
          icon: '⚠️',
          style: { backgroundColor: '#fff7ed', borderColor: '#f97316' }
        });
      default:
        return toast(message, { ...defaultOptions, duration });
    }
  };

  // Updated utility methods to support both string and object parameters
  showToast.success = (param: ToastParameter, options?: ToastOptions) => {
    const { message, duration } = formatMessage(param);
    return toast.success(message, { ...defaultOptions, ...options, duration });
  };

  showToast.error = (param: ToastParameter, options?: ToastOptions) => {
    const { message, duration } = formatMessage(param);
    return toast.error(message, { ...defaultOptions, ...options, duration });
  };

  showToast.warning = (param: ToastParameter, options?: ToastOptions) => {
    const { message, duration } = formatMessage(param);
    return toast(message, { 
      ...defaultOptions, 
      ...options,
      duration,
      icon: '⚠️',
      style: { backgroundColor: '#fff7ed', borderColor: '#f97316' }
    });
  };

  showToast.default = (param: ToastParameter, options?: ToastOptions) => {
    const { message, duration } = formatMessage(param);
    return toast(message, { ...defaultOptions, ...options, duration });
  };

  showToast.loading = (param: ToastParameter, options?: ToastOptions) => {
    const { message, duration } = formatMessage(param);
    return toast.loading(message, { ...defaultOptions, ...options, duration });
  };

  showToast.custom = (element: JSX.Element, options?: ToastOptions) => {
    return toast.custom(element, { ...defaultOptions, ...options });
  };

  showToast.dismiss = (toastId?: string) => {
    if (toastId) {
      toast.dismiss(toastId);
    } else {
      toast.dismiss();
    }
  };

  return showToast;
}
