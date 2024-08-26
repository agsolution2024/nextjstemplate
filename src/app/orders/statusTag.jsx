import React from "react";
import {
  CheckCircleFilled,
  ClockCircleOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  CarOutlined,
  UndoOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  QuestionCircleOutlined,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ModeTag = ({ type }) => {
  const tagList = {
    0: {
      label: "Waiting for payment",
      key: "0",
      style: { backgroundColor: "#FFA500" },
    },
    1: {
      label: "Waiting for user to decide",
      key: "1",
      style: { backgroundColor: "#34eb71" },
    },
    2: {
      label: "Waiting for picking",
      key: "2",
      style: { backgroundColor: "#eb5f34" },
    },
    4: {
      label: "Waiting for packing",
      key: "4",
      style: { backgroundColor: "#FFC0CB" },
    },
    5: {
      label: "Packed",
      key: "5",
      style: { backgroundColor: "#E6F2F0" },
    },
    6: {
      label: "Dispatch",
      key: "6",
      color: "#dddeb6",
      style: { backgroundColor: "#dddeb6" },
    },
    7: {
      label: "Ready for Dispatch",
      key: "7",
      color: "#a2d2df",
      style: { backgroundColor: "#a2d2df" },
    },
    8: {
      label: "Out for Delivery",
      key: "8",
      color: "#5ccec4",
      style: { backgroundColor: "#5ccec4" },
    },
    20: {
      label: "Return",
      key: "20",
      color: "#ff0000",
      style: { backgroundColor: "#ff0000" },
    },
    9: {
      label: "Delivered",
      key: "9",
      color: "#84bd00",
      style: { backgroundColor: "#84bd00" },
    },
    10: {
      label: "Completed",
      key: "10",
      color: "#008000",
      style: { backgroundColor: "#008000" },
    },
    11: {
      label: "Waiting for drawback",
      key: "11",
      color: "#FFCC33",
      style: { backgroundColor: "#FFCC33" },
    },
    12: {
      label: "Drawback",
      key: "12",
      color: "#008000",
      style: { backgroundColor: "#008000" },
    },
    13: {
      label: "Cancelled",
      key: "13",
      color: "#FF0000",
      style: { backgroundColor: "#FF0000" },
    },
    14: {
      label: "Waiting for dispatch picker",
      key: "14",
      color: "#FFC0CB",
      style: { backgroundColor: "#FFC0CB" },
    },
    15: {
      label: "Picking",
      key: "15",
      color: "#36648b",
      style: { backgroundColor: "#36648b" },
    },
    16: {
      label: "Packing",
      key: "16",
      color: "#36648b",
      style: { backgroundColor: "#36648b" },
    },
    17: {
      label: "Waiting for reset picker",
      key: "17",
      color: "#FFCC33",
      style: { backgroundColor: "#FFCC33" },
    },
    18: {
      label: "Waiting for reset packer",
      key: "18",
      color: "#FFC0CB",
      style: { backgroundColor: "#FFC0CB" },
    },
    19: {
      label: "Not started fulfilling",
      key: "19",
      color: "#FFCC33",
      style: { backgroundColor: "#FFCC33" },
    },
    default: {
      label: "Unknown status",
      key: "default",
      style: { backgroundColor: "#000" },
    },
  };

  const getTag = () => {
    if (!type) {
      return (
        <Badge variant="outline" className="ml-auto sm:ml-0 ">
          {tags.label}
        </Badge>
      );
    }
    const tags = tagList[type] || tagList["default"];
    return (
      <Badge variant="outline" className="ml-auto sm:ml-0 " style={tags.style}>
        {tags.label}
      </Badge>
    );
  };

  return getTag();
};

export default ModeTag;
