import { Button } from 'antd';
import styled from 'styled-components';
import { theme } from '../theme';

export const DefaultButton = styled(Button)`
    box-sizing: border-box;
    min-width: 113px;
    min-height: 31px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-transform: capitalize;
    transition: .5s;

    :focus {
        background-color: ${theme.primary.main};
        color: ${theme.neutral.main};
    }
`;

export const PrimaryButton = styled(DefaultButton)`
    border: 1px solid ${theme.primary.main};
    background-color: ${theme.neutral.L95};

    :focus {
        background-color: ${theme.primary.main};
        color: ${theme.neutral.L95};
    }
`