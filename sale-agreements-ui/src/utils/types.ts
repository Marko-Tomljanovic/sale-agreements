export type SelectedRow = {
  id: string;
  kupac: string;
  broj_ugovora: string;
  datum_akontacije: string;
  rok_isporuke: string;
  status: undefined | number;
};

export type Artikl = {
  id: string;
  naziv: string;
  dobavljac: string;
  status: undefined | number;
};
