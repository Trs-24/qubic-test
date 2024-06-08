import { useState } from "react";
import styled from "styled-components";
import { WinningIds } from "./WinningIds";
import { WinningBids } from "./WinningBids";

export const TableStatistics = () => {
  const [isFirstSelected, setIsFirstSelected] = useState(true);

  return (
    <TableStatisticsWrapper>
      <TabControllersWrapper>
        <StyledH2
          onClick={() => setIsFirstSelected(true)}
          $isActive={isFirstSelected}
        >
          Winning ID's
        </StyledH2>

        <StyledH2
          onClick={() => setIsFirstSelected(false)}
          $isActive={!isFirstSelected}
        >
          Winning Bids
        </StyledH2>
      </TabControllersWrapper>

      {isFirstSelected ? <WinningIds /> : <WinningBids />}
    </TableStatisticsWrapper>
  );
};

const TableStatisticsWrapper = styled.div`
  flex-grow: 1;
  overflow-x: hidden;
`;

const TabControllersWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.sizes[24]};
  margin-bottom: ${({ theme }) => theme.sizes[20]};
`;

const StyledH2 = styled.h2<{
  $isActive: boolean;
}>`
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.highlight : theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.sizes[22]};
  font-weight: ${({ $isActive }) => ($isActive ? 500 : 400)};
  transition: all 600ms ease;

  cursor: pointer;
`;
