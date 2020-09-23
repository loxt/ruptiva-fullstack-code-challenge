import styled from 'styled-components'

export const BackContainer = styled.div`
  background: #e1faec;
  border-radius: 1rem;
  margin: 3rem 5rem;

  height: 90vh;

  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 600px) {
    margin: 0;
    height: 100vh;
  }

  @media only screen and (max-width: 350px) {
    height: 100vh;
    font-size: 4rem;
    padding: 0;
    background-color: #000;
    border-radius: 0 !important;
  }
`

export const Container = styled.div`
  background: #ff7e67;
  border-radius: 1rem;
  padding: 5rem;

  height: 45rem;
  width: 50rem;
  max-width: 60vw;

  display: grid;

  font-size: 2.5rem;
  color: #fff;

  @media only screen and (max-width: 450px) {
    width: 100%;
    height: 60rem;
    font-size: 4rem;
  }

  @media only screen and (max-width: 350px) {
    height: 100vh;
    font-size: 4rem;
    padding: 0;
    background-color: transparent;
  }
`

export const Form = styled.div`
  display: grid;

  @media only screen and (max-width: 350px) {
    margin-top: -20rem;
  }
`

export const Label = styled.label`
  font-size: 1.4rem;
  color: #f9f9f9;
`

export const Input = styled.input`
  padding: 1rem;
  border-radius: 0.5rem;
  border: none;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 350px) {
    width: 100%;
    height: 3rem;
    margin-top: -3rem;
  }

  &::placeholder {
    color: #414141;
  }
`

export const Title = styled.h4`
  @media only screen and (max-width: 350px) {
    font-size: 2rem;
  }
`

export const Button = styled.button`
  font-size: 1.8rem;
  margin-top: 1.5rem;
  border: 0;
  font-weight: 300;
  color: #ff7e67;
  background-color: #fff;

  display: grid !important;
  width: 100%;
  padding: 1.13rem;

  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;

  grid-column: 1 / -1;

  cursor: pointer;

  &::after,
  &::before,
  &:link,
  &:visited,
  &:focus {
    outline: 0;
  }
`
