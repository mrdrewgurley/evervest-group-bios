import tw, { css } from 'twin.macro'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import formAttributes from '@/forms/ContactForm'
import { httpsCallable } from 'firebase/functions'
import { useFunctions } from 'reactfire'

const ContactForm = ({ snackbar }) => {
  // page state
  const [state, setState] = React.useState({ disabled: false })

  // firebase functions declarations
  const functions = useFunctions()
  const contactFormFunction = httpsCallable(functions, 'contactForm')

  // page method declarations
  const handleSubmit = async (event) => {
    event.preventDefault()
    await contactFormFunction(JSON.stringify(Object.fromEntries(new FormData(event.target))))
      .then((response) => {
        snackbar('Successfully sent your message!', 'success')
        setState({ disabled: true, response: response.data })
      })
      .catch((error) => {
        snackbar('Oops! An error has occurred.', 'error')
        setState({ disabled: false, response: error })
      })
  }

  // page styles declarations
  const form = css`
    & label {
      ${tw`font-bold!`}
    }
  `

  const textfield = css`
    ${tw`w-full`}

    & .MuiOutlinedInput-root {
      &.Mui-focused fieldset,
      &:hover fieldset {
        ${tw`border border-gray-400!`}
      }
    }
  `

  return (
    <form css={form} onSubmit={handleSubmit}>
      <div css={tw`flex flex-row flex-wrap gap-4 mb-8 md:flex-nowrap`}>
        <TextField css={textfield} disabled={state.disabled} {...formAttributes.firstname} />
        <TextField css={textfield} disabled={state.disabled} {...formAttributes.lastname} />
      </div>
      <div css={tw`flex flex-row flex-wrap gap-4 mb-4 md:flex-nowrap`}>
        <TextField css={textfield} disabled={state.disabled} {...formAttributes.email} />
        <TextField css={textfield} disabled={state.disabled} {...formAttributes.phone} />
      </div>
      <div css={tw`flex flex-row flex-wrap gap-4 mb-4 md:flex-nowrap`}>
        <TextField css={textfield} disabled={state.disabled} {...formAttributes.message} />
      </div>
      <div css={tw`flex justify-end`}>
        <Button
          css={tw`bg-indigo-600 text-white w-full hover:bg-indigo-700 md:text-lg md:w-auto`}
          disabled={state.disabled}
          disableElevation
          size='large'
          type='submit'
          variant='contained'
        >
          Submit
        </Button>
      </div>
    </form>
  )
}

export default ContactForm
