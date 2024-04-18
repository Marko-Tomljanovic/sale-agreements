import { Button, DatePicker, Form, Input, Modal, Spin, message } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import { PostKP } from "../api/SaleAgreementsApi";
import { useGlobal } from "../context/GlobalProvider";

export default function ModalAddKupoprodajniUgovor({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { setDataSource } = useGlobal();

  const handlePotvrdi = async (values: any) => {
    values = {
      ...values,
      datum_akontacije: dayjs(values.datum_akontacije).format("YYYY-MM-DD"),
      rok_isporuke: dayjs(values.rok_isporuke).format("YYYY-MM-DD"),
    };
    try {
      setIsLoading(true);
      const response = await PostKP(values);
      setDataSource(response.data.kupoprodajniUgovori);
      form.resetFields();
      setIsModalOpen(false);
    } catch (error) {
      console.log("error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  const onFinishFailed = (errorInfo: any) => {
    const messageData = "Niste popunili sve podatke.";
    messageApi.open({
      type: "warning",
      content: messageData,
    });
  };

  return (
    <Modal
      title="Novi kupoprodajni ugovor"
      open={isModalOpen}
      onCancel={handleCancel}
      footer={
        <>
          <Button onClick={handleCancel}>Odustani</Button>
          <Button type="primary" onClick={() => form.submit()}>
            Potvrdi
          </Button>
        </>
      }
    >
      {contextHolder}
      <Spin spinning={isLoading}>
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            kupac: "",
            broj_ugovora: "",
            datum_akontacije: "",
            rok_isporuke: "",
          }}
          onFinish={handlePotvrdi}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          style={{ maxWidth: "none" }}
        >
          <Form.Item
            label="Ime kupca"
            name="kupac"
            rules={[
              {
                type: "string",
                required: true,
                message: "Molimo unesite ime kupca.",
              },
            ]}
          >
            <Input style={{ width: "100%" }} placeholder="Unesite ime kupca" />
          </Form.Item>
          <Form.Item
            label="Broj ugovora"
            name="broj_ugovora"
            rules={[
              {
                type: "string",
                required: true,
                message: "Molimo unesite broj ugovora.",
              },
            ]}
          >
            <Input
              style={{ width: "100%" }}
              placeholder="Unesite broj ugovora"
            />
          </Form.Item>
          <Form.Item
            label="Datum akontacije"
            name="datum_kontacije"
            rules={[
              {
                type: "object" as const,
                required: true,
                message: "Molimo odaberite datum akontacije.",
              },
            ]}
          >
            <DatePicker
              style={{ width: "100%" }}
              disabledDate={(day) => day.isBefore(new Date())}
              format={"DD.MM.YYYY"}
              placeholder="Odaberite datum akontacije"
            />
          </Form.Item>
          <Form.Item
            label="Rok ispruke"
            name="rok_isporuke"
            rules={[
              {
                type: "object" as const,
                required: true,
                message: "Molimo odaberite rok isporuke.",
              },
            ]}
          >
            <DatePicker
              style={{ width: "100%" }}
              disabledDate={(day) => day.isBefore(new Date())}
              format={"DD.MM.YYYY"}
              placeholder="Odaberite rok isporuke"
            />
          </Form.Item>
        </Form>
      </Spin>
    </Modal>
  );
}
