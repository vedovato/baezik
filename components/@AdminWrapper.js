import {useState} from 'react'
import theme from '../utils/config'
import AppBar from './@AppBar'
import AppSidebar from './@Sidebar'
import {Box, Collapsible, Grommet} from 'grommet'
import {GlobalContext} from '../context/admin'

const AdminWrapper = props => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  return (
    <GlobalContext.Provider value={{sidebarOpen, toggleSidebar}}>
      <Grommet theme={theme} full>
        <Box fill>
          <Box direction="row" flex overflow={{horizontal: 'hidden'}}>
            <Collapsible direction="horizontal" open={sidebarOpen}>
              <AppSidebar role="" />
            </Collapsible>

            <Box flex background="red">
              <AppBar />
              {props.children}
            </Box>
          </Box>
        </Box>
      </Grommet>
    </GlobalContext.Provider>
  )
}

export default AdminWrapper
