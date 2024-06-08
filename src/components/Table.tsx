import { useState } from "react";
import styled from "styled-components";
import { FilterIcon } from "./icons/FilterIcon";
import { Column } from "../types";
import { separateWithCommas } from "../utils/helpers";

type TableProps<T> = {
  dataSource: T[];
  columns: Column<T>[];
};

const Table = <T,>({ dataSource, columns }: TableProps<T>) => {
  const [filterOpenForColumnIndex, setFilterOpenForColumnIndex] = useState<
    number | null
  >(null);

  return (
    <ScrollWrapper>
      <StyledTable>
        <TableHead>
          <TableRow $isLast={false}>
            {columns.map((column, index) => (
              <TableHeader
                key={index}
                $width={column.width}
                $minWidth={column.minWidth}
                $align={column.align}
              >
                <span>{column.title}</span>

                <IconWrapper
                  onClick={() =>
                    setFilterOpenForColumnIndex(
                      filterOpenForColumnIndex === index ? null : index
                    )
                  }
                >
                  <FilterIcon isFilled={filterOpenForColumnIndex === index} />
                </IconWrapper>
              </TableHeader>
            ))}
          </TableRow>
        </TableHead>

        <tbody>
          {dataSource.map((data, rowIndex) => (
            <TableRow
              key={rowIndex}
              $isLast={rowIndex === dataSource.length - 1}
            >
              {columns.map((column, colIndex) => (
                <TableCell
                  key={colIndex}
                  $width={column.width}
                  $isFirst={colIndex === 0}
                  $minWidth={column.minWidth}
                  $align={column.align}
                >
                  {column.isSeparatedByCommas
                    ? separateWithCommas(String(data[column.key]))
                    : String(data[column.key])}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </ScrollWrapper>
  );
};

const ScrollWrapper = styled.div`
  width: 100%;
  overflow-x: scroll;
  border-radius: ${({ theme }) => theme.sizes[12]};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const IconWrapper = styled.div`
  position: relative;
  display: grid;
  place-items: center;

  cursor: pointer;
`;

const StyledTable = styled.table`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.tableBackground};
`;

const TableHead = styled.thead`
  min-height: ${({ theme }) => theme.sizes[50]};
`;

const TableRow = styled.tr<{
  $isLast: boolean;
}>`
  display: flex;
  ${({ theme, $isLast }) =>
    !$isLast && `border-bottom: 1px solid ${theme.colors.border};`}
`;

const TableHeader = styled.th<{
  $width: string;
  $minWidth?: string;
  $align?: "flex-start" | "flex-end" | "center";
}>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.sizes[10]};
  flex-grow: 1;
  font-weight: 400;
  font-size: ${({ theme }) => theme.sizes[14]};
  padding: ${({ theme }) => theme.sizes[16] + " " + theme.sizes[32]};
  color: ${({ theme }) => theme.colors.textSecondary};

  width: ${({ $width }) => $width};
  ${({ $minWidth }) => $minWidth && `min-width: ${$minWidth};`}

  ${({ $align }) => $align && `justify-content: ${$align};`};
`;

const TableCell = styled.td<{
  $width: string;
  $isFirst: boolean;
  $minWidth?: string;
  $align?: "flex-start" | "flex-end" | "center";
}>`
  padding: ${({ theme }) => theme.sizes[16]};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  font-size: ${({ theme }) => theme.sizes[14]};

  width: ${({ $width }) => $width};
  ${({ $minWidth }) => $minWidth && `min-width: ${$minWidth};`}
  padding: ${({ theme }) => theme.sizes[16] + " " + theme.sizes[32]};

  display: flex;

  ${({ $align }) => $align && `justify-content: ${$align};`};
`;

export default Table;
