import styled from 'styled-components';
import { Box, getThemeColor } from '@gama-academy/smash-web'

export const Tags = styled(Box)`
    border: 1px solid ${getThemeColor('secondary.4')};
    border-radius: 63px;
    background-color: ${getThemeColor('secondary.0')};
    color: ${getThemeColor('secondary.4')};
    padding: 4px 16px;
    margin-left:8px;
`