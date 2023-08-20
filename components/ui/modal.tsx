import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ModalProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  icon: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  title,
  description,
  icon,
  children,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{icon}Edit Profile</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div>{children}</div>
        <DialogFooter>
          <div>
            <Button type="submit">Create</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
