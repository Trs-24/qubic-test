import IPO_BIDS_JSON_DATA from "../mock/ipoBids.json";
import { Column, WinningId } from "../types";
import { groupBidsByComputerId } from "../utils/helpers";
import Table from "./Table";

const mappedBids = groupBidsByComputerId(IPO_BIDS_JSON_DATA);

const COLUMNS: Column<WinningId>[] = [
  {
    title: "Address ID",
    key: "computerId",
    width: "55%",
    minWidth: "400px",
    align: "flex-start",
    isSeparatedByCommas: false,
  },
  {
    key: "numberOfShares",
    title: "# of shares",
    width: "15%",
    minWidth: "220px",
    align: "flex-end",
    isSeparatedByCommas: true,
  },
  {
    key: "totalPrice",
    title: "Total (QUBIC)",
    width: "15%",
    minWidth: "220px",
    align: "flex-end",
    isSeparatedByCommas: true,
  },
  {
    key: "averagePrice",
    title: "Avg/Share (QUBIC)",
    width: "15%",
    minWidth: "220px",
    align: "flex-end",
    isSeparatedByCommas: true,
  },
];

export const WinningIds = () => {
  return <Table<WinningId> dataSource={mappedBids} columns={COLUMNS} />;
};
