import styled from 'styled-components';
import Link from 'next/link';
import { StyledButton } from '../components/button';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return (
    <>
      <h1>Rick and Morty API Wiki</h1>
      <StyledButton>
        <Link href="/">
          <a>Home</a>
        </Link>
      </StyledButton>
      <StyledButton>
        <Link href="/characters">
          <a>Characters</a>
        </Link>
      </StyledButton>
      <StyledButton>
        <Link href="/episodes">
          <a>Episode</a>
        </Link>
      </StyledButton>
    </>
  );
}
