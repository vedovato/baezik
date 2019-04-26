import {useState} from 'react'
import Router from 'next/router'
import {Box, Button, Collapsible, Text} from 'grommet'
import {FormDown, FormNext} from 'grommet-icons'

const SubMenu = props => (
  <Button hoverIndicator="background" onClick={() => Router.push(props.render)}>
    <Box margin={{left: 'medium'}} direction="row" align="center" pad="xsmall">
      <Text size="small">{props.label}</Text>
    </Box>
  </Button>
)

const MenuButton = ({label, open, submenu, ...rest}) => {
  const [openMenu, setOpenMenu] = useState(false)
  const Icon = openMenu ? FormDown : FormNext

  return (
    <Box>
      <Button
        {...rest}
        hoverIndicator="background"
        onClick={() => setOpenMenu(!openMenu)}>
        <Box
          margin={submenu ? {left: 'small'} : undefined}
          direction="row"
          align="center"
          pad="xsmall">
          <Icon color="brand" />
          <Text size="small">{label}</Text>
        </Box>
      </Button>

      {submenu &&
        submenu.map((item, key) => (
          <Collapsible key={key} open={openMenu}>
            <SubMenu {...item} />
          </Collapsible>
        ))}
    </Box>
  )
}

const AppSidebar = () => (
  <Box
    flex
    width="small"
    // elevation='large'
    // align='center'
    background="cyan"
    justify="center">
    <Box>
      <MenuButton
        label="First Menu"
        submenu={[
          {label: 'About', render: '/about'},
          {label: 'Test Page', render: '/test'},
        ]}
      />
    </Box>
  </Box>
)

export default AppSidebar
