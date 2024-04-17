import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useLocation } from "react-router-dom";

export default function HeaderButtons() {
  const location = useLocation();
  const pathname = location.pathname;

  const isDodajButton = pathname === "/";

  return (
    <>
      {isDodajButton && (
        <Button
          type="primary"
          icon={<PlusOutlined />}
          style={{ float: "right", marginRight: "20px" }}
        >
          Dodaj kupoprodajni ugovor
        </Button>
      )}
    </>
  );
}
