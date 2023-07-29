import { ImageSourcePropType } from "react-native";

interface FlagsType {
  [code: string]: ImageSourcePropType;
}

export const flags: FlagsType = {
  CNY: require("../../assets/flags/china.png"),
  USD: require("../../assets/flags/eua.jpg"),
  EUR: require("../../assets/flags/europa.png"),
  ARS: require("../../assets/flags/argentina.jpg"),
  BTC: require("../../assets/flags/bitcoin.png"),
  JPY: require("../../assets/flags/japao.jpg"),
  CAD: require("../../assets/flags/canada.jpg"),
};
