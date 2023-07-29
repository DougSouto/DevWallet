import {
  Inter_300Light,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Header from "../../components/Header";
import SwitchButton from "../../components/SwitchButton";
import { WalletContext } from "../../context/WalletContext";
import { styles } from "./styles";

export default function Add() {
  const [loadedFonts] = useFonts({
    Inter_300Light,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  const { addNewTransaction } = useContext(WalletContext)
  const navigation = useNavigation()
  const [btnState, setBtnState] = useState<"in" | "out">("out");
  const [description, setDescription] = useState("")
  const [value, setValue] = useState("")

  function handleAddNewTransactions() {
    const newTransaction = {
      description,
      value,
      type: btnState
    }
    addNewTransaction(newTransaction)
    navigation.navigate("home")
  }

  function handleCancelNewTransactions() {
    navigation.navigate("home")
  }
  return (
    <>
      {loadedFonts && (
        <View style={styles.container}>
          <Header />
          <Text style={styles.title}>Adicionar Transação</Text>
          <View style={styles.viewBox}>
            <Text style={styles.text}>Descrição</Text>
            <TextInput
              placeholder="Ex.: Salário Mensal"
              style={styles.textInput}
              placeholderTextColor={"#0376c488"}
              value={description}
              onChangeText={(text) => setDescription(text)}
            />
          </View>
          <View style={styles.viewBox}>
            <Text style={styles.text}>Valor</Text>
            <TextInput
              placeholder="00"
              keyboardType="number-pad"
              style={styles.textInput}
              placeholderTextColor={"#0376c488"}
              value={value}
              onChangeText={(text) => setValue(text)}
            />
          </View>
          <View style={styles.viewBox}>
            <Text style={styles.text}>Tipo</Text>
            <SwitchButton state={btnState} onChange={setBtnState} />
          </View>

          <View style={styles.viewBox}>
            <TouchableOpacity
              onPress={() => handleAddNewTransactions()}
              style={styles.add}
            >
              <Text style={styles.addText}>Adicionar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cancel}
              onPress={() => handleCancelNewTransactions()}
            >
              <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  )
}
