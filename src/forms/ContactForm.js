const ContactForm = {
  firstname: {
    id: 'first-name',
    label: 'First Name',
    name: 'firstname',
    required: true,
  },
  lastname: {
    id: 'last-name',
    label: 'Last Name',
    name: 'lastname',
    required: true,
  },
  email: {
    id: 'email',
    label: 'Email Address',
    name: 'email',
    required: true,
    type: 'email',
  },
  phone: {
    id: 'phone',
    label: 'Phone Number',
    helperText: 'Optional',
    name: 'phone',
    pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}',
    type: 'tel',
  },
  message: {
    id: 'message',
    label: 'Message',
    multiline: true,
    name: 'message',
    required: true,
    rows: 4,
  },
  success: {
    message: 'Thank you for submitting a contact request.  We will be in touch at our earliest opportunity.',
  },
}

export default ContactForm
