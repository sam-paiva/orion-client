import { Button, Dropdown, Menu, Radio, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ImmobileCard from '../../../shared/components/Cards/ImmobileCard';
import { useAppSelector } from '../../store/hooks';
import { fetchPropertiesSagaAction } from '../../store/properties/properties.saga';
import {
  Container,
  DefaultInput,
  InputNumberFormatted,
  LabelDescription,
  PropertiesContainer,
  SearchInputsContainer,
  TypeImmobileSelect,
} from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [immobileType, setImmobileType] = useState<number | null>(null);
  const properties = useAppSelector((state) => state.properties.properties);

  useEffect(() => {
    dispatch(fetchPropertiesSagaAction());
  }, []);

  const getImmobileTypeDescription = (value: number | null): string => {
    if (value === null) return '';
    else if (value === 1) return 'A venda';
    else return 'Alugar';
  };

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Radio.Group
          onChange={(e) => setImmobileType(e.target.value)}
          value={immobileType}
        >
          <Space direction="vertical">
            <Radio value={1}>A venda</Radio>
            <Radio value={2}>Alugar</Radio>
          </Space>
        </Radio.Group>
      </Menu.Item>
      <Menu.Divider></Menu.Divider>
      <Menu.Item key="1">
        <Button onClick={() => setImmobileType(null)}>Limpar</Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <Container>
      <SearchInputsContainer>
        <DefaultInput placeholder="Endereço"></DefaultInput>
        <Dropdown overlay={menu} trigger={['click']}>
          <TypeImmobileSelect
            value={getImmobileTypeDescription(immobileType)}
            placeholder="Tipo do imóvel"
          ></TypeImmobileSelect>
        </Dropdown>
        <DefaultInput
          type="number"
          placeholder="Número de quartos"
        ></DefaultInput>
        <InputNumberFormatted
          placeholder="Preço"
          formatter={(value) => {
            if (value == '') return value;
            return `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          }}
          parser={(value: string | undefined) => {
            if (value == '') return value;
            return value!.replace(/\$\s?|(,*)/g, '');
          }}
        />
      </SearchInputsContainer>
      <LabelDescription>
        {properties.length} Apartamentos ou casas encontradas
      </LabelDescription>
      <PropertiesContainer>
        {properties.map((immobile) => {
          return (
            <ImmobileCard immobile={immobile} key={immobile.id}></ImmobileCard>
          );
        })}
      </PropertiesContainer>
    </Container>
  );
};

export default Home;
