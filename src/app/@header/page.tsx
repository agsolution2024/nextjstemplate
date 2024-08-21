import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/rhhi-white3.png";
import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import ModeToggle from "@/components/ui/mode-toggle";
import { MenuMobile } from "@/app/@header/menu-mobile";

export const HeaderPage = () => {
  return (
    <div className="">
      <header className="flex h-20 gap-2 border-b-2 bg-background px-4 md:px-6 ">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link href="/" className="">
            <Image src={Logo} alt="rrhi-logo" className="w-80 h-auto" />
          </Link>
          <Link
            href="/"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="/contactus"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact&nbsp;Us
          </Link>
          <Link
            href="/aboutus"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            About&nbsp;Us
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Docs
          </Link>
        </nav>
        <MenuMobile />
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative hidden">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground " />
              <Input
                type="search"
                placeholder="Search keyword"
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Juan Dela Cruz</DropdownMenuLabel>
              <DropdownMenuLabel className="text-gray-500">
                Administrator
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </div>
  );
};

export default HeaderPage;
