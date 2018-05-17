import React from 'react';

import Modal from 'react-modal';

import { Button } from '@pubsweet/ui';

import SubmitPreprintForm from './SubmitPreprintForm';

const styles = {
  modal: {
    content: {
      maxWidth: 600,
      height: 400,
      marginRight: 'auto',
      marginLeft: 'auto',
      marginTop: 'auto',
      marginBottom: 'auto'
    }
  }
};

const EMPTY_PREPRINT = {
  preprintUrl: "",
  title: "",
  keywords: [],
  created_date: '11/05/2018',
  created_username: 'me'
};

class SubmitPreprintButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preprint: EMPTY_PREPRINT
    };
  }

  onSubmitPreprintClicked = () => {
    this.setState({
      submitPreprintFormShown: true,
    });
  }

  closeModal = () => {
    this.setState({
      submitPreprintFormShown: false
    });
  }

  onSubmitPreprint = () => {
    this.props.onSubmitPreprint(this.state.preprint);
    this.closeModal();
  }

  onPreprintChanged = preprint => {
    this.setState({
      preprint
    })
  }

  render() {
    const {
      submitPreprintFormShown,
      preprint
    } = this.state;
    return (
      <div>
        <Button onClick={ this.onSubmitPreprintClicked } primary>
          Submit a Preprint
        </Button>
        <Modal
          style={ styles.modal }
          isOpen={ submitPreprintFormShown }
          onRequestClose={ this.closeModal }
          contentLabel="Submit Preprint"
          ariaHideApp={ false }
        >
          <SubmitPreprintForm preprint={ preprint } onChange={ this.onPreprintChanged } />
          <div>
            <Button onClick={ this.closeModal }>
              Cancel
            </Button>
            <Button onClick={ this.onSubmitPreprint } primary>
              Submit
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default SubmitPreprintButton;
