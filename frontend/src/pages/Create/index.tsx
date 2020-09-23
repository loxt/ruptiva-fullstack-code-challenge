import React, { useState } from 'react'
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
import api from '../../config/api'

interface Vehicle {
  name: string
  manufacturer: string
  hp: number
  price: number
  image: string
}

function Create() {
  const [vehicle, setVehicle] = useState({
    name: 'Sem nome',
    hp: 0,
    image:
      'data:image/png;base64,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',
    price: 0,
    manufacturer: 'Sem fabricante'
  } as Vehicle)

  function submitForm(e: any) {
    api
      .post('/car/post', vehicle)
      .then((data) => {
        console.log(data.data)
      })
      .catch((e) => {
        throw new Error(e)
      })
  }

  return (
    <BackContainer>
      <Container>
        <Title>Criar veículo</Title>
        <Form>
          <Label htmlFor='name'>Nome do veículo</Label>
          <Input
            onChange={(text) =>
              setVehicle({
                ...vehicle,
                name: String(text.target.value)
              })
            }
            type='text'
            id='name'
            placeholder='Exemplo: Hornet'
          />

          <Label htmlFor='manufacturer'>Fabricante</Label>
          <Input
            onChange={(text) =>
              setVehicle({
                ...vehicle,
                manufacturer: String(text.target.value)
              })
            }
            type='text'
            id='manufacturer'
            placeholder='Exemplo: Honda'
          />

          <Label htmlFor='hp'>Cilindradas</Label>
          <Input
            onChange={(text) =>
              setVehicle({
                ...vehicle,
                hp: +text.target.value
              })
            }
            type='text'
            id='hp'
            placeholder='Exemplo: 600'
          />

          <Label htmlFor='price'>Preço do veículo</Label>
          <Input
            onChange={(text) =>
              setVehicle({
                ...vehicle,
                price: +text.target.value
              })
            }
            type='text'
            id='price'
            placeholder='Exemplo: 5000.25'
          />

          <Label htmlFor='image'>Imagem do veículo</Label>
          <Input
            onChange={(text) =>
              setVehicle({
                ...vehicle,
                image: String(text.target.value)
              })
            }
            type='text'
            id='image'
            placeholder='Insira o link da imagem'
          />

          <Link
            style={{
              textDecoration: 'none',
              zIndex: 10
            }}
            to={'/'}
          >
            <Button onClick={submitForm}>Criar</Button>
          </Link>
        </Form>
      </Container>
    </BackContainer>
  )
}

export default Create
