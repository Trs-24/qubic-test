import styled from "styled-components";

export const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;
