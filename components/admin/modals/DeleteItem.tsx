import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Trash } from "../../../node_modules/lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const DeleteItem = ({ action, isLoading }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="flex items-center w-full" onClick={() => setOpen(true)}>
        <Trash className="mr-2 h-4 w-4" /> Delete
      </div>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>This action cannot be undone.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button size="sm" variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            disabled={isLoading}
            onClick={async () => {
              await action();
              setOpen(false);
            }}
            size="sm"
            variant="destructive"
            type="submit"
          >
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default DeleteItem;
