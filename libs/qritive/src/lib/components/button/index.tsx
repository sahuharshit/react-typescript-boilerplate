import { Button } from 'antd';
import styled, { StyledComponent } from 'styled-components';
import { theme } from '../../theme';

type ButtonType = typeof Button;

export const DefaultButton: StyledComponent<
  ButtonType,
  any,
  {},
  never
> = styled(Button)`
  box-sizing: border-box;
  min-width: 113px;
  min-height: 31px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-transform: capitalize;
  transition: 0.5s;
`;

export const PrimaryButton: StyledComponent<
  ButtonType,
  any,
  {},
  never
> = styled(Button)`
  border: 1px solid ${theme.primary.main};
  background-color: ${theme.neutral.L95};

  :focus {
    background-color: ${theme.primary.main};
    color: ${theme.neutral.L95};
  }
`;
