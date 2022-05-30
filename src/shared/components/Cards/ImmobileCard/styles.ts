import styled from 'styled-components';

export const Container = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  flex-direction: row;
  border: 1px solid var(--grey);
  border-radius: 10px;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    box-shadow: 4px 4px #888888;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 10px;
`;

export const Description = styled.div`
  font-size: 17px;
  margin-top: 20px;
  max-width: 700px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ImmobileTypeDescription = styled.div`
  border-radius: 10px;
  border: 1px solid var(--black);
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--outline);

  > span {
    color: #fff;
  }
`;

export const ImageContainer = styled.div`
  min-width: 300px;
  border-right: 1px solid var(--grey);
  height: 100%;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > h1 {
    font-size: 18px;
  }

  > span {
    font-size: 22px;
    font-weight: bold;
  }
`;

export const ImmobileDetails = styled.div`
  display: flex;
  margin-top: 10px;
`;
