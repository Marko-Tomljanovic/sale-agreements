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
import dayjs from "dayjs";
import { fetchKP } from "../api/SaleAgreementsApi";
import { useGlobal } from "../context/GlobalProvider";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<SelectedRow>(
    INIT_STATE_SELECTED_ROW
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { constructStatusTag } = useConstructStatusTag();

  const { dataSource, setDataSource } = useGlobal();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data = await fetchKP();
      setDataSource(data);
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
      render: (text: string) => {
        return <span>{dayjs(text).format("DD.MM.YYYY")}</span>;
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text: number) => {
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
                setSelectedRow({
                  ...record,
                  rok_isporuke: dayjs(record.rok_isporuke).format("DD.MM.YYYY"),
                });
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
      <FiltersListaKP setData={setDataSource} setIsLoading={setIsLoading} />
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
          setDataSource={setDataSource}
        />
      </Spin>
    </>
  );
}
