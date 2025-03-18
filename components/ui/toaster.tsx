// toaster.tsx
"use client"

import { Toaster as HotToaster } from 'react-hot-toast'

export function Toaster() {
  return (
    <HotToaster
      position="top-left"
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        className: '',
        duration: 3000,
        style: {
          background: '#363636',
          color: '#fff',
          whiteSpace: 'pre-line',
        },
        success: {
          duration: 3000,
          style: {
            background: '#10b981',
            color: '#fff',
            whiteSpace: 'pre-line',
          },
        },
        error: {
          duration: 3000,
          style: {
            background: '#ef4444',
            color: '#fff',
            whiteSpace: 'pre-line',
          },
        },
      }}
    />
  )
}

export default Toaster