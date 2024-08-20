"use client";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { Bell } from "lucide-react";
export default function ToastButton() {
  const { toast } = useToast();
  return (
    <Button
      size="sm"
      variant="default"
      className="h-7 gap-1 text-sm toast-success"
      onClick={() => {
        toast({
          variant: "default",
          title: "Uh oh! Something went wrong.",
          className: "toast-success",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }}
    >
      <Bell className="h-3.5 w-3.5" />
      <span className="sr-only sm:not-sr-only">Notification</span>
    </Button>
  );
}
