import { Form, Select } from 'antd';
import { MaskedInput } from 'antd-mask-input';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ImmobileTypeCard from '../../../shared/components/Cards/ImmobileTypeCard';
import { CreateImmobileRequest } from '../../../shared/requests/create-immobile.request';
import { AcquisitionType } from '../../entities/acquisitionType';
import { ImmobileType } from '../../entities/immobileType';
import { createImmobileSagaAction } from '../../store/properties/properties.saga';
import {
  AddressDescription,
  ApartmentIcon,
  BedroomInput,
  Container,
  ContentBody,
  DefaultInput,
  DescriptionInput,
  FormContainer,
  HouseIcon,
  InputNumberFormatted,
  SubmitButton,
  Wrapper,
} from './styles';

interface FormData {
  title: string;
  description: string;
  bedrooms: number;
  acquisitionType: AcquisitionType;
  state: string;
  city: string;
  district: string;
  price: string;
  contact: string;
}

const CreateImmobile: React.FC = () => {
  const dispatch = useDispatch();
  const [immobileType, setImmobileType] = useState<ImmobileType | null>(null);

  const onSubmit = (values: FormData) => {
    const request: CreateImmobileRequest = {
      immobileType: immobileType!,
      address: {
        city: values.city,
        state: values.state,
        district: values.district,
      },
      acquisitionType: Number(values.acquisitionType),
      bedrooms: values.bedrooms,
      description: values.description,
      photosUrl: [],
      price: Number(values.price),
      title: values.title,
      whatsappContact: values.contact,
    };

    dispatch(createImmobileSagaAction(request));
  };

  return (
    <Container>
      <Wrapper>
        <ContentBody>
          <ImmobileTypeCard
            immobileType={ImmobileType.House}
            setImmobileType={(type) => setImmobileType(type)}
            icon={<HouseIcon />}
            name="Casa"
            isChecked={immobileType == ImmobileType.House}
          ></ImmobileTypeCard>
          <ImmobileTypeCard
            immobileType={ImmobileType.Apartment}
            setImmobileType={(type) => setImmobileType(type)}
            icon={<ApartmentIcon />}
            name="Apartamento"
            isChecked={immobileType == ImmobileType.Apartment}
          ></ImmobileTypeCard>
        </ContentBody>
        <FormContainer>
          <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onSubmit}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="title"
              rules={[{ required: true, message: 'Campo obrigatório' }]}
            >
              <DefaultInput placeholder="Título" />
            </Form.Item>
            <Form.Item
              name="description"
              rules={[{ required: true, message: 'Campo obrigatório' }]}
            >
              <DescriptionInput
                placeholder="Descrição"
                showCount
                maxLength={700}
              />
            </Form.Item>
            <Form.Item
              name="bedrooms"
              rules={[{ required: true, message: 'Campo obrigatório' }]}
            >
              <BedroomInput min={0} placeholder="Número de quartos" />
            </Form.Item>
            <Form.Item
              name="acquisitionType"
              rules={[{ required: true, message: 'Campo obrigatório' }]}
            >
              <Select placeholder="Tipo de transação">
                <Select.Option value="0">Venda</Select.Option>
                <Select.Option value="1">Alugel</Select.Option>
                <Select.Option value="2">Venda ou Aluguel</Select.Option>
              </Select>
            </Form.Item>
            <AddressDescription>Dados do Endereço</AddressDescription>
            <Form.Item
              name="state"
              rules={[{ required: true, message: 'Campo obrigatório' }]}
            >
              <DefaultInput placeholder="Estado" />
            </Form.Item>
            <Form.Item
              name="city"
              rules={[{ required: true, message: 'Campo obrigatório' }]}
            >
              <DefaultInput placeholder="Cidade" />
            </Form.Item>
            <Form.Item
              name="district"
              rules={[{ required: true, message: 'Campo obrigatório' }]}
            >
              <DefaultInput placeholder="Bairro" />
            </Form.Item>
            <Form.Item
              name="price"
              rules={[{ required: true, message: 'Campo obrigatório' }]}
            >
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
            </Form.Item>
            <Form.Item
              name="contact"
              rules={[{ required: true, message: 'Campo obrigatório' }]}
            >
              <MaskedInput mask={'(00) 00000-0000'} />
            </Form.Item>
            <Form.Item>
              <SubmitButton>Anunciar</SubmitButton>
            </Form.Item>
          </Form>
        </FormContainer>
      </Wrapper>
    </Container>
  );
};

export default CreateImmobile;
