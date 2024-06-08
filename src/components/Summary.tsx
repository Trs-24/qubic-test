import { calculateSummaryData } from "../utils/helpers";
import IPO_BIDS_JSON_DATA from "../mock/ipoBids.json";
import styled from "styled-components";
import { Divider } from "./Divider";

const summaryData = calculateSummaryData(IPO_BIDS_JSON_DATA);

export const Summary = () => {
  return (
    <div>
      <StyledH2>Summary for MLM</StyledH2>

      <StyledTable>
        <StyledTableBody>
          <StyledTableRow>
            <StyledTd>
              <span>Total Bid Value</span>
            </StyledTd>

            <StyledTd>{summaryData.totalBidValue}</StyledTd>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTd>
              <span>% of Supply</span>
            </StyledTd>

            <StyledTd>{summaryData.percentOfSupply}</StyledTd>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTd>
              <span>Total Bidders</span>
            </StyledTd>

            <StyledTd>{summaryData.totalBidders}</StyledTd>
          </StyledTableRow>

          <Divider />

          <StyledTableRow>
            <StyledTd>
              <span>Avg Share Price</span>
            </StyledTd>

            <StyledTd>{summaryData.avgSharePrice}</StyledTd>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTd>
              <span>Max Share Price</span>
            </StyledTd>

            <StyledTd>{summaryData.maxSharePrice}</StyledTd>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTd>
              <span>Min Share Price</span>
            </StyledTd>

            <StyledTd>{summaryData.minSharePrice}</StyledTd>
          </StyledTableRow>

          <Divider />

          <StyledTableRow>
            <StyledTd>
              <span>Estimated Burn</span>
            </StyledTd>

            <StyledTd>{summaryData.estimatedBurn}</StyledTd>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTd>
              <span>% of Supply</span>
            </StyledTd>

            <StyledTd>0.2%</StyledTd>
          </StyledTableRow>
        </StyledTableBody>
      </StyledTable>
    </div>
  );
};

const StyledTable = styled.table`
  min-width: 337px;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.tableBackground};

  @media (max-width: ${({ theme }) => theme.breakpoints.xxxxl}) {
    width: 100%;
  }
`;

const StyledTableRow = styled.tr`
  display: flex;
  justify-content: space-between;
`;

const StyledTableBody = styled.tbody`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  height: 100%;
`;

const StyledTd = styled.td`
  text-align: left;
  padding: ${({ theme }) => theme.sizes[4]};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.sizes[14]};
  font-weight: 500;

  span {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.sizes[14]};
    font-weight: 400;
  }
`;

const StyledH2 = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.sizes[22]};
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.sizes[20]};
`;
