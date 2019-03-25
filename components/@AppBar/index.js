import {Box, Button, Heading} from 'grommet'
import {Notification} from 'grommet-icons'

const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    // justify="between"
    background="nhe"
    pad={{left: 'small', right: 'small', vertical: 'small'}}
    elevation="medium"
    style={{zIndex: '1'}}>
    <Button icon={<Notification />} onClick={() => console.warn('apertou')} />

    <Heading level="3" margin="none">
      My App Goes Here
    </Heading>
  </Box>
)

export default AppBar
