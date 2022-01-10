import tw, { css, theme } from 'twin.macro'

import Button from '@mui/material/Button'
import Progress from '@/components/Progress'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'
import logo from '@/assets/evervest.png'
import pdf from '@/assets/Drew-Gurley-Resume-2022.pdf?url'

const Profiles = ({ children, history }) => {
  // layout state
  const [progress, setProgress] = React.useState(0)
  const [value, setValue] = React.useState('cv')

  // layout method declarations
  const handleChange = (event, newValue) => {
    event.preventDefault()
    setValue(newValue)
    let yOffset = -100
    let y = document.getElementById(newValue).getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  const handleDownload = () => {
    window.open(pdf)
  }

  const handleNavigation = (inView, entry) => {
    if (inView) {
      setValue(entry.target.id)
    }
  }

  const handlePrint = () => {
    print()
  }

  // React hooks
  React.useEffect(() => {
    setTimeout((_) => setProgress(100), 1000)
  }, [])

  // layout styles declarations
  const tablist = css`
    ${tw`mx-4`}

    & [role='tab'] {
      ${tw`h-16 pb-2 text-white`}
    }

    & .Mui-selected {
      color: ${theme`colors.primary`} !important;
    }

    & .MuiTabs-indicator {
      background-color: ${theme`colors.primary`};
    }
  `

  return (
    <div css={tw`content-center flex flex-col justify-center min-h-screen`}>
      <nav css={tw`bg-gray-800 print:hidden sticky top-0 z-50`}>
        <div css={tw`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
          <div css={tw`flex items-center justify-between h-16`}>
            <div css={tw`flex-shrink-0`}>
              <a href='https://evervest.group'>
                <img css={tw`h-8`} src={logo} title='The Evervest Group | https://evervest.group' />
              </a>
            </div>
            <div css={tw`font-bold ml-4 mr-4 text-secondary text-lg uppercase print:hidden sm:hidden md:block md:mr-12`}>
              <b css={tw`text-primary`}>The</b> Evervest Group
            </div>
            <div css={tw`hidden print:hidden md:block`}>
              <Tabs css={tablist} value={value} onChange={handleChange}>
                <Tab value='cv' label='cv' />
                <Tab value='resources' label='Resources' />
                <Tab value='contact' label='Contact' />
              </Tabs>
            </div>
            <div css={tw`flex gap-4 ml-auto`}>
              <Button css={tw`hidden print:hidden lg:block`} onClick={handleDownload} variant='outlined'>
                Download CV
              </Button>
              <Button css={tw`hidden print:hidden lg:block`} onClick={handlePrint} variant='outlined'>
                Print CV
              </Button>
            </div>
          </div>
        </div>
        <Progress progress={progress} />
      </nav>
      <main>{React.cloneElement(children, { handleNavigation })}</main>
      <footer css={tw`my-8 w-full print:hidden lg:px-20 `}>
        <hr css={tw`bg-white mb-8 opacity-25`} />
        <Typography component='div' css={tw`flex justify-between opacity-50 px-8 text-base text-left text-white tracking-widest uppercase`} gutterBottom variant='p'>
          <div>&copy; 2022 The Evervest Group, LLC</div>
          <div>All Rights Reserved</div>
        </Typography>
      </footer>
    </div>
  )
}

export default Profiles
