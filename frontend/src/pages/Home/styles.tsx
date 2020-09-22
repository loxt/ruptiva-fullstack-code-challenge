import styled from 'styled-components'

export const Container = styled.div`
  background-color: #f9f9f9;

  display: grid;
  grid-template-rows: 5vh min-content;
`

export const Items = styled.div`
  margin: 7rem;
  padding: 2rem;
  background-color: #457b9d;
  display: grid;

  grid-gap: 2rem;
  grid-template-rows: repeat(2, minmax(35vh, 1fr));
  grid-template-columns: repeat(auto-fit, minmax(10rem, 30rem));
`

export const Item = styled.div`
  background-color: #f9f9f9;
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  text-align: center;
`

export const Image = styled.img`
  width: 100%;
  max-width: 30rem;

  display: grid;
  grid-column: 1 / -1;
`
export const Name = styled.h3``
export const Manufacturer = styled.h3``
export const Price = styled.h4``
export const HorsePower = styled.h4``
