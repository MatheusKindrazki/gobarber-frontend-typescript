import React from 'react';

import { FiLogIn, FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import logo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="GoBarber" />

      <form action="">
        <h1>Faça seu cadastro</h1>

        <Input name="name" type="text" placeholder="Nome" icon={FiUser} />
        <Input name="email" type="text" placeholder="E-mail" icon={FiMail} />
        <Input
          name="password"
          type="password"
          placeholder="Senha"
          icon={FiLock}
        />

        <Button type="submit">Cadastrar</Button>
      </form>

      <a href="conta">
        <FiArrowLeft />
        Voltar para logon
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignUp;
