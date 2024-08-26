"use client";
import Logo from "@/assets/images/rrhi_logo.png";
import Image from "next/image";
import Link from "next/link";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import ModeTag from "./statusTag";

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
const Page: React.FC = () => {
  const [data, setData] = useState<ApiResponse["data"] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    fetch("https://dev-api.gocart.ph/s2/api/v1/order/list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        pageSize: 10,
        pageNo: 1,
        date: {
          label: "This Week, 30Jun - 6Jul 2024",
          type: 1,
          value: ["2024-06-30", "2024-07-06"],
        },
        beginDate: "2024-06-30",
        endDate: "2024-08-30",
      }),
    })
      .then((response) => response.json())
      .then((data: ApiResponse) => {
        setData(data.data);
        setLoading(false);
      })
      .catch((error: Error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading)
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
  if (error) return <p>Error loading data: {error}</p>;

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUsers(data);
  //       setLoading(false);
  //     })
  //     .catch((error: Error) => {
  //       setError(error.message);
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) return <Skeleton className="w-[1400px] h-[500px]" />;
  // if (error) return <p>Error loading data: {error}</p>;

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <Card x-chunk="dashboard-05-chunk-3">
          <CardHeader className="px-7">
            <CardTitle>List of Orders</CardTitle>
            <CardDescription className="text-pretty"></CardDescription>
          </CardHeader>
          <CardContent>
            <Table className="tableOrder">
              <TableHeader>
                <TableRow>
                  <TableHead></TableHead>
                  <TableHead className="w-3/4">Order Number</TableHead>
                  <TableHead>Transaction No.</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Store Name</TableHead>
                  <TableHead>Payment Method</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Sub Total</TableHead>
                  <TableHead>Shipping Fee</TableHead>
                  <TableHead>Voucher/Discount/Promo</TableHead>
                  <TableHead>Total Price</TableHead>
                  <TableHead>Order Date</TableHead>
                  <TableHead>Target Delivery Date</TableHead>
                  <TableHead>Packed Date</TableHead>
                  <TableHead>Remarks</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data?.list.map((order: Order) => (
                  <TableRow key={order.id}>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            aria-haspopup="true"
                            size="icon"
                            variant="ghost"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>View Order</DropdownMenuItem>
                          <DropdownMenuItem>Cancel Order</DropdownMenuItem>
                          <DropdownMenuItem>Delivered Order</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                    <TableCell width={100}>
                      <Link
                        href={`/orders/detail/${order.id}`}
                        className="text-red-600"
                      >
                        {order.orderNo}
                      </Link>
                    </TableCell>
                    <TableCell className="w-3/4">{order.rtiOrderId}</TableCell>
                    <TableCell>
                      <ModeTag type={order.status} />
                    </TableCell>
                    <TableCell>{order.storeName}</TableCell>
                    <TableCell>{order.payment}</TableCell>
                    <TableCell>{order.cuosName}</TableCell>
                    <TableCell>{order.orderPrice}</TableCell>
                    <TableCell>{order.shippingFee}</TableCell>
                    <TableCell>{order.voucherDiscount}</TableCell>
                    <TableCell>
                      {order.orderPrice +
                        order.shippingFee -
                        order.voucherDiscount}
                    </TableCell>
                    <TableCell>{order.cts}</TableCell>
                    <TableCell>{order.eta}</TableCell>
                    <TableCell>{order.packerLocalDateTime}</TableCell>
                    <TableCell>{order.customerRemarks}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <div className="text-xs text-muted-foreground">
              Showing <strong>1-10</strong> of <strong>{data?.total} </strong>
              products
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Page;
