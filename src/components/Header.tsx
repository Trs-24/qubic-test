import styled from "styled-components";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => theme.sizes[72]};

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 2.5rem 0;
`;
