import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

type EditNftProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  nft: {
    id: string;
    name: string;
    imageUrl: string;
  };
};

export default function EditNft({ open, setOpen, nft }: EditNftProps) {
  const [nftData, setNftData] = useState(nft);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit NFT</DialogTitle>
          <DialogDescription>Edit the selected NFT</DialogDescription>
        </DialogHeader>
        <form className="py-4 space-y-5">
          <div className="items-center gap-4">
            <Label htmlFor="name" className="text-right">
              New Name
            </Label>
            <Input
              value={nftData.name}
              onChange={(e) =>
                setNftData((prev) => ({ ...prev, name: e.target.value }))
              }
              id="name"
              placeholder="Name of the NFT"
              className="col-span-3"
            />
          </div>
          <div className="items-center gap-4">
            <Label htmlFor="imageUrl" className="text-right">
              New URL
            </Label>
            <Input
              value={nftData.imageUrl}
              onChange={(e) =>
                setNftData((prev) => ({ ...prev, imageUrl: e.target.value }))
              }
              id="imageUrl"
              placeholder="Image URL of the NFT"
              className="col-span-3"
            />
          </div>
          <DialogFooter>
            <Button type="submit">Update</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
