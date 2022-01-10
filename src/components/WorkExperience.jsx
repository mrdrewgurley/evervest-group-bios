import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import tw from 'twin.macro'

const WorkExperience = ({ data }) => {
  return (
    <div>
      <Typography component='div' css={tw`font-bold pt-2 text-base text-gray-500 tracking-widest uppercase`} gutterBottom variant='h3'>
        {data.roles.join(' · ')}
      </Typography>
      <Typography component='div' css={tw`-mt-2 text-base text-gray-400 tracking-widest uppercase`} gutterBottom variant='h5'>
        {`${data.range} | ${data.name}`}
      </Typography>
      <Typography component='div' css={tw`text-base text-gray-400`} gutterBottom variant='h5'>
        {data.summary}
      </Typography>
      {data.accomplishments.map((accomplishment, key) => {
        return (
          <List key={`accomplishment-${key}`}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon css={tw`hidden md:block print:block`}>
                  <ChevronRightRoundedIcon />
                </ListItemIcon>
                <ListItemText>{accomplishment}</ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        )
      })}
    </div>
  )
}

export default WorkExperience
