import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function GoBackButton() {
  const navigate = useNavigate();
  return (
    <Button
      type="text"
      icon={<ArrowLeftOutlined />}
      onClick={() => navigate(-1)}
      style={{
        fontSize: "16px",
        width: 64,
        height: 64,
      }}
    />
  );
}
