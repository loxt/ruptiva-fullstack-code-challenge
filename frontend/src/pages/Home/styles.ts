import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(min-content, 1fr));
  grid-template-columns: repeat(auto-fill, minmax(min-content, 1fr));
`

export const Items = styled.div`
  margin: 7rem;
  padding: 5.2rem;
  background-color: #457b9d;
  display: grid;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  grid-gap: 2rem;
  grid-template-rows: repeat(auto-fit, minmax(min-content, 10vh));
  grid-template-columns: repeat(auto-fit, minmax(min-content, 30rem));
  justify-content: center;
  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, min-content);
  }

  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(auto-fit, min-content);
  }

  @media only screen and (max-width: 600px) {
    padding-top: 3rem;
  }

  @media only screen and (max-width: 350px) {
    padding: 0;
    margin: 8vh 0 0 0;
  }
`

export const Item = styled.div`
  background-color: #f9f9f9;
  display: grid;

  grid-template-columns: repeat(2, minmax(min-content, 1fr));
  border-radius: 1rem;
`

export const Image = styled.img`
  background-color: #000;
  width: 100%;
  height: 100%;
  max-height: 17rem;
  object-fit: cover;

  margin-bottom: 1.5rem;

  display: grid;
  grid-row: 1 / auto;
  grid-column: 1 / 3;
`

export const Infos = styled.div`
  margin-left: 3rem;

  display: grid;
  grid-template-columns: repeat(2, minmax(10rem, 1fr));
  grid-gap: 1.5rem 5rem;

  & > * {
    display: flex;
    flex-direction: column;
  }
`

export const Name = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  color: #006a71;

  & > span {
    font-weight: 300;
  }
`
export const Manufacturer = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #006a71;

  & > span {
    font-weight: 300;
  }
`
export const Price = styled.h4`
  font-size: 1.7rem;
  font-weight: bold;
  color: #ff7e67;

  & > span {
    font-weight: 300;
  }
`
export const CC = styled.h4`
  font-size: 1.7rem;
  font-weight: bold;
  color: #ff7e67;

  & > span {
    font-weight: 300;
  }
`

export const Button = styled.button`
  font-size: 1.8rem;
  margin-top: 1.5rem;
  border: 0;
  font-weight: 300;
  color: #fff;
  background-color: #ff7e67;

  display: grid !important;
  width: 100%;
  padding: 1.13rem;

  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;

  grid-column: 1 / -1;

  cursor: pointer;
`
