import Link from 'next/link';
import { StyledButton } from '../components/button';

export default function Characters() {
  return (
    <>
      <h1>Episodes</h1>
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
