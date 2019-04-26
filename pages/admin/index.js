import {Box, Button} from 'grommet'
import AdminWrapper from '../../components/@AdminWrapper'
import Modal from '../../components/@Modal'
import DemoForm from '../../components/demo/Form'

// const formSchema = [{}]

const DefaultApp = () => {
  const [showLayer, setShowLayer] = React.useState(false)
  const toggleLayer = () => setShowLayer(!showLayer)

  setTimeout(() => setShowLayer(true), 300)

  return (
    <AdminWrapper>
      <Box>INDEXX</Box>
      <Button label="Abrir Layer" onClick={toggleLayer} />
      {showLayer && (
        <Modal title="my hero!" render={<DemoForm />} onEsc={toggleLayer} />
      )}
    </AdminWrapper>
  )
}

export default DefaultApp
