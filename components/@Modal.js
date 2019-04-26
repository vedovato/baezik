import {Box, Button, Heading, Text, Layer, TextInput, Stack} from 'grommet'
import {FormClose} from 'grommet-icons'

const LayerHeader = props => (
  <Box
    tag="header"
    border="bottom"
    direction="row"
    justify="between"
    pad={{bottom: '10px'}}
    margin={{bottom: '20px'}}>
    <Heading level="2" margin="none">
      {props.title}
    </Heading>
    <Button plain icon={<FormClose size="large" />} onClick={props.onEsc} />
  </Box>
)

const Modal = props => (
  <Layer position="right" full="vertical" onEsc={props.onEsc}>
    <Box
      width="large"
      fill="vertical"
      direction="column"
      overflow="auto"
      pad="medium"
      justify="center">
      <LayerHeader {...props} />
      <Box fill overflow="auto" color="yellow">
        {props.render}
      </Box>
      {/*
      <Button label="fechar" onClick={toggleLayer} />
      */}
    </Box>
  </Layer>
)

export default Modal
