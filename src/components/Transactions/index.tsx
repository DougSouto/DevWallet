import {
  Inter_300Light,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { WalletContext } from "../../context/WalletContext";
import { formatPrice } from "../../utils/formatprice";
import { styles } from "./styles";


export default function Transactions() {
  // Carregamento das fontes
  const trasactionTypeImage = {
    in: require("../../../assets/CircleUP.png"),
    out: require("../../../assets/CircleDown.png"),
  };

  const [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_700Bold,
    Inter_400Regular,
    Inter_600SemiBold,
  });
  
  const navigation = useNavigation()
  const { transactions } = useContext(WalletContext)
  const recentTransaction = transactions.slice(-2)

  return (
    <>
      {fontsLoaded && (
        <View>
          <View style={styles.header}>
            <Text style={styles.title}>Transações Recentes</Text>
            <TouchableOpacity onPress={() => navigation.navigate("transactions")}>
              <Text style={styles.link}>Exibir Todos</Text>
            </TouchableOpacity>
          </View>


          <View style={styles.transactions}>
            {recentTransaction.map(transaction => (
              <View style={styles.transaction}>
                <Image
                  style={styles.icon}
                  source={trasactionTypeImage[transaction.type]}
                />
                <View>
                  <Text style={styles.description}>
                    {transaction.description}
                  </Text>
                  <Text style={styles.value}>
                    {formatPrice(Number(transaction.value))}
                  </Text>
                </View>
              </View>
            ))}


          </View>

        </View>
      )}
    </>
  );
}
