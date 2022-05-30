import { Input, InputNumber } from 'antd';
import styled from 'styled-components';
import { Apartment, HouseFill } from '../../../shared/styles/icons';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  border: 1px solid #e9edef;
  padding: 20px;
`;

export const ContentBody = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;

export const HouseIcon = styled(HouseFill)`
  font-size: 18px;
  fill: #68808c;
`;

export const ApartmentIcon = styled(Apartment)`
  font-size: 18px;
  fill: #68808c;
`;

export const InputNumberFormatted = styled(InputNumber)`
  display: flex;
  align-items: center;
  width: 200px;
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const DefaultInput = styled(Input)`
  width: 825px;
`;

export const BedroomInput = styled(InputNumber)`
  width: 200px;
`;

export const DescriptionInput = styled(Input.TextArea)`
  height: 100px;
`;

export const SubmitButton = styled.button`
  background-color: #ff5500;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  text-align: center;
  height: 35px;
  border-radius: 5px;
  color: var(--white);
`;

export const AddressDescription = styled.h3`
  margin-top: 40px;
  color: var(--grey);
`;
