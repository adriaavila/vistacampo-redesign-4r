"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Share2, Copy, Check, Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react"

// Type assertion for navigator.share API
interface ShareData {
  title?: string
  text?: string
  url?: string
}

interface ShareButtonsProps {
  title: string
  url: string
  description?: string
  language: 'es' | 'en'
}

export function ShareButtons({ title, url, description, language }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const shareText = language === 'es' 
    ? `Mira este artículo: ${title}`
    : `Check out this article: ${title}`

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      // Fallback for older browsers or when clipboard API fails
      try {
        const textArea = document.createElement('textarea')
        textArea.value = url
        textArea.style.position = 'fixed'
        textArea.style.left = '-999999px'
        textArea.style.top = '-999999px'
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (fallbackErr) {
        console.error('Failed to copy to clipboard:', fallbackErr)
      }
    }
  }

  const shareOnFacebook = () => {
    try {
      const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
      window.open(facebookUrl, '_blank', 'width=600,height=400')
    } catch (err) {
      console.error('Error opening Facebook share:', err)
    }
  }

  const shareOnTwitter = () => {
    try {
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`
      window.open(twitterUrl, '_blank', 'width=600,height=400')
    } catch (err) {
      console.error('Error opening Twitter share:', err)
    }
  }

  const shareOnLinkedIn = () => {
    try {
      const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
      window.open(linkedinUrl, '_blank', 'width=600,height=400')
    } catch (err) {
      console.error('Error opening LinkedIn share:', err)
    }
  }

  const shareOnWhatsApp = () => {
    try {
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${url}`)}`
      window.open(whatsappUrl, '_blank')
    } catch (err) {
      console.error('Error opening WhatsApp share:', err)
    }
  }

  const shareViaNative = async () => {
    if (typeof navigator !== 'undefined' && 'share' in navigator && typeof navigator.share === 'function') {
      try {
        await (navigator as any).share({
          title,
          text: description || shareText,
          url
        })
      } catch (err) {
        // Handle user cancellation gracefully - don't log as error
        if (err instanceof Error && err.name === 'AbortError') {
          // User cancelled the share dialog - this is normal behavior
          return
        }
        // Only log actual errors, not user cancellations
        console.error('Error sharing:', err)
      }
    } else {
      copyToClipboard()
    }
  }

  const shareOptions = [
    {
      name: language === 'es' ? 'Copiar enlace' : 'Copy link',
      icon: copied ? Check : Copy,
      action: copyToClipboard,
      color: 'bg-gray-100 hover:bg-gray-200'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      action: shareOnFacebook,
      color: 'bg-blue-100 hover:bg-blue-200 text-blue-600'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      action: shareOnTwitter,
      color: 'bg-sky-100 hover:bg-sky-200 text-sky-600'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      action: shareOnLinkedIn,
      color: 'bg-blue-100 hover:bg-blue-200 text-blue-700'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      action: shareOnWhatsApp,
      color: 'bg-[rgba(26,54,40,0.12)] hover:bg-[rgba(26,54,40,0.18)] text-[#1a3628]'
    }
  ]

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2"
      >
        <Share2 className="h-4 w-4" />
        <span>{language === 'es' ? 'Compartir' : 'Share'}</span>
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-2 z-50 min-w-[200px]">
          <div className="space-y-1">
            {shareOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  option.action()
                  setIsOpen(false)
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${option.color}`}
              >
                <option.icon className="h-4 w-4" />
                <span>{option.name}</span>
              </button>
            ))}
            
            {typeof navigator !== 'undefined' && 'share' in navigator && typeof navigator.share === 'function' && (
              <button
                onClick={() => {
                  shareViaNative()
                  setIsOpen(false)
                }}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm bg-emerald-100 hover:bg-emerald-200 text-emerald-600 transition-colors"
              >
                <Share2 className="h-4 w-4" />
                <span>{language === 'es' ? 'Compartir' : 'Share'}</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}
