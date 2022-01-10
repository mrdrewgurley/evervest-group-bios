import tw, { css } from 'twin.macro'
import { useFirestore, useFirestoreDocData } from 'reactfire'

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import ContactForm from '@/components/ContactForm'
import Divider from '@/components/Divider'
import FmdGoodIcon from '@mui/icons-material/FmdGood'
import Github from '@/components/Github'
import { InView } from 'react-intersection-observer'
import LanguageIcon from '@mui/icons-material/Language'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MuiAlert from '@mui/material/Alert'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import Skeleton from '@mui/material/Skeleton'
import Slide from '@mui/material/Slide'
import Snackbar from '@mui/material/Snackbar'
import Typography from '@mui/material/Typography'
import WorkExperience from '@/components/WorkExperience'
import { doc } from 'firebase/firestore'

const Profile = ({ handleNavigation, history }) => {
  // page state
  const [state, setState] = React.useState({ snackbar: { message: '', open: false, severity: 'info' } })

  // mui snackbar declarations
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
  })
  const callSnackbar = (message, severity = 'info') => {
    setState({ ...state, snackbar: { message: message, open: true, severity: severity } })
  }
  const transition = (props) => {
    return <Slide {...props} direction='up' />
  }

  // firebase firestore declarations
  const ref = doc(useFirestore(), 'profiles', 'gaiQEiMCmpuWJCZkSj3q')
  const { status, data } = useFirestoreDocData(ref)

  // page method declarations
  const handleCopy = (payload) => () => {
    navigator.clipboard.writeText(payload.clipboard)
    callSnackbar('Copied to Clipboard')
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return
    setState({ ...state, snackbar: { message: '', open: false } })
  }

  // page styles declarations
  const container = css`
    max-width: 51em;
  `

  const col33 = css`
    flex-basis: 33%;

    @media only screen and (max-width: 1025px) {
      flex: 0 0 100% !important;
    }
  `

  const col66 = css`
    flex-basis: 66%;

    @media only screen and (max-width: 1025px) {
      flex: 0 0 100% !important;
    }
  `

  const flex33 = css`
    flex-basis: 35%;

    @media only screen and (max-width: 640px) {
      flex: 0 0 100% !important;
    }
  `

  const flex50 = css`
    flex: 0 0 48%;

    @media only screen and (max-width: 640px) {
      flex: 0 0 100%;
    }
  `

  const flex66 = css`
    flex-basis: 60%;

    @media only screen and (max-width: 640px) {
      flex: 0 0 100% !important;
    }
  `

  const header = css`
    letter-spacing: 0.5rem;
  `

  return (
    <main css={tw`flex flex-col items-center justify-center min-h-screen text-lg text-center`}>
      <InView as='span' css={tw`w-full`} id='cv' onChange={handleNavigation} threshold={0.1}>
        <Card css={[tw`mx-auto my-12 rounded-2xl w-11/12 print:border-none print:shadow-none sm:my-8`, container]}>
          <CardContent css={tw`p-0 relative`}>
            <div css={tw`h-8 print:hidden w-full`}></div>
            <header css={tw`text-left px-8 lg:px-16`}>
              <div>
                <Typography component='h1' css={tw`my-4 text-6xl text-gray-600 uppercase`} gutterBottom variant='h1'>
                  {data ? data.firstName : <Skeleton />} <b css={tw`text-gray-800`}>{data && data.lastName}</b>
                </Typography>
                <div css={tw`border-primary border-t-4 mb-2 -mt-2`}></div>
                <Typography component='h2' css={tw`font-bold text-base text-gray-600 tracking-widest uppercase`} gutterBottom variant='p'>
                  {data ? data.roles.join(' · ') : <Skeleton />}
                </Typography>
              </div>
              <div css={tw`mt-8 md:mt-4 print:mt-4`}>
                <List css={tw`flex flex-wrap gap-4 justify-between`}>
                  <ListItem css={[tw`bg-gray-100`, flex50]} disablePadding>
                    <ListItemButton onClick={handleCopy({ clipboard: data && data.phone })}>
                      <ListItemIcon css={tw`min-w-max pr-4`}>
                        <PhoneInTalkIcon />
                      </ListItemIcon>
                      <ListItemText css={tw`min-w-max`}>{data && data.phone}</ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem css={[tw`bg-gray-100`, flex50]} disablePadding>
                    <ListItemButton onClick={handleCopy({ clipboard: data && data.location })}>
                      <ListItemIcon css={tw`min-w-max pr-4`}>
                        <FmdGoodIcon />
                      </ListItemIcon>
                      <ListItemText css={tw`min-w-max`}>{data && data.location}</ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem css={[tw`bg-gray-100`, flex50]} disablePadding>
                    <ListItemButton onClick={handleCopy({ clipboard: data && data.email })}>
                      <ListItemIcon css={tw`min-w-max pr-4`}>
                        <AlternateEmailIcon />
                      </ListItemIcon>
                      <ListItemText css={tw`min-w-max`}>{data && data.email}</ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem css={[tw`bg-gray-100`, flex50]} disablePadding>
                    <ListItemButton onClick={handleCopy({ clipboard: data && `https://${data.website}` })}>
                      <ListItemIcon css={tw`min-w-max pr-4`}>
                        <LanguageIcon />
                      </ListItemIcon>
                      <ListItemText css={tw`min-w-max md:hidden`}>{data && data.website}</ListItemText>
                      <ListItemText css={tw`hidden min-w-max md:block`}>{data && `https://${data.website}`}</ListItemText>
                    </ListItemButton>
                  </ListItem>
                </List>
              </div>
            </header>

            <div css={tw`mb-12 px-8 text-left lg:px-16`}>
              <Typography component='div' css={[tw`font-bold pt-12 text-xl text-gray-600 uppercase`, header]} gutterBottom variant='h2'>
                Professional Summary
              </Typography>
              <div css={tw`border-primary border-t-2 my-2 pl-12 w-10`}></div>
              <Typography component='div' css={tw`-mt-10 pt-12 text-base text-gray-500 tracking-widest`} gutterBottom variant='p'>
                {data ? data.summary : <Skeleton height={'10em'} />}
              </Typography>
            </div>

            <hr css={tw`m-8`} />

            <main css={tw`flex flex-wrap gap-8 lg:flex-nowrap print:flex-nowrap px-8 text-left`}>
              <div css={[tw`justify-start w-full`, col66]}>
                <Typography component='div' css={[tw`font-bold pt-4 text-xl text-gray-600 uppercase`, header]} gutterBottom variant='h2'>
                  Work Experience
                </Typography>

                <div css={tw`border-primary border-t-2 my-2 pl-12 w-10`}></div>

                {data ? (
                  data.experience.map((experience, key) => {
                    return <WorkExperience data={experience} key={`experience-${key}`} />
                  })
                ) : (
                  <div>
                    <Skeleton height='15em' />
                    <Skeleton css={tw`-mt-20`} height='15em' />
                  </div>
                )}
              </div>
              <div css={[tw`align-top justify-end relative w-full`, col33]}>
                <Typography component='div' css={[tw`font-bold pt-4 text-xl text-gray-600 uppercase`, header]} gutterBottom variant='h2'>
                  Proficiencies
                </Typography>
                <div css={tw`border-primary border-t-2 my-2 pl-12 w-10`}></div>
                <Typography component='div' css={tw`-mt-10 pt-12 text-base text-gray-500 tracking-widest`} gutterBottom variant='p'>
                  {data ? data.proficiencies : <Skeleton height={'15em'} />}
                </Typography>

                <Typography component='div' css={[tw`font-bold pt-12 text-xl text-gray-600 uppercase`, header]} gutterBottom variant='h2'>
                  Education
                </Typography>
                <div css={tw`border-primary border-t-2 my-2 pl-12 w-10`}></div>
                <Typography component='div' css={tw`-mt-10 pt-12 text-base text-gray-500 tracking-widest`} gutterBottom variant='p'>
                  {data ? data.education : <Skeleton height={'6em'} />}
                </Typography>

                <Typography component='div' css={[tw`font-bold pt-12 text-xl text-gray-600 uppercase`, header]} gutterBottom variant='h2'>
                  Biography
                </Typography>
                <div css={tw`border-primary border-t-2 my-2 pl-12 w-10`}></div>
                <Typography component='div' css={tw`-mt-10 pt-12 text-base text-gray-500 tracking-widest whitespace-pre-wrap`} gutterBottom variant='p'>
                  {data ? data.biography.replaceAll('\\n', '\n') : <Skeleton height={'6em'} />}
                </Typography>
              </div>
            </main>
            <div css={tw`h-8 print:hidden w-full`}></div>
          </CardContent>
        </Card>
      </InView>

      <InView as='span' css={tw`w-full`} delay={500} id='resources' onChange={handleNavigation} threshold={0.55}>
        <Card css={[tw`mx-auto my-12 mt-0 rounded-2xl w-11/12 print:hidden sm:my-2`, container]}>
          <CardContent css={tw`p-0 pb-0! relative`}>
            <div css={tw`bg-white overflow-hidden relative`}>
              <div css={tw`bg-white pb-8 relative z-10 lg:max-w-xl lg:pt-4 lg:w-full`}>
                <Divider />
                {data && data.github && <Github {...data} />}
              </div>
              <div css={tw`hidden lg:absolute lg:block lg:inset-y-0 lg:right-0 lg:w-1/2 `}>
                <img css={tw`h-full w-full object-cover`} src='https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
              </div>
            </div>
          </CardContent>
        </Card>
      </InView>

      <InView as='span' css={tw`w-full`} id='contact' onChange={handleNavigation} threshold={0.5}>
        <Card css={[tw`mx-auto my-12 mt-0 rounded-2xl w-11/12 print:hidden sm:my-8`, container]}>
          <CardContent css={tw`p-0 pb-0! relative`}>
            <div css={tw`flex flex-row flex-wrap justify-between`}>
              <div css={[tw`bg-indigo-600 px-8 py-12 text-white w-2/5`, flex33]}>
                <Typography component='h4' css={tw`font-bold text-base text-white tracking-widest uppercase`} gutterBottom variant='p'>
                  Contact Information
                </Typography>
                <Typography component='div' css={tw`p-4 text-base text-left text-white`} gutterBottom variant='p'>
                  Use the secure form or one of the contact methods listed below to contact {data && data.firstName} directly.
                </Typography>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton onClick={handleCopy({ clipboard: data && data.phone })}>
                      <ListItemIcon css={tw`min-w-max pr-4`}>
                        <PhoneInTalkIcon />
                      </ListItemIcon>
                      <ListItemText>{data && data.email}</ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton onClick={handleCopy({ clipboard: data && data.email })}>
                      <ListItemIcon css={tw`min-w-max pr-4`}>
                        <AlternateEmailIcon />
                      </ListItemIcon>
                      <ListItemText>{data && data.phone}</ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton onClick={handleCopy({ clipboard: data && `${data.address}, ${data.location}` })}>
                      <ListItemIcon css={tw`min-w-max pr-4`}>
                        <FmdGoodIcon />
                      </ListItemIcon>
                      <ListItemText>
                        {data && data.address}
                        <br />
                        {data && data.location}
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                </List>
              </div>
              <div css={[tw`px-8 py-12 w-3/5`, flex66]}>
                <ContactForm snackbar={callSnackbar} />
              </div>
            </div>
          </CardContent>
        </Card>
      </InView>

      <Snackbar
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        autoHideDuration={3000}
        onClose={handleClose}
        open={state.snackbar.open}
        TransitionComponent={transition}
      >
        <Alert onClose={handleClose} severity={state.snackbar.severity}>
          {state.snackbar.message}
        </Alert>
      </Snackbar>
    </main>
  )
}

export default Profile
