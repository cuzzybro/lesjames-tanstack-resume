import type { VercelRequest, VercelResponse } from '@vercel/node'

const ALLOWED_ORIGINS = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'https://cuzzybro.github.io/personal-resume',
  'https://personal-resume-backend.vercel.app/'
]

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const origin = typeof req.headers.origin === 'string' ? req.headers.origin : ''
  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    return res.status(403).json({ error: 'Origin not allowed' })
  }

  const { name, email, message, botField } = req.body ?? {}

  if (botField) {
    return res.status(200).json({ success: true })
  }

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required.' })
  }

  const trimmedName = String(name).trim()
  const trimmedEmail = String(email).trim()
  const trimmedMessage = String(message).trim()

  if (trimmedName.length < 2 || trimmedMessage.length < 10) {
    return res.status(400).json({ error: 'Please provide a valid message.' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(trimmedEmail)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' })
  }

  const apiKey = process.env.RESEND_API_KEY
  const recipient = process.env.CONTACT_EMAIL || 'lesjames_nz@hotmail.com'

  if (!apiKey) {
    return res.status(500).json({ error: 'Email service is not configured.' })
  }

  try {
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'resume-contact@resend.dev',
        to: recipient,
        reply_to: trimmedEmail,
        subject: `Resume enquiry from ${trimmedName}`,
        text: `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\n${trimmedMessage}`,
      }),
    })

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text().catch(() => '')
      console.error('Resend error:', errorText)
      return res.status(502).json({ error: 'Failed to send email.' })
    }

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Contact form handler error:', error)
    return res.status(500).json({ error: 'Server error while sending your message.' })
  }
}
