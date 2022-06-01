import { Radio as DRadio } from 'antd';
import styled, { StyledComponent } from 'styled-components';

type RadioType = typeof DRadio;
export const Radio: StyledComponent<RadioType, any, {}, never> = styled(
  DRadio
)``;
