import {
  CheckOutlined,
  UpOutlined,
  VerticalLeftOutlined,
} from "@ant-design/icons";
import { Tag } from "antd";

export default function useConstructStatusTag() {
  const constructStatusTag = (id: number | string) => {
    if (!id) return "";
    const { statusName, color, icon } =
      STATUS_COLOR_MAP[id as keyof typeof STATUS_COLOR_MAP] ?? {};

    return (
      <Tag color={color} icon={icon}>
        {statusName}
      </Tag>
    );
  };

  return { constructStatusTag };
}

export const STATUS_COLOR_MAP = {
  1: {
    statusName: "KREIRAN",
    color: "success",
    icon: <UpOutlined />,
  },
  2: {
    statusName: "NARUČENO",
    color: "yellow",
    icon: <VerticalLeftOutlined />,
  },
  3: {
    statusName: "ISPORUČENO",
    color: "default",
    icon: <CheckOutlined />,
  },
};
