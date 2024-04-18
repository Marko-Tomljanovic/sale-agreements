import {
  Button,
  Col,
  Divider,
  Form,
  Row,
  Space,
  Switch,
  Tooltip,
  Typography,
} from "antd";
import Input from "antd/es/input/Input";
import {
  CheckCircleTwoTone,
  CheckOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { SelectedRow } from "../../utils/types";
import { fetchFilterKP } from "../../api/SaleAgreementsApi";
import { useState } from "react";

export default function FiltersListaKP({
  setData,
  setIsLoading,
}: {
  setData: React.Dispatch<React.SetStateAction<SelectedRow[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [form] = Form.useForm();

  const handlePretrazi = async (values: {
    kupac: string;
    aktivnost: boolean;
  }) => {
    const { kupac, aktivnost } = values;
    try {
      setIsLoading(true);
      const response = await fetchFilterKP(kupac, aktivnost);
      setData(response.data.kupoprodajniUgovori);
      setIsActive(true);
    } catch (error) {
      console.log("error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = async () => {
    if (!isActive) {
      form.resetFields();
      return;
    }
    try {
      setIsLoading(true);
      const response = await fetchFilterKP("", "");
      setData(response.data.kupoprodajniUgovori);
      form.resetFields();
      setIsActive(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Typography.Title level={5} style={{ marginTop: 0 }}>
        Pretraga {isActive && <CheckCircleTwoTone twoToneColor="#52c41a" />}
      </Typography.Title>
      <Form
        form={form}
        layout="vertical"
        initialValues={{ kupac: "", aktivnost: false }}
        onFinish={handlePretrazi}
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
            <Form.Item
              label={
                <Space>
                  Aktivnost
                  <Tooltip title="Aktivni ugovori su oni koji su u statusu „KREIRANO“ ili „NARUČENO“, neaktivni ugovori su oni koji su u statusu „ISPORUČENO“.">
                    <QuestionCircleOutlined />
                  </Tooltip>
                </Space>
              }
              name="aktivnost"
            >
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
