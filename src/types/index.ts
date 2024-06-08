export interface IpoBids {
  tick: number;
  contractIndex: number;
  contractName: string;
  currentSupply: number;
  bids: Bid[];
}

export interface Bid {
  publicKey: string;
  computorId: string;
  price: number;
  positionIndex: number;
}

export type WinningId = {
  computerId: string;
  numberOfShares: number;
  totalPrice: number;
  averagePrice: number;
};

export type Column<T> = {
  title: string;
  key: keyof T;
  width: string;
  minWidth?: string;
  align?: "flex-start" | "flex-end" | "center";
  isSeparatedByCommas?: boolean;
};