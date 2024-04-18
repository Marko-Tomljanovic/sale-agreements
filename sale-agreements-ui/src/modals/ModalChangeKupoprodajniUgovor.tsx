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
import { axiosInstance } from "../services/axiosConfig";

export default function ModalChangeKupoprodajniUgovor({
  isModalOpen,
  setIsModalOpen,
  selectedRow,
  setDataSource,
}: {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedRow: SelectedRow;
  setDataSource: React.Dispatch<React.SetStateAction<SelectedRow[]>>;
}) {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handlePotvrdi = async (values: any) => {
    values = {
      ...values,
      rok_isporuke: dayjs(values.rok_isporuke).format("YYYY-MM-DD"),
    };
    try {
      setIsLoading(true);
      const response = await axiosInstance.put(
        `/kupoprodajni-ugovori/${selectedRow.id}`,
        values
      );
      setDataSource(response.data.kupoprodajniUgovori);
      form.resetFields();
      setIsModalOpen(false);
    } catch (error) {
      console.log("error:", error);
    } finally {
      setIsLoading(false);
    }
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
      title={`Uredi kupoprodajni ugovor - ${selectedRow.broj_ugovora}`}
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
