import { EditOutlined } from "@ant-design/icons";
import { Button, Table, Tooltip } from "antd";
import useConstructStatusTag from "../custom-hooks/useConstructStatusTag";

export default function HomePage() {
  const { constructStatusTag } = useConstructStatusTag();

  const dataSource = [
    {
      key: "1",
      ime: "Fili Filipović",
      brojUgovora: "10/33",
      rokIsporuke: "3.3.1022",
      status: 1,
    },
    {
      key: "1",
      ime: "Fili Filipović",
      brojUgovora: "10/33",
      rokIsporuke: "3.3.1022",
      status: 2,
    },
    {
      key: "1",
      ime: "Fili Filipović",
      brojUgovora: "10/33",
      rokIsporuke: "3.3.1022",
      status: 3,
    },
  ];

  const columns = [
    {
      title: "Ime",
      dataIndex: "ime",
      key: "ime",
    },
    {
      title: "Broj ugovora",
      dataIndex: "brojUgovora",
      key: "brojUgovora",
    },
    {
      title: "Rok isporuke",
      dataIndex: "rokIsporuke",
      key: "rokIsporuke",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text: any) => {
        return (
          <span style={{ whiteSpace: "nowrap" }}>
            {constructStatusTag(text)}
          </span>
        );
      },
    },
    {
      title: "Akcije",
      dataIndex: "akcije",
      key: "akcije",
      render: (text: any, record: any) => {
        return (
          <Tooltip placement="top" title="Uredi rok isporuke i status">
            <Button
              type="link"
              icon={<EditOutlined />}
              //   onClick={() =>{}
            />
          </Tooltip>
        );
      },
    },
  ];
  return (
    <>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
      ></Table>
    </>
  );
}
