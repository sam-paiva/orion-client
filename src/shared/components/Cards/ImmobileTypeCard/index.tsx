import React, { ReactElement } from 'react';
import { ImmobileType } from '../../../../core/entities/immobileType';
import { Container, ContentBody } from './styles';

interface Props {
  name: string;
  icon: ReactElement;
  setImmobileType: (immobileType: ImmobileType) => void;
  immobileType: ImmobileType;
  isChecked: boolean;
}

const ImmobileTypeCard: React.FC<Props> = (props: Props) => {
  return (
    <Container
      isChecked={props.isChecked}
      onClick={() => props.setImmobileType(props.immobileType)}
    >
      {props.icon}
      <ContentBody>{props.name}</ContentBody>
    </Container>
  );
};

export default ImmobileTypeCard;
