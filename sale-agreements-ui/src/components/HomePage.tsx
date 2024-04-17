import { EditOutlined } from "@ant-design/icons";
import { Button, Spin, Table, Tooltip } from "antd";
import useConstructStatusTag from "../custom-hooks/useConstructStatusTag";
import { useEffect, useState } from "react";
import ModalChangeKupoprodajniUgovor from "../modals/ModalChangeKupoprodajniUgovor";
import { constructEditIconTooltip } from "../utils/constructs";
import { SelectedRow } from "../utils/types";
import FiltersListaKP from "./filters/FiltersListaKP";
import { useNavigate } from "react-router-dom";
import { INIT_STATE_SELECTED_ROW } from "../utils/initialStates";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<SelectedRow>(
    INIT_STATE_SELECTED_ROW
  );
  const [dataSource, setDataSource] = useState<SelectedRow[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { constructStatusTag } = useConstructStatusTag();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "http://localhost:5000/api/kupoprodajni-ugovori"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setDataSource(data.data);
    } catch (error) {
      console.log("error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {
      title: "Ime kupca",
      dataIndex: "kupac",
      key: "kupac",
    },
    {
      title: "Broj ugovora",
      dataIndex: "broj_ugovora",
      key: "broj_ugovora",
    },
    {
      title: "Rok isporuke",
      dataIndex: "rok_isporuke",
      key: "rok_isporuke",
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
      key: "akcije",
      render: (record: any) => {
        return (
          <Tooltip
            placement="top"
            title={constructEditIconTooltip(record.status)}
          >
            <Button
              type="link"
              icon={<EditOutlined />}
              disabled={record.status === 3}
              onClick={(event) => {
                event.stopPropagation(); // Zaustavi pokretanje detalja
                setSelectedRow(record);
                setIsModalOpen(true);
              }}
            />
          </Tooltip>
        );
      },
    },
  ];
  return (
    <>
      <FiltersListaKP />
      <Spin spinning={isLoading}>
        <Table
          dataSource={dataSource || []}
          columns={columns}
          rowKey="id"
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
                navigate(`/detalji/${record.id}`);
              },
              style: { cursor: "pointer" },
            };
          }}
          pagination={false}
        ></Table>
        <ModalChangeKupoprodajniUgovor
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          selectedRow={selectedRow}
        />
      </Spin>
    </>
  );
}
