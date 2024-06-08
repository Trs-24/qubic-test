import styled from "styled-components";
import { Summary } from "./components/Summary";
import { Header } from "./components/Header";
import { TableStatistics } from "./components/TableStatistics";

const App = () => {
  return (
    <StyledMain>
      <Header />

      <StyledUpperRow>
        <Summary />

        <TableStatistics />
      </StyledUpperRow>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  background: #101820 !important;
  padding-right: ${({ theme }) => theme.sizes[32]};
  padding-left: ${({ theme }) => theme.sizes[32]};

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding-right: ${({ theme }) => theme.sizes[16]};
    padding-left: ${({ theme }) => theme.sizes[16]};
  }
`;

const StyledUpperRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.sizes[32]};
  padding-top: ${({ theme }) => theme.sizes[60]};
  padding-left: ${({ theme }) => theme.sizes[16]};
  padding-right: ${({ theme }) => theme.sizes[16]};
  padding-bottom: ${({ theme }) => theme.sizes[40]};

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    flex-direction: column;
  }
`;

export default App;
