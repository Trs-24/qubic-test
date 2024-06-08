import IPO_BIDS_JSON_DATA from "../mock/ipoBids.json";
import { Bid, Column } from "../types";
import Table from "./Table";

const COLUMNS: Column<Bid>[] = [
  {
    key: "positionIndex",
    title: "Nr",
    width: "8%",
    minWidth: "60px",
    align: "center",
  },
  {
    key: "computorId",
    title: "Id",
    width: "72%",
    minWidth: "500px",
    align: "flex-start",
  },
  {
    key: "price",
    title: "Price (QUBIC)",
    width: "20%",
    minWidth: "200px",
    align: "flex-end",
  },
];

export const WinningBids = () => {
  return <Table<Bid> dataSource={IPO_BIDS_JSON_DATA.bids} columns={COLUMNS} />;
};
