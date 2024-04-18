function create(newKP) {
  if (
    !newKP.kupac ||
    !newKP.broj_ugovora ||
    !newKP.datum_akontacije ||
    !newKP.rok_isporuke
  ) {
    return true;
  }
  return false;
}

module.exports = {
  create,
};
