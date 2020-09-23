import React from 'react'
import {
  BackContainer,
  Container,
  Form,
  Label,
  Input,
  Title,
  Button
} from './styles'
import { Link } from 'react-router-dom'

function Create() {
  return (
    <BackContainer>
      <Container>
        <Title>Criar veículo</Title>
        <Form>
          <Label htmlFor='name'>Nome do veículo</Label>
          <Input type='text' id='name' placeholder='Exemplo: Hornet' />

          <Label htmlFor='manufacturer'>Fabricante</Label>
          <Input type='text' id='manufacturer' placeholder='Exemplo: Honda' />

          <Label htmlFor='hp'>Cilindradas</Label>
          <Input type='text' id='hp' placeholder='Exemplo: 600' />

          <Label htmlFor='price'>Preço do veículo</Label>
          <Input type='text' id='price' placeholder='Exemplo: 5000.25' />

          <Link
            style={{
              textDecoration: 'none',
              zIndex: 10
            }}
            to={'/'}
          >
            <Button>Criar</Button>
          </Link>
        </Form>
      </Container>
    </BackContainer>
  )
}

export default Create
