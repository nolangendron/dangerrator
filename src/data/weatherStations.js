import { imgLandingPage, coquihalla, duffey, manning } from "../../images";
import { data } from "../../data";

const {
  littleBearData,
  coqSummitData,
  cayooshSummitData,
  blowDownMidData,
  foundationMinesData,
  allisonPassData,
  abbottData,
  rogersPassData,
} = data;

export const images = [
  { value: "none", label: "none", image: imgLandingPage },
  { value: "coquihalla", label: "Coquihalla", image: coquihalla },
  { value: "duffey", label: "Duffey", image: duffey },
  { value: "manningPark", label: "Manning Park", image: manning },
];

export const options = [
  { value: "none", label: "Select Area", image: imgLandingPage },
  {
    value: "coquihalla",
    label: "Coquihalla",
    image: coquihalla,
    lowerStation: 15,
    upperStation: 17,
  },
  {
    value: "duffey",
    label: "Duffey",
    image: duffey,
    lowerStation: 74,
    upperStation: 20,
  },
  {
    value: "manningPark",
    label: "Manning Park",
    image: manning,
    lowerStation: 73,
    upperStation: 13,
  },
];

export const stationNumbers = {
  none: {
    nameLower: "",
    elevationLower: "",
    nameUpper: "",
    elevationUpper: "",
    lower: null,
    upper: null,
    seasonDataLower: null,
    seasonDataUpper: null,
  },
  coquihalla: {
    nameLower: "Coquihalla Summit",
    elevationLower: "1220m",
    nameUpper: "Little Bear",
    elevationUpper: "1660m",
    lower: 15,
    upper: 17,
    seasonDataLower: coqSummitData,
    seasonDataUpper: littleBearData,
  },
  duffey: {
    nameLower: "Cayoosh Summit",
    elevationLower: "1250m",
    nameUpper: "Blowdown Mid",
    elevationUpper: "1890m",
    lower: 74,
    upper: 20,
    seasonDataLower: cayooshSummitData,
    seasonDataUpper: blowDownMidData,
  },
  manningPark: {
    nameLower: "Allison Pass",
    elevationLower: "1340m",
    nameUpper: "Foundation Mines",
    elevationUpper: "1650m",
    lower: 73,
    upper: 13,
    seasonDataLower: allisonPassData,
    seasonDataUpper: foundationMinesData,
  }
};