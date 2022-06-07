import { Select as DSelect } from 'antd';
import styled, { StyledComponent } from 'styled-components';

type SelectType = typeof DSelect;

export const Select: StyledComponent<SelectType, any, {}, never> = styled(
  DSelect
)``;
