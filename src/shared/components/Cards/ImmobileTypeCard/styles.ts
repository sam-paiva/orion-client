import styled from 'styled-components';

export const Container = styled.div<{ isChecked: boolean }>`
  height: 100px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${(props) => (props.isChecked ? 'red' : '#e9edef')};
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  margin-right: 10px;
  &:hover {
    box-shadow: 5px 5px #888888;
  }
`;

export const ContentBody = styled.h3`
  font-size: 24px;
  color: #ff5500;
`;
