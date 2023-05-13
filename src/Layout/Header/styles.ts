import styled from "styled-components";

export const Header = styled.header`
  padding: 6rem;
  background-color: ${({ theme }) => theme.colors.gray_700};
`;

export const Logo = styled.img`
  height: 4rem;
`;

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`
