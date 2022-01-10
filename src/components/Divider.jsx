import tw from 'twin.macro'

const Divider = () => {
  return (
    <svg
      css={tw`hidden absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2 lg:block`}
      fill='currentColor'
      viewBox='0 0 100 100'
      preserveAspectRatio='none'
      aria-hidden='true'
    >
      <polygon points='50,0 100,0 50,100 0,100' />
    </svg>
  )
}

export default Divider
