import React from 'react'
import { Button, Container, Title } from './styles'

function Navbar() {
  return (
    <Container>
      <Title>Não logado!</Title>
      <Button>Entrar</Button>
      <Button>Cadastrar</Button>
    </Container>
  )
}

export default Navbar
