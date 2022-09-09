import styled from 'styled-components';
import { Box } from '@gama-academy/smash-web'

export const ModalOverlay = styled(Box)`
 position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
 
  
`;
export const ModalWrapper = styled(Box)`
  position: fixed;
  top: 25%;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0; 
  
`;
export const Modal = styled(Box)`
  z-index: 100;
  background: white;
  position: relative;
  margin:20px auto;
 align-items: center;
  border-radius: 3px;
  max-width: 800px;
  min-width: 300px;
  padding: 2em; 
  text-align: center;
  border-radius:8px;
  border: 0.5px solid #CCD1CF;
;
@media  (max-width: 768px) {
 margin:15px;
 
  }
`;
export const ModalHeader = styled(Box)`
  padding: 8px 0;
  font-weight: bold;
  justify-content: center;

`;
export const ModalButtonClose = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 16px;
    position: absolute;
    right: 3rem;
    top: 2rem;
    font-size: 24px;
`;



