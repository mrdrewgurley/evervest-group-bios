import Button from '@mui/material/Button'
import tw from 'twin.macro'

const Github = ({ firstName, github, lastName }) => {
  return (
    <main css={tw`mt-0 mx-auto p-12`}>
      <div css={tw`sm:text-center lg:text-left`}>
        <h1 css={tw`font-extrabold text-4xl text-gray-900 tracking-tight sm:text-5xl md:text-6xl`}>
          <span css={tw`block xl:inline`}>Review Examples</span>
          <span css={tw`block text-indigo-600 xl:inline`}> on GitHub</span>
        </h1>
        <p css={tw`mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 sm:mx-auto md:text-xl lg:mx-0`}>
          Use the buttons below to view code examples created by {`${firstName} ${lastName}`}, including the source for this site.
        </p>
        <div css={tw`mt-5 sm:flex sm:justify-center sm:mt-8 lg:justify-start`}>
          <div>
            <Button
              css={tw`bg-indigo-600 border border-transparent flex items-center justify-center px-8 py-3 rounded-md text-base text-white w-full hover:bg-indigo-700  md:px-10 md:py-4`}
              disableElevation
              href={github && github.repo}
              target='_blank'
              variant='contained'
            >
              View Source
            </Button>
          </div>
          <div css={tw`mt-3 sm:ml-3 sm:mt-0 `}>
            <Button
              css={tw`bg-indigo-100 border border-transparent flex items-center justify-center px-8 py-3 rounded-md text-base text-indigo-700 w-full hover:bg-indigo-200 md:px-10 md:py-4`}
              disableElevation
              href={github && github.repos}
              target='_blank'
              variant='contained'
            >
              View GitHub Profile
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Github
