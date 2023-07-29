
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Inter_400Regular, useFonts } from "@expo-google-fonts/inter";
import { TitilliumWeb_600SemiBold } from "@expo-google-fonts/titillium-web";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import Header from "../components/Header";
import Quotes from "../components/Quotes";
import Summary from "../components/Summary";
import Transactions from "../components/Transactions";
import { WalletContext } from "../context/WalletContext";

export default function Home() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    TitilliumWeb_600SemiBold,
  });

  const navigation = useNavigation();

  function handleAddButton() {
    navigation.navigate("add");
  }

  return (
    <View style={styles.container}>
      {fontsLoaded ? (
        <>
          <Header />
          <Summary />
          <Transactions />
          <Quotes />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => handleAddButton()}
          >
            <Text style={styles.btnText}>Criar Transação</Text>
          </TouchableOpacity>

        </>
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  btn: {
    width: "100%",
    backgroundColor: "#9cc5fd",
    borderRadius: 16,
    marginTop: 32,
    padding: 16,
  },
  btnText: {
    textAlign: "center",
    width: "100%",
    color: "#0f172a",
    fontFamily: "TitilliumWeb_600SemiBold",
    fontSize: 18,
  },
});
