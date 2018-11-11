import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


class Modal extends Component {
  static propTypes = {
    closeButton: PropTypes.bool,
    overlayCloses: PropTypes.bool,
    onClose: PropTypes.func,
  };

  static defaultProps = {
    closeButton: true,
    overlayCloses: true,
    onClose: () => null,
  };

  closeModal = () => {
    this.props.onClose();
  };

  render() {
    const {
      closeButton,
      overlayCloses,
    } = this.props;

    return (
      ReactDOM.createPortal(
        <div className="ex-7">
          <div className="content">
            {this.props.children}

            {
              closeButton && (
                <button onClick={this.closeModal}>
                  <i className="fa fa-times" />
                </button>
              )
            }
          </div>

          <div
            className="overlay"
            onClick={overlayCloses ? this.closeModal : () => null}
          />
        </div>
        , window.modals)
    );
  }
}

export class ModalParent extends Component {
  state = {
    modalVisible: false,
    nestedModalVisible: false,
  };

  render() {
    const {
      modalVisible,
      nestedModalVisible,
    } = this.state;

    return (
      <div>
        <button onClick={() => this.setState({ modalVisible: true })}>Open Modal</button>
        {
          modalVisible && (
            <Modal
              overlayCloses={true}
              closeButton={true}
              onClose={() => this.setState({ modalVisible: false })}
            >
              <h3>Hello Modal!</h3>
              <p>
                This is a small modal.
              </p>

              <a
                href="#"
                onClick={() => this.setState({ nestedModalVisible: true })}
              >
                Open another modal
              </a>

              {
                nestedModalVisible && (
                  <Modal
                    overlayCloses={false}
                    closeButton={true}
                    onClose={() => this.setState({ nestedModalVisible: false })}
                  >
                    <h1>This is a nested modal</h1>
                  </Modal>
                )
              }
            </Modal>
          )
        }
      </div>
    );
  }
}

export default Modal;
