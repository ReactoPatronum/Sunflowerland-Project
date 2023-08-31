/* eslint-disable @next/next/no-img-element */
import { ColumnDef } from "@tanstack/react-table";

export type UserColumns = {
  id: string;
  name: string;
  email: string | null; // Güncellendi
  image: string | null; // Güncellendi
  createdAt: string;
  updatedAt: string;
  provider: string;
  isAdmin: boolean;
};

export const columns: ColumnDef<UserColumns>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const url: string = row.getValue("image");
      return (
        <img
          className="w-10 rounded-lg h-10 object-cover transition-all duration-300"
          src={url}
          alt="user-image"
        />
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "provider",
    header: "Provider",
  },
  {
    accessorKey: "isAdmin",
    header: "isAdmin",
  },
  {
    accessorKey: "createdAt",
    header: "CreatedAt",
  },
  {
    accessorKey: "updatedAt",
    header: "UpdatedAt",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      return 123;
    },
  },
];
