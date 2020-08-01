import { ReactNode} from 'react';

interface ModalProps {
  children: ReactNode,
  hasSubmit: boolean,
}

export const Modal = ({children, hasSubmit}: ModalProps) => {
  let closeButton: HTMLElement | null = null;

  const submitHandler = () => {
    
    if (closeButton) {
      closeButton.click();
    }
  };

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
                ref={el => closeButton = el}
              >Close</button>
              {hasSubmit &&
                <button 
                type="button" 
                className="btn btn-primary"
                onClick={submitHandler}
              >Save changes</button>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
};
