import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Button from "./ui/Button";

export function Sidebar() {
  return (
    <Sheet >
      <SheetTrigger asChild>
        <Button size='sm'  variant="outline" color='#242424'>Menu</Button>
      </SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4"></div>
          <div className="grid grid-cols-4 items-center gap-4"></div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button size='md'  variant="outline" color='#242424'>Submit</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
