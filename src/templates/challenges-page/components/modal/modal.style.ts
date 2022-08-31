import styled from 'styled-components';
import { Box } from '@gama-academy/smash-web'

export const ModalOverlay = styled.div`
/* @media only screen and (min-width: 768px) {*/
 position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
`
export const ModalWrapper = styled.div`
  position: fixed;
  top: 25%;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  display:flex ;
  flex-direction: column;
  text-align: center;
  padding: 20px;
  
`
export const Modal = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin:20px auto;
 align-items: center;
  border-radius: 3px;
  max-width: 800px;
  min-width: 300px;
  padding: 2em; 
  display: flex;
  flex-direction: column;
 width: 48rem;
  text-align: center;
  border-radius: 4px;

`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  font-weight: bold;
  display: flex;
  text-align: center;
`
export const ModalButtonClose = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
`
export const ModalBody = styled.div`
justify-content: center;
 text-align: center;
  padding: 8px 0;
`
export const ModalFooter = styled.div`
   display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 8px 0;
`




