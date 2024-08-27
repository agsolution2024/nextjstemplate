import * as React from "react";
import {
  ChevronLeft,
  ChevronRight,
  CreditCard,
  ShoppingCart,
  ShoppingBag,
  XCircle,
  TrendingUp,
} from "lucide-react";

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
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  Pie,
  PieChart,
} from "recharts";
import { Separator } from "@/components/ui/separator";

const chartDataOrders = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartDataSales = [
  { month: "January", desktop: 9000 },
  { month: "February", desktop: 5110 },
  { month: "March", desktop: 7000 },
  { month: "April", desktop: 4010 },
  { month: "May", desktop: 6000 },
  { month: "June", desktop: 7140 },
];

const chartConfigSales = {
  desktop: {
    label: "Sales",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const chartConfigOrders = {
  desktop: {
    label: "Count",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];
const chartConfig = {
  visitors: {
    label: "Payment Method - ",
  },
  chrome: {
    label: "Gcash",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "COD",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "PAY_LATER",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "MIXEDCARD",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "PAYMAYA",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function HomeCards() {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-red-600 ">
                Total Orders
              </CardTitle>
              <ShoppingCart className="h-6 w-6 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">100</div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-red-600 ">
                Total Fulfilled
              </CardTitle>
              <ShoppingBag className="h-6 w-6 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">100</div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-red-600 ">
                Total Unfulfilled
              </CardTitle>
              <CreditCard className="h-6 w-6 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">100</div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-red-600 ">
                Total Cancelled
              </CardTitle>
              <XCircle className="h-6 w-6 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">100</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sales</CardTitle>
              <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfigSales}>
                <BarChart
                  accessibilityLayer
                  data={chartDataSales}
                  margin={{
                    top: 20,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8}>
                    <LabelList
                      position="top"
                      offset={12}
                      className="fill-foreground"
                      fontSize={12}
                      formatter={(value: number) =>
                        `₱ ${value.toLocaleString()}`
                      }
                    />
                  </Bar>
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Orders</CardTitle>
              <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfigOrders}>
                <BarChart
                  accessibilityLayer
                  data={chartDataOrders}
                  margin={{
                    top: 20,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8}>
                    <LabelList
                      position="top"
                      offset={12}
                      className="fill-foreground"
                      fontSize={12}
                    />
                  </Bar>
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
          <CardHeader className="items-center pb-0">
            <CardTitle className="text-sm">Payment Method</CardTitle>
          </CardHeader>
          <CardContent className="p-6 text-sm">
            <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
              <CardContent className="p-6 text-sm">
                <ChartContainer
                  config={chartConfig}
                  className="mx-auto aspect-square max-h-[250px]"
                >
                  <PieChart>
                    <ChartTooltip
                      content={
                        <ChartTooltipContent nameKey="visitors" hideLabel />
                      }
                    />
                    <Pie data={chartData} dataKey="visitors">
                      <LabelList
                        dataKey="browser"
                        className="fill-background"
                        stroke="none"
                        fontSize={7}
                        formatter={(value: keyof typeof chartConfig) =>
                          chartConfig[value]?.label
                        }
                      />
                    </Pie>
                  </PieChart>
                </ChartContainer>
              </CardContent>
            </Card>
            <br />
            <div className="grid gap-3">
              <div className="font-semibold">Recent Activity</div>
              <Separator />
              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <span className="">
                    Order#884172030095653 change status from Packed to Delivered
                    <br />
                    <span className="text-muted-foreground text-xs ">
                      November 23, 2023
                    </span>
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="">
                    User remove the SKU 158539 to Order#884172030095653
                    <br />
                    <span className="text-muted-foreground text-xs ">
                      November 23, 2023
                    </span>
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="">
                    Order # 889438310968427 change status from Picked to Packed
                    <br />
                    <span className="text-muted-foreground text-xs ">
                      November 23, 2023
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </CardContent>
          <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
            <div className="text-xs text-muted-foreground">
              Updated <time dateTime="2023-11-23">November 23, 2023</time>
            </div>
            <Pagination className="ml-auto mr-0 w-auto">
              <PaginationContent>
                <PaginationItem>
                  <Button size="icon" variant="outline" className="h-6 w-6">
                    <ChevronLeft className="h-3.5 w-3.5" />
                    <span className="sr-only">Previous Order</span>
                  </Button>
                </PaginationItem>
                <PaginationItem>
                  <Button size="icon" variant="outline" className="h-6 w-6">
                    <ChevronRight className="h-3.5 w-3.5" />
                    <span className="sr-only">Next Order</span>
                  </Button>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
