import styled from 'styled-components';
import {Container }from 'react-bootstrap/';

export const StyledHeader = styled(Container)`
    
`

export const IconsRemove = styled.div`
display: flex;
@media only screen and (max-width: 768px) {
    display: none;
}
`

export const IconsShow = styled.div`
@media only screen and (min-width: 768px) {
    display: none;
}
`