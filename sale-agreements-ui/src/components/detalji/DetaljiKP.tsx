import { Divider } from "antd";
import InfoKP from "./InfoKP";
import TableArtikli from "./TableAkrikli";

export default function DetaljiKP() {
  const dataArtikli = [
    {
      id: 1,
      naziv: "Perilica posuđa ugradbena Electrolux EEA27200L",
      dobavljac: "Sancta Domenica",
      status: 1,
    },
    {
      id: 2,
      naziv: "Napa ugradbena Gorenje TH60E3X",
      dobavljac: "Sancta Domenica",
      status: 2,
    },
    {
      id: 3,
      naziv: "Ploča ugradbena kombinirana Gorenje GCE691BSC",
      dobavljac: "Bijela tehnika",
      status: 3,
    },
  ];

  return (
    <>
      <InfoKP detalji={{}} />
      <Divider />
      <TableArtikli data={dataArtikli} />
    </>
  );
}
