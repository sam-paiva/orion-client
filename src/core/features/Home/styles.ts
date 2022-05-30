import { Input, InputNumber } from 'antd';
import styled, { css } from 'styled-components';

const BaseInput = css`
  border-radius: 10px;
  margin-right: 10px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const SearchInputsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 200px;
`;

export const DefaultInput = styled(Input)`
  ${BaseInput}
  height: 50px;
  width: 200px;
`;

export const TypeImmobileSelect = styled(Input)`
  ${BaseInput}
  height: 50px;
  width: 200px;
`;

export const InputNumberFormatted = styled(InputNumber)`
  ${BaseInput}
  height: 50px;
  width: 200px;
  display: flex;
  align-items: center;
`;

export const LabelDescription = styled.p`
  font-weight: 600;
  font-size: 20px;
`;

export const PropertiesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 100%);
  margin-top: 20px;
  row-gap: 8px;
`;
