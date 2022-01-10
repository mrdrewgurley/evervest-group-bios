const admin = require('firebase-admin')
const functions = require('firebase-functions')
const mail = require('@sendgrid/mail')

admin.initializeApp()

const API_KEY = functions.config().sendgrid.key
const TEMPLATE_ID = functions.config().sendgrid.template
const RECIPIENTS = functions.config().sendgrid.recipients
const ORIGIN = functions.config().sendgrid.origin
mail.setApiKey(API_KEY)

exports.contactForm = functions.https.onCall(async (data, context) => {
  const json = JSON.parse(data)
  functions.logger.info('Contact Form Submission', { json: json })

  const message = {
    to: RECIPIENTS,
    from: ORIGIN,
    templateId: TEMPLATE_ID,
    dynamic_template_data: {
      firstname: json.firstname,
      lastname: json.lastname,
      email: json.email,
      phone: json.phone,
      message: json.message,
    },
  }

  const response = await mail.send(message)

  return { response: response }
})
