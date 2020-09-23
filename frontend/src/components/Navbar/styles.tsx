import styled from 'styled-components'

export const Container = styled.div`
  height: 6rem;
  background-color: #ff7e67;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10rem;
  font-size: 3.5rem;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  gap: 1rem;
  width: 100%;
  max-width: 100vw;

  @media only screen and (max-width: 600px) {
    border-radius: 0;
  }
`

export const Title = styled.h1`
  font-size: 2.4rem;
  display: flex;

  @media only screen and (max-width: 770px) {
    flex: 0 0 50%;
    font-size: 1.8rem;
  }
`

export const Button = styled.button`
  border: 0;
  border-radius: 1rem;
  padding: 1.2rem;
  height: 4rem;
  width: 15rem;
  background-color: #bf3939;
  color: #fff;

  display: grid;

  &:not(:last-child) {
    margin-left: 10rem;
    background-color: #006a71;
  }
`
