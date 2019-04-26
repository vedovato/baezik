import {useContext} from 'react'
import {GlobalContext} from '../context/admin'
import {Box, Button, Heading} from 'grommet'
import {Menu} from 'grommet-icons'

const AppBar = props => {
  const {toggleSidebar} = useContext(GlobalContext)

  return (
    <Box
      tag="header"
      direction="row"
      align="center"
      // justify="between"
      background="nhe"
      pad={{left: 'small', right: 'small', vertical: 'xxxsmall'}}
      elevation="medium"
      style={{zIndex: '1'}}>
      <Button icon={<Menu />} onClick={toggleSidebar} />

      <Heading level="3" margin={{left: 'small'}}>
        My App Goes Here
      </Heading>
    </Box>
  )
}

export default AppBar
