/* eslint-disable @next/next/no-img-element */
import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./NftCellActions";

export type NftColumns = {
  id: string;
  name: string;
  createdAt: string;
  imageUrl: string;
};

export const columns: ColumnDef<NftColumns>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "imageUrl",
    header: "Image",
    cell: ({ row }) => {
      const url: string = row.getValue("imageUrl");
      return (
        <img
          className="w-20 rounded-lg h-10 object-cover hover:h-20 transition-all duration-300"
          src={url}
          alt="nft-image"
        />
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "CreatedAt",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      return <CellAction row={row.original} />;
    },
  },
];
