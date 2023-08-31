import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useCreateNftMutation } from "@/redux/services/nftService";
import { toast } from "react-hot-toast";
import handleApiError from "@/helpers/handleApiErrors";

interface IFormInput {
  name: string;
  imageUrl: string;
}

export default function CreateNft({ refetch }: any) {
  const [createNft, { isLoading }] = useCreateNftMutation();
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const response: any = await createNft(data);
    if ("data" in response) {
      toast.success(response.data.message);
      setOpen(false);
      refetch();
    }
    handleApiError(response);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button onClick={() => setOpen(true)}>Add New</Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create NFT</DialogTitle>
          <DialogDescription>Add a new NFT</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="py-4 space-y-5">
          <div className="items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              })}
              id="name"
              placeholder="Name of the NFT"
              className="col-span-3"
            />
            {errors.name && (
              <p className="text-red-600 text-xs" role="alert">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="items-center gap-4">
            <Label htmlFor="imageUrl" className="text-right">
              URL
            </Label>
            <Input
              {...register("imageUrl", {
                required: "Image URL is required",
                minLength: {
                  value: 5,
                  message: "Image URL be at least 5 characters",
                },
              })}
              id="imageUrl"
              placeholder="Image URL of the NFT"
              className="col-span-3"
            />
            {errors.imageUrl && (
              <p className="text-red-600 text-xs" role="alert">
                {errors.imageUrl.message}
              </p>
            )}
          </div>
          <DialogFooter>
            <Button disabled={isLoading} type="submit">
              Create
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
