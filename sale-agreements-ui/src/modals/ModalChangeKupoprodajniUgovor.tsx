import { Button, DatePicker, Form, Modal, Select, Space, message } from "antd";
import { STATUS_OPTIONS } from "../utils/selectOptions";

export default function ModalChangeKupoprodajniUgovor({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const handlePotvrdi = () => {
    setIsModalOpen(false);
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
      title="Uredi kupoprodajni ugovor"
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
    >
      {contextHolder}
      <Form
        form={form}
        layout="vertical"
        initialValues={{ rokIsporuke: "", status: undefined }}
        onFinish={handlePotvrdi}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{ maxWidth: "none" }}
      >
        <Form.Item
          label="Rok isporuke"
          name="rokIsporuke"
          rules={[
            {
              type: "object" as const,
              required: true,
              message: "Molimo odaberite datum.",
            },
          ]}
        >
          <DatePicker
            style={{ width: "100%" }}
            placeholder="Unesite rok isporuke"
          />
        </Form.Item>
        <Form.Item
          label="Status"
          name="status"
          rules={[{ required: true, message: "Status mora biti upisan." }]}
        >
          <Select
            style={{ width: "100%" }}
            allowClear
            options={STATUS_OPTIONS}
            placeholder="Izaberite status"
          />
        </Form.Item>
        <Form.Item style={{ textAlign: "right" }}>
          <Space>
            <Button onClick={handleCancel}>Odustani</Button>
            <Button type="primary" htmlType="submit">
              Potvrdi
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  );
}
