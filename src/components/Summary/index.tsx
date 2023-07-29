import { Eye } from "phosphor-react-native";
import { Text, View, Image } from "react-native";
import { styles } from "./styles";
import { Inter_400Regular, useFonts } from "@expo-google-fonts/inter";
import { TitilliumWeb_600SemiBold } from "@expo-google-fonts/titillium-web";
import { useContext } from "react";
import { WalletContext } from "../../context/WalletContext";
import { formatPrice } from "../../utils/formatprice";

export default function Summary() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    TitilliumWeb_600SemiBold,
  });

  const {transactions} = useContext(WalletContext)

  const summary = transactions.reduce(
    (acc, transaction) => {
      if(transaction.type === "in"){
        acc.income += Number(transaction.value)
        acc.total += Number(transaction.value)
      } else {
        acc.outcome += Number(transaction.value)
        acc.total -= Number(transaction.value)
      }
      return acc
    }, 
    {income: 0, outcome: 0, total: 0}
  )
  
  return (
    <>
    {fontsLoaded && (
    <View style={styles.summary}>
      <View>
        <View style={styles.sumHeader}>
          <Text style={styles.sumHeaderText}>Total em caixa</Text>
          {/* <Eye size={24} color="#fff" /> */}
        </View>
        <Text style={styles.sumTotal}>{formatPrice(summary.total)}</Text>
      </View>

      <View style={styles.details}>
            <View >
              <View style={styles.detailHeader}>
                
                <Image 
                style={styles.detailIcon} 
                source={require("../../../assets/CircleUP.png")}
                />
               
                <Text style={styles.detailText}>
                  Entradas
                </Text>
                
              </View>
              <Text style={styles.detailValue}>{formatPrice(summary.income)}</Text>
            </View>

            <View>
              <View style={styles.detailHeader}>
                <Image style={styles.detailIcon} source={require("../../../assets/CircleDown.png")} />
                <Text style={styles.detailText}>Saída</Text>
              </View>
              <Text style={styles.detailValue}>{formatPrice(summary.outcome)}</Text>
            </View>
          </View>
    </View>
  )}
    </>
  );
}
