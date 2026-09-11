import { useEffect, useState } from 'react'

const contactApiUrl =
  import.meta.env.VITE_CONTACT_API_URL ?? 'https://personal-resume-backend.vercel.app/api/contact'

export function ContactModal({ onClose }: { onClose: () => void }) {
  const [isSending, setIsSending] = useState(false)
  const [serverMessage, setServerMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSending(true)
    setServerMessage('')
    setIsSuccess(false)

    const formData = new FormData(event.currentTarget)
    const payload = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      message: String(formData.get('message') || '').trim(),
      botField: String(formData.get('botField') || '').trim(),
    }

    if (!contactApiUrl) {
      setIsSuccess(false)
      setServerMessage('Contact form is not configured for this deployment.')
      setIsSending(false)
      return
    }

    try {
      const response = await fetch(contactApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const result = (await response.json().catch(() => ({}))) as { error?: string; success?: boolean }

      if (!response.ok || result.success !== true) {
        throw new Error(result.error || 'Unable to send your message right now.')
      }

      setIsSuccess(true)
      setServerMessage('Thanks — your message has been sent.')
      event.currentTarget.reset()
    } catch (error) {
      setIsSuccess(false)
      setServerMessage(error instanceof Error ? error.message : 'Something went wrong.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-8"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section
        aria-labelledby="contact-modal-title"
        aria-modal="true"
        className="w-full max-w-lg rounded-lg border border-[#005fb8] bg-white p-6 text-black shadow-2xl dark:border-[#3e3e42] dark:bg-[#252526] dark:text-[#d4d4d4]"
        role="dialog"
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h2 id="contact-modal-title" className="text-2xl font-bold">Contact me</h2>
            <p className="mt-2 text-sm text-[#444] dark:text-[#9d9d9d]">
              Send a message and I’ll receive it securely through the site backend.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded px-2 py-1 text-2xl leading-none text-[#444] hover:bg-[#e5f1fb] focus:outline-none focus:ring-2 focus:ring-[#007acc] dark:text-[#d4d4d4] dark:hover:bg-[#2d2d30]"
            aria-label="Close contact form"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="hidden" aria-hidden="true">
            <input type="text" name="botField" tabIndex={-1} autoComplete="off" />
          </div>

          <label className="block text-sm font-semibold" htmlFor="contact-name">
            Name
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="mt-1 block w-full rounded border border-[#888] bg-white px-3 py-2 font-normal text-black outline-none focus:border-[#007acc] focus:ring-2 focus:ring-[#007acc]/30 dark:border-[#666] dark:bg-[#1e1e1e] dark:text-[#d4d4d4]"
            />
          </label>

          <label className="block text-sm font-semibold" htmlFor="contact-email">
            Your email
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 block w-full rounded border border-[#888] bg-white px-3 py-2 font-normal text-black outline-none focus:border-[#007acc] focus:ring-2 focus:ring-[#007acc]/30 dark:border-[#666] dark:bg-[#1e1e1e] dark:text-[#d4d4d4]"
            />
          </label>

          <label className="block text-sm font-semibold" htmlFor="contact-message">
            Message
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              required
              className="mt-1 block w-full resize-y rounded border border-[#888] bg-white px-3 py-2 font-normal text-black outline-none focus:border-[#007acc] focus:ring-2 focus:ring-[#007acc]/30 dark:border-[#666] dark:bg-[#1e1e1e] dark:text-[#d4d4d4]"
            />
          </label>

          {serverMessage && (
            <p className={`text-sm ${isSuccess ? 'text-green-700 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
              {serverMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={isSending}
            className="w-full rounded border border-[#005fb8] bg-[#005fb8] px-4 py-2 font-semibold text-white transition hover:bg-[#004b91] focus:outline-none focus:ring-2 focus:ring-[#007acc] disabled:cursor-wait disabled:opacity-70"
          >
            {isSending ? 'Sending...' : 'Send message'}
          </button>
        </form>
      </section>
    </div>
  )
}

export default ContactModal
