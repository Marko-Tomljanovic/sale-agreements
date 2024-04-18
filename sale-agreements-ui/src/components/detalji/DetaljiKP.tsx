import { Divider, Spin } from "antd";
import InfoKP from "./InfoKP";
import TableArtikli from "./TableAkrikli";
import { useEffect, useState } from "react";
import { fetchDetaljiKP } from "../../api/SaleAgreementsApi";
import { useParams } from "react-router-dom";
import { Artikl } from "../../utils/types";

export default function DetaljiKP() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<{
    artikli: Artikl[];
    kupoprodajniUgovor: any[];
  }>({
    artikli: [],
    kupoprodajniUgovor: [],
  });
  const params = useParams();
  const id = params.id!;

  const fetchDetaljiData = async () => {
    try {
      setIsLoading(true);
      const data = await fetchDetaljiKP(id);
      setData(data);
    } catch (error) {
      console.log("error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDetaljiData();
  }, []);

  return (
    <>
      <Spin spinning={isLoading}>
        <InfoKP detalji={data.kupoprodajniUgovor} />
        <Divider />
        <TableArtikli data={data.artikli} />
      </Spin>
    </>
  );
}
