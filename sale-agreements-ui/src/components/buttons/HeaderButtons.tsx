import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useLocation } from "react-router-dom";
import ModalAddKupoprodajniUgovor from "../../modals/ModalAddKupoprodajniUgovor";
import { useState } from "react";

export default function HeaderButtons() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const location = useLocation();
  const pathname = location.pathname;

  const isDodajButton = pathname === "/";

  return (
    <>
      {isDodajButton && (
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setIsModalOpen(true)}
          style={{ float: "right", marginRight: "20px" }}
        >
          Dodaj kupoprodajni ugovor
        </Button>
      )}
      <ModalAddKupoprodajniUgovor
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
}
