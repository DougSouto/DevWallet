import {
  Inter_300Light,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "phosphor-react-native";
import { useContext } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { WalletContext } from "../../context/WalletContext";
import { formatPrice } from "../../utils/formatprice";
import { styles } from "./styles";

export default function Transactions() {
  const [loadedFonts] = useFonts({
    Inter_300Light,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  const navigation = useNavigation();
  const { transactions } = useContext(WalletContext)

  const trasactionTypeImage = {
    in: require("../../../assets/CircleUP.png"),
    out: require("../../../assets/CircleDown.png"),
  };

  console.log(transactions)

  return (
    <>
      {loadedFonts && (
        <View style={styles.container}>
          <View style={styles.topo}>
            <TouchableOpacity 
            onPress={() => navigation.navigate("home")
            }>
              <ArrowLeft color="#fff" size={24} />
            </TouchableOpacity>
            <Text style={styles.title}>Transações</Text>
          </View>
          <ScrollView style={styles.transactions}>
            {transactions.map(transaction => (
              <View
               style={styles.singleTransaction} 
               key={transactions.indexOf(transaction)}
               >
                <Image 
                style={styles.typeImg} 
                source={trasactionTypeImage[transaction.type]} 
                />
                <Text style={styles.description}>{transaction.description}</Text>
                <Text style={styles.value}>{formatPrice(Number(transaction.value))}</Text>
              </View>
            ))}
          </ScrollView>
          </View>
      )}
    </>
  );
}