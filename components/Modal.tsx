import { ReactNode, Component, RefObject } from 'react';

interface ModalProps {
  children: ReactNode,
  hasSubmit: boolean,
  ref: RefObject<Modal | undefined>,
}

export default class Modal extends Component<ModalProps> {
  private closeButton: HTMLElement | null = null;

  submitHandler = () => {
    if (this.closeButton) {
      this.closeHandler();
    }
  };

  closeHandler = () => {
    if (this.closeButton) {
      this.closeButton.click();
    }
  }
  render() {
    const { children, hasSubmit } = this.props;
    return (
      <>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Create movie
        </button>
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Movie</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {children}
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  data-dismiss="modal"
                  ref={el => this.closeButton = el}
                  onClick={this.closeHandler}
                >Close</button>
                {hasSubmit &&
                  <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={this.submitHandler}
                >Save changes</button>
                }
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
};
