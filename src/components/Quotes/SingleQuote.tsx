import { Image, Text, View } from "react-native";
import { QuotesProps } from "./index";
import { styles } from "./styles";
import { flags } from "../../utils/flags";
import { formatPrice } from "../../utils/formatprice";


export default function SigleQuote({
  bid,
  code,
  name,
  pctChange,
}: QuotesProps) {
  
  return (
    <>
      <View style={styles.singleQuote}>
        <Image style={styles.localImg} source={flags[code]} />

        <View style={styles.quoteDescription}>
          <Text style={styles.quoteName}>{name}</Text>
          <Text style={styles.quoteSlug}>{code}</Text>
        </View>

        <View style={styles.quoteValues}>
          <Text style={styles.quoteNow}>{formatPrice(Number(bid))}</Text>
          <Text style={styles.quotePercent}>{pctChange}%</Text>
        </View>
      </View>
    </>
  );
}
