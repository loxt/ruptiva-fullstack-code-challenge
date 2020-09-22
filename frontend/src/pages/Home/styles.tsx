import styled from 'styled-components'

export const Container = styled.div`
  background-color: #f9f9f9;

  display: grid;
  grid-template-rows: 5vh min-content;
`

export const Items = styled.div`
  margin: 7rem;
  padding: 5.2rem;
  background-color: #457b9d;
  display: grid;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  grid-gap: 2rem;
  grid-template-rows: repeat(auto-fit, minmax(35vh, 1fr));
  grid-template-columns: repeat(auto-fit, minmax(min-content, 30rem));
`

export const Item = styled.div`
  background-color: #f9f9f9;
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  border-radius: 1rem;
`

export const Image = styled.img`
  width: 100%;
  background-color: #000;

  margin-bottom: 1.5rem;

  display: grid;
  grid-column: 1 / -1;
`

export const Infos = styled.div`
  margin-left: 2rem;

  display: grid;
  grid-template-columns: repeat(2, minmax(10rem, 1fr));
`

export const Name = styled.h3`
  font-size: 1.5rem;
  font-weight: 300;
  color: #006a71;
`
export const Manufacturer = styled.h3`
  font-size: 1.5rem;
  font-weight: 300;
  color: #006a71;
`
export const Price = styled.h4`
  font-size: 1.7rem;
  font-weight: 300;
  color: #ff7e67;
`
export const HorsePower = styled.h4`
  font-size: 1.7rem;
  font-weight: 300;
  color: #ff7e67;
`

export const Button = styled.button`
  font-size: 1.8rem;
  margin-top: 1.5rem;
  border: 0;
  font-weight: 300;
  color: #fff;
  background-color: #ff7e67;

  display: grid;
  width: 100%;
  padding: 1rem;

  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;

  grid-column: 1 / -1;

  cursor: pointer;
`
