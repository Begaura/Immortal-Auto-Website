import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, phone, service, date, message } = req.body || {}

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' })
    }

    const to = process.env.CONTACT_TO_EMAIL
    const from = process.env.SENDGRID_FROM_EMAIL || to

    if (!to) {
      return res.status(500).json({ error: 'Recipient not configured' })
    }

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

    await sgMail.send({ to, from, subject, text, html })

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('send error', err)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
