import {
  Button,
  DatePicker,
  Form,
  Modal,
  Select,
  Space,
  Spin,
  message,
} from "antd";
import dayjs from "dayjs";
import { constructStatusOptions } from "../utils/constructs";
import { useEffect, useState } from "react";
import { SelectedRow } from "../utils/types";

export default function ModalAddKupoprodajniUgovor({
  isModalOpen,
  setIsModalOpen,
  selectedRow,
}: {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedRow: SelectedRow;
}) {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handlePotvrdi = () => {
    form.resetFields();
    setIsModalOpen(false);
  };
  useEffect(() => {
    form.setFieldsValue({
      rok_isporuke: dayjs(selectedRow.rok_isporuke, "DD.MM.YYYY"),
      status: selectedRow.status,
    });
  }, [selectedRow]);

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
      title="Dodaj kupoprodajni ugovor"
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
    >
      {contextHolder}
      <Spin spinning={isLoading}>
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            rok_isporuke: dayjs(selectedRow.rok_isporuke, "DD.MM.YYYY"),
            status: selectedRow.status,
          }}
          onFinish={handlePotvrdi}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          style={{ maxWidth: "none" }}
        >
          <Form.Item
            label="Rok isporuke"
            name="rok_isporuke"
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
              disabledDate={(day) => day.isBefore(new Date())}
              format={"DD.MM.YYYY"}
              disabled={form.getFieldValue("status") === 3}
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
              options={constructStatusOptions(selectedRow.status)}
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
      </Spin>
    </Modal>
  );
}
