import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Copy,
  Edit,
  MoreHorizontal,
} from "../../../../node_modules/lucide-react";
import React from "react";
import DeleteItem from "../../modals/DeleteItem";
import { toast } from "react-hot-toast";
import { useDeleteNftMutation } from "@/redux/services/nftService";

//For the action cell in the nft table for update and delete operations.

type Props = {
  row: {
    id: string;
    name: string;
    imageUrl: string;
    createdAt: string;
  };
};

const CellAction = ({ row }: Props) => {
  const [deleteNft, { isLoading }] = useDeleteNftMutation();

  const onCopy = (name: string) => {
    navigator.clipboard.writeText(name);
    toast.success("NFT name copied to clipboard.");
  };

  const deleteNftAction = async (userId: string) => {
    const response: any = await deleteNft(userId);

    if ("data" in response) {
      toast.success(response.data.message);
    } else if ("error" in response) {
      console.log(response.error.data.message);
      toast.error(response.error.data.message);
    } else {
      toast.error("An error occurred.");
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => onCopy(row.id)}>
          <Copy className="mr-2 h-4 w-4" /> Copy Id
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Edit className="mr-2 h-4 w-4" /> Update
        </DropdownMenuItem>
        <div className="relative w-full hover:bg-gray-100 flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
          <DeleteItem
            isLoading={isLoading}
            action={() => deleteNftAction(row.id)}
          />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CellAction;
