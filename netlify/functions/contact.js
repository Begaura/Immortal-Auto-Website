import { Resend } from 'resend'

export default async (req) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json', Allow: 'POST' },
    })
  }

  try {
    const { name, email, phone, service, date, message } = await req.json()

    if (!name || !email) {
      return new Response(JSON.stringify({ error: 'Name and email are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const to = process.env.CONTACT_TO_EMAIL
    const from = process.env.RESEND_FROM_EMAIL

    if (!to || !from) {
      return new Response(JSON.stringify({ error: 'Recipient not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const subject = `Website Contact: ${name}`
    const text = `Name: ${name}\nEmail: ${email}\nPhone: ${phone || ''}\nService: ${service || ''}\nPreferred date: ${date || ''}\n\nMessage:\n${message || ''}`
    const html = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || ''}</p>
      <p><strong>Service:</strong> ${service || ''}</p>
      <p><strong>Preferred Date:</strong> ${date || ''}</p>
      <p><strong>Message:</strong><br/>${(message || '').replace(/\n/g, '<br/>')}</p>
    `

    const { error } = await resend.emails.send({ to, from, replyTo: email, subject, text, html })
    if (error) throw new Error(error.message || 'Resend API error')

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('send error', err)
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}

export const config = {
  path: '/api/contact',
}
