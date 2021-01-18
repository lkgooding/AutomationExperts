import React {useState} from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import Formiked from './Formiked'

function Modal() {
  const [open, setOpen] = useState(false)

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      trigger={submitForm}
    >
      <Header icon>
        <Icon name='paper plane outline' />
        Success! 
      </Header>
      <Modal.Content>
        <p>
          Your query was sent successfully, we will get back to your shortly.
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='red' inverted onClick={() => setOpen(false)}>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' inverted onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default Modal

