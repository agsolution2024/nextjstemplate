import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  MoreVerticalIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Separator } from "@/components/ui/separator";
import ModeTag from "@/app/orders/statusTag";
import { useToast } from "@/components/ui/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

interface Order {
  id: string;
  orderNo: string;
  rtiOrderId: string;
  status: number;
  storeName: string | null;
  payment: string;
  cuosName: string;
  orderPrice: number;
  shippingFee: number;
  voucherDiscount: number;
  cts: string;
  eta: string;
  packerLocalDateTime: string | null;
  customerRemarks: string | null;
  address: string | null;
  store: string | null;
  receiver: string | null;
  mobile: string | null;
  email: string | null;
}
interface ApiResponse {
  code: number;
  message: string;
  data: {
    pageNum: number;
    total: number;
    hasMore: boolean;
    list: Order[];
  };
}

type OrderDetailsProps = {
  orderId: string;
};

const OrderDetails = ({ orderId }: OrderDetailsProps) => {
  const [order, setOrder] = useState<Order | null>(null);
  const { toast } = useToast();

  const showToast = () => {
    toast({
      variant: "default",
      title: "✔ Text copied to clipboard",
      className: "toast-success",
    });
  };

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await fetch(
          `https://dev-api.gocart.ph/s2/api/v1/OmsOrder/fulfillmentDetail?orderId=${orderId}`
        );
        const data = await response.json();
        setOrder(data.data);
      } catch (error) {
        console.error("Error fetching the order data:", error);
      }
    };

    fetchOrder();
  }, [orderId]);

  if (!order) {
    return (
      <div className="flex flex-row min-h-screen justify-center items-center">
        <Skeleton className="h-24 w-24 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-10 w-[800px]" />
          <Skeleton className="h-10 w-[750px]" />
          <Skeleton className="h-10 w-[700px]" />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-1 flex-col">
        <div className="flex items-center gap-4 mr-8 ml-8 p-5">
          <Button variant="outline" size="icon" className="h-7 w-7">
            <Link href="/orders">
              <ChevronLeft className="h-4 w-4" />
            </Link>
            <span className="sr-only">Back</span>
          </Button>
          <p className="flex-1 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
            {order.orderNo}{" "}
            <Button
              size="icon"
              variant="outline"
              className="h-6 w-6"
              onClick={showToast}
            >
              <Copy className="h-3 w-3" />
              <span className="sr-only">Copy Transaction ID</span>
            </Button>
          </p>

          <span>
            <ModeTag type={order.status} />
          </span>

          <div className="items-center gap-2 md:ml-auto md:flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="hover:transaparent">
                  More Action
                  <MoreVerticalIcon className="h-4 w-4 text-red-600" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                <DropdownMenuItem>View Order</DropdownMenuItem>
                <DropdownMenuItem>Cancel Order</DropdownMenuItem>
                <DropdownMenuItem>Delivered Order</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
              <Card x-chunk="dashboard-07-chunk-0">
                <CardHeader>
                  <CardTitle className="text-lg">Order Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Product Name</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Total Price</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableCell>Bounty Fresh Chicken Breast</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>789</TableCell>
                      <TableCell>₱222.00 x 1</TableCell>
                      <TableCell>₱222.00</TableCell>
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                  <div className="text-xs text-muted-foreground">
                    1-1 of 1 <time dateTime="2023-11-23">items</time>
                  </div>
                  <Pagination className="ml-auto mr-0 w-auto">
                    <PaginationContent>
                      <PaginationItem>
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-6 w-6"
                        >
                          <ChevronLeft className="h-3.5 w-3.5" />
                          <span className="sr-only">Previous Order</span>
                        </Button>
                      </PaginationItem>
                      <PaginationItem>
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-6 w-6"
                        >
                          <ChevronRight className="h-3.5 w-3.5" />
                          <span className="sr-only">Next Order</span>
                        </Button>
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </CardFooter>
              </Card>

              <Card x-chunk="dashboard-07-chunk-0">
                <CardHeader>
                  <CardTitle className="text-lg">Payment Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    <ul className="grid gap-3">
                      <li className="flex items-center justify-between">
                        <span className="text-muted-foreground">
                          Glimmer Lamps x <span>2</span>
                        </span>
                        <span>₱250.00</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="text-muted-foreground">
                          Aqua Filters x <span>1</span>
                        </span>
                        <span>₱49.00</span>
                      </li>
                    </ul>
                    <Separator className="my-2" />
                    <ul className="grid gap-3">
                      <li className="flex items-center justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>₱299.00</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="text-muted-foreground">Shipping</span>
                        <span>₱5.00</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="text-muted-foreground">Tax</span>
                        <span>₱25.00</span>
                      </li>
                      <li className="flex items-center justify-between font-semibold">
                        <span className="text-muted-foreground">Total</span>
                        <span>₱329.00</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card x-chunk="dashboard-07-chunk-0">
                <CardHeader>
                  <CardTitle className="text-lg">Order History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative space-y-4">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
                    <div className="flex items-center">
                      <div className="relative z-10 w-2.5 h-2.5 bg-blue-500 rounded-full mr-4"></div>
                      <div className="flex-1">
                        <p className="font-medium">Handled By Seller</p>
                        <p className="text-sm text-gray-500">
                          2024-08-27 15:38:08
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">16 Items</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="relative z-10 w-2.5 h-2.5 bg-blue-500 rounded-full mr-4"></div>
                      <div className="flex-1">
                        <p className="font-medium">Delivery Order Create</p>
                        <p className="text-sm text-gray-500">
                          2024-08-27 15:38:08
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">16 Items</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div>
            <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
              <CardContent className="p-6 text-sm">
                <div className="grid gap-3">
                  <div className="font-semibold text-lg">
                    Fulfillment Summary
                  </div>
                  <Separator />

                  <div className="grid gap-3">
                    <dl className="grid gap-3">
                      <div className="flex items-center justify-between">
                        <dt className="text-muted-foreground">Transaction</dt>
                        <dd>
                          {order.rtiOrderId}
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-6 w-6 "
                            onClick={showToast}
                          >
                            <Copy className="h-3 w-3" />
                            <span className="sr-only">Copy Transaction ID</span>
                          </Button>
                        </dd>
                      </div>
                      <div className="flex items-center justify-between">
                        <dt className="text-muted-foreground">Store Origin</dt>
                        <dd>
                          {order.store}
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-6 w-6"
                            onClick={showToast}
                          >
                            <Copy className="h-3 w-3" />
                            <span className="sr-only">Copy Transaction ID</span>
                          </Button>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className="overflow-hidden mt-5"
              x-chunk="dashboard-05-chunk-4"
            >
              <CardContent className="p-6 text-sm">
                <div className="grid gap-3">
                  <div className="font-semibold text-sm">
                    Customer Notes/Instruction
                  </div>
                  <Separator />
                  <span>
                    Payment information is pending until order is delivered
                  </span>
                  <div className="font-semibold text-sm">
                    Additional Details
                  </div>
                  <Separator />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-3">
                      <address className="grid gap-0.5 not-italic text-muted-foreground">
                        <span>Liam Johnson </span>
                        <span>1234 Main St.</span>
                        <span>Anytown, CA 12345</span>
                      </address>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className="overflow-hidden mt-5"
              x-chunk="dashboard-05-chunk-4"
            >
              <CardContent className="p-6 text-sm">
                <div className="grid gap-3">
                  <div className="font-semibold text-sm">
                    Customer Information
                  </div>
                  <Separator />
                  <div className="grid gap-3">
                    <dl className="grid gap-3">
                      <div className="flex items-center justify-between">
                        <dt className="text-muted-foreground">Customer</dt>
                        <dd>{order.receiver}</dd>
                      </div>
                      <div className="flex items-center justify-between">
                        <dt className="text-muted-foreground">Email</dt>
                        <dd>
                          <a href="mailto:">{order.email}</a>
                        </dd>
                      </div>
                      <div className="flex items-center justify-between">
                        <dt className="text-muted-foreground">Phone</dt>
                        <dd>
                          <a href="tel:">{order.mobile}</a>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className="overflow-hidden mt-5"
              x-chunk="dashboard-05-chunk-4"
            >
              <CardContent className="p-6 text-sm">
                <div className="grid gap-3">
                  <div className="font-semibold text-sm">Shipping Details</div>
                  <Separator />
                  <div className="grid grid-cols-1 gap-4">
                    <div className="grid gap-3">
                      <address className="grid gap-0.5 not-italic text-muted-foreground">
                        <span>{order.address}</span>
                      </address>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
};

export default OrderDetails;
