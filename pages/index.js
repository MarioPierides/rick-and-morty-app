import styled from 'styled-components';
import Navbar from '../components/navbar';
import { StyledHeader } from '../components/header';
import Card from '../components/card';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return (
    <>
      <StyledHeader>
        <h1>Rick and Morty API Wiki</h1>
      </StyledHeader>
      <section>
        <Card></Card>
      </section>
      <Navbar></Navbar>
    </>
  );
}
