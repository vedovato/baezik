import theme from '../../utils/config'
import AppBar from '../@AppBar'
import AppSidebar from '../@Sidebar'
import {Box, Collapsible, Grommet} from 'grommet'

const AdminWrapper = props => (
  <Grommet theme={theme} full>
    <Box fill>
      <AppBar />

      <Box direction="row" flex overflow={{horizontal: 'hidden'}}>
        <Collapsible direction="horizontal" open={true}>
          <AppSidebar role="" />
        </Collapsible>

        <Box flex align="center" justify="center" background="red">
          {props.children}
        </Box>
      </Box>
    </Box>
  </Grommet>
)

export default AdminWrapper
