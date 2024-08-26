"use client";
import OrderDetails from "./detailInfo";
type Params = {
  orderid: string;
};

export default function Page({ params }: { params: Params }) {
  return (
    <>
      <OrderDetails orderId={params.orderid} />
    </>
  );
}
