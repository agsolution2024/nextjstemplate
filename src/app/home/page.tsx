"use client";
import {
  Card,
  CardContent,
  CardDescription,
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
import React from "react";
import TableButton from "@/app/home/tablebutton";
import { HomeCards } from "@/app/home/cards";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 -mt-5">
        <TableButton />
        <HomeCards />
        <div className="px-7">
          <Card x-chunk="dashboard-05-chunk-3">
            <CardHeader className="px-7">
              <CardTitle>Overall Order</CardTitle>
              <CardDescription className="text-pretty">
                Note: This sample data only
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Waiting for picking</TableHead>
                    <TableHead>Picking</TableHead>
                    <TableHead>Waiting for packing</TableHead>
                    <TableHead>Packing</TableHead>
                    <TableHead>Packed</TableHead>
                    <TableHead>Dispatch</TableHead>
                    <TableHead>Ready for Dispatch</TableHead>
                    <TableHead>Out for Delivery</TableHead>
                    <TableHead>Delivered</TableHead>
                    <TableHead>Cancelled</TableHead>
                    <TableHead>Return</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>123</TableCell>
                    <TableCell>456</TableCell>
                    <TableCell>789</TableCell>
                    <TableCell>101</TableCell>
                    <TableCell>112</TableCell>
                    <TableCell>131</TableCell>
                    <TableCell>415</TableCell>
                    <TableCell>161</TableCell>
                    <TableCell>718</TableCell>
                    <TableCell>192</TableCell>
                    <TableCell>202</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
