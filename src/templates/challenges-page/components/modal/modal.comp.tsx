
import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'
import * as S from './modal.style';

interface ModalProps {
  isShowing: boolean;
  toggle: () => void;
}

const Modal: React.FC<ModalProps> = ({ isShowing, toggle, children }) => { 
  useEffect(() => {
    const listner = function (e: KeyboardEvent ) {
      if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27 ) {
        e.preventDefault();
        e.stopPropagation();

        isShowing && toggle();
      }
    }

    window.addEventListener('keyup', listner)

    return (() => {
      window.removeEventListener('keyup', listner)
    })

  }, [isShowing, toggle])

  return (
    isShowing ? ReactDom.createPortal(
      <S.ModalOverlay>
        <S.ModalWrapper>
          <S.Modal>
            {children}
          </S.Modal>
        </S.ModalWrapper>
      </S.ModalOverlay>, document.body
    ) : null
  )
}

interface ModalHeaderProps {
  toggle: () => void;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ toggle, children }) => (
    <S.ModalHeader>
        {children }
    <S.ModalButtonClose
            data-dismiss="modal" 
        onClick={toggle}
    >
    x
    </S.ModalButtonClose>    
    </S.ModalHeader>
)

export const ModalBody: React.FC = ({ children }) => (
    <S.ModalBody>
        {children}
    </S.ModalBody>
)

export const ModalFooter: React.FC = ({ children }) => (
    <S.ModalFooter>
        {children}
  </S.ModalFooter>
)

export const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  }
}

export default Modal;
