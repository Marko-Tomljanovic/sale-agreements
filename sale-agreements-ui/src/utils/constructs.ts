import { STATUS_OPTIONS } from "./selectOptions";

export const constructEditIconTooltip = (status: number) => {
  if (status === 3) {
    return "Izmjene nisu moguće kada je ugovor isporučen.";
  } else {
    return "Uredi rok isporuke i status.";
  }
};

export const constructStatusOptions = (status: undefined | number) => {
  switch (status) {
    case 1:
      return STATUS_OPTIONS.filter(
        (option) => option.value === 1 || option.value === 2
      );
    case 2:
      return STATUS_OPTIONS.filter(
        (option) => option.value === 2 || option.value === 3
      );
    case 3:
      return STATUS_OPTIONS.filter((option) => option.value === 3);
    default:
      return [];
  }
};
