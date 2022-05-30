import React from 'react';
import { Immobile } from '../../../../core/entities/immobile';
import { ImmobileType } from '../../../../core/entities/immobileType';
import {
  Container,
  Description,
  ImageContainer,
  ImmobileDetails,
  ImmobileTypeDescription,
  InfoContainer,
  Wrapper,
} from './styles';

interface Props {
  immobile: Immobile;
}

const ImmobileCard: React.FC<Props> = (props: Props) => {
  const getImmobileTypeDescription = (type: ImmobileType) => {
    if (type == ImmobileType.Apartment) return 'Apartamento';

    return 'Casa';
  };

  return (
    <Container>
      <ImageContainer></ImageContainer>
      <Wrapper>
        <InfoContainer>
          <h1>{props.immobile.title}</h1>
          <span>
            {props.immobile.price.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
          <div>{props.immobile.bedrooms} Quarto(s)</div>
          <ImmobileDetails>
            {props.immobile.address.district} | {props.immobile.address.city}
          </ImmobileDetails>

          <Description>{props.immobile.description}</Description>
        </InfoContainer>
        <ImmobileTypeDescription>
          <span>{getImmobileTypeDescription(props.immobile.immobileType)}</span>
        </ImmobileTypeDescription>
      </Wrapper>
    </Container>
  );
};

export default ImmobileCard;
