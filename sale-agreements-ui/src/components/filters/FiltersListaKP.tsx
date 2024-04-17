import { useState } from "react";
import {
  Button,
  Col,
  Divider,
  Form,
  Row,
  Space,
  Switch,
  Typography,
  message,
} from "antd";
import Input from "antd/es/input/Input";
import { CheckOutlined } from "@ant-design/icons";

export default function FiltersListaKP() {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handlePretrazi = () => {};

  const onFinishFailed = (errorInfo: any) => {
    const messageData = "Niste popunili sve podatke.";
    messageApi.open({
      type: "warning",
      content: messageData,
    });
  };

  const handleReset = async () => {
    setIsLoading(true);
    try {
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Typography.Title level={5} style={{ marginTop: 0 }}>
        Pretraga
      </Typography.Title>
      <Form
        form={form}
        layout="vertical"
        initialValues={{}}
        onFinish={handlePretrazi}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{ maxWidth: "none" }}
      >
        <Row gutter={30} align={"bottom"}>
          <Col xs={24} sm={14} md={12} lg={10} xl={8} xxl={6}>
            <Form.Item label="Ime kupca" name="kupac">
              <Input
                style={{ width: "100%" }}
                placeholder="Unesite ime kupca"
              />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label="Aktivnost" name="aktivnost">
              <Switch checkedChildren={<CheckOutlined />} />
            </Form.Item>
          </Col>
          <Col flex={"auto"} style={{ textAlign: "right" }}>
            <Form.Item>
              <Space>
                <Button onClick={handleReset}>Očisti</Button>
                <Button type="primary" htmlType="submit">
                  Pretraži
                </Button>
              </Space>
            </Form.Item>
          </Col>
        </Row>
        <Divider style={{ marginTop: 0 }} />
      </Form>
    </>
  );
}
