import tw, { css, theme } from 'twin.macro'

const Progress = (props) => {
  const [progress, setProgress] = React.useState(0)

  if (progress != props.progress) {
    setProgress((progress) => props.progress)
  }

  return (
    <div css={tw`bg-gray-300 h-1 z-50`}>
      <div css={[tw`bg-gray-500 h-full transition duration-1000 ease w-0`]} style={{ width: progress + '%' }}></div>
    </div>
  )
}

export default Progress
