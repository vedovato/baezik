// import GraphTest from './Graphtest'
import {FormClose, Notification} from 'grommet-icons'
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  Layer,
  ResponsiveContext,
} from 'grommet'

// const theme = {
//   global: {
//     font: {
//       family: 'Roboto',
//       size: '14px',
//       height: '1.4em',
//     },
//   },
// }

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
      nhe: 'green',
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
}

// const App = () => (
//   <Grommet theme={theme}>
//     <Heading>Heyo</Heading>
//     <GraphTest />
//   </Grommet>
// )

const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="nhe"
    pad={{left: 'medium', right: 'small', vertical: 'small'}}
    elevation="medium"
    style={{zIndex: '1'}}
    {...props}
  />
)

class App extends React.Component {
  state = {
    showSidebar: false,
  }

  render() {
    const {showSidebar} = this.state

    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <AppBar>
                <Heading level="3" margin="none">
                  My App
                </Heading>

                <Button
                  icon={<Notification />}
                  onClick={() =>
                    this.setState({showSidebar: !this.state.showSidebar})
                  }
                />
              </AppBar>

              <Box direction="row" flex overflow={{horizontal: 'hidden'}}>
                <Collapsible direction="horizontal" open={showSidebar}>
                  <Box
                    flex
                    width="medium"
                    background="light-2"
                    elevation="large"
                    align="center"
                    background="purple"
                    justify="center">
                    LATERAL
                  </Box>
                </Collapsible>

                <Box flex align="center" justify="center" background="red">
                  app body
                </Box>
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    )
  }
}

export default App
