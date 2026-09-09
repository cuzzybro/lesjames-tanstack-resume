import { useEffect, useState } from 'react'

const contactMailbox = String.fromCharCode(
  108, 101, 115, 106, 97, 109, 101, 115, 95, 110, 122, 64, 104, 111, 116, 109, 97, 105, 108, 46, 99, 111, 109,
)

export function ContactModal({ onClose }: { onClose: () => void }) {
  const [isSending, setIsSending] = useState(false)

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

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSending(true)

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') || '')
    const email = String(formData.get('email') || '')
    const message = String(formData.get('message') || '')
    const subject = `Resume enquiry from ${name}`
    const body = `Name: ${name}\nReply email: ${email}\n\n${message}`

    window.location.href = `mailto:${contactMailbox}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setIsSending(false)
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
              Your email app will open with this message ready to send.
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

          <button
            type="submit"
            disabled={isSending}
            className="w-full rounded border border-[#005fb8] bg-[#005fb8] px-4 py-2 font-semibold text-white transition hover:bg-[#004b91] focus:outline-none focus:ring-2 focus:ring-[#007acc] disabled:cursor-wait disabled:opacity-70"
          >
            {isSending ? 'Opening email app...' : 'Open email draft'}
          </button>
        </form>
      </section>
    </div>
  )
}

export default ContactModal
