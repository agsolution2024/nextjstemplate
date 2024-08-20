import { File, ListFilter, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import ToastButton from "@/app/home/toastbutton";

export default function TableButton() {
  return (
    <div className="flex items-center">
      <div className="ml-auto flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-7 gap-1 text-sm">
              <ListFilter className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only">Filter</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Filter by</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked>
              Fulfilled
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Declined</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Refunded</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button size="sm" variant="outline" className="h-7 gap-1 text-sm">
          <File className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only">Export</span>
        </Button>
        <ToastButton />
      </div>
    </div>
  );
}
