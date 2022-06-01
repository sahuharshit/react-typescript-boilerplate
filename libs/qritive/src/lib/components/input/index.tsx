import { Input as DInput } from 'antd';
import styled, { StyledComponent } from 'styled-components';

type InputType = typeof DInput;
export const Input: StyledComponent<InputType, any, {}, never> = styled(
  DInput
)``;
