import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/rhhi-white3.png";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const MenuMobile = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="shrink-0 md:hidden  mt-4"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <Image src={Logo} alt="rrhi-logo" className="w-36 h-auto" />
          </Link>
          <Link
            href="#"
            className="text-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact Us
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            About Us{" "}
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Docs{" "}
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
