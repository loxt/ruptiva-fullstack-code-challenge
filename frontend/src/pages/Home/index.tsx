import React from 'react'
import Navbar from '../../components/Navbar'
import {
  Container,
  HorsePower,
  Image,
  Item,
  Items,
  Manufacturer,
  Name,
  Price
} from './styles'

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Items>
        <Item>
          <Image src='https://www.motos.com.br/thumbs/1366x768/fd/4db902c409d0547275fbda13208c68158ad2782d1b988a227902ae1c011126.jpg' />
          <Name>name</Name>
          <Manufacturer>Manufacturer</Manufacturer>
          <HorsePower>hp</HorsePower>
          <Price>price</Price>
        </Item>
      </Items>
    </Container>
  )
}
