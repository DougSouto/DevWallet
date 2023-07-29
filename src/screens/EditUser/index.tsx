import {
  Inter_300Light,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Header from "../../components/Header";

import { WalletContext } from "../../context/WalletContext";
import { styles } from "./styles";

export default function EditUser() {
  const [loadedFonts] = useFonts({
    Inter_300Light,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  const navigation = useNavigation();
  const { username, changeUsername } = useContext(WalletContext)

  const [user, setUser] = useState<string>("");

  function handleUsernameChange() {
    changeUsername(user)
    navigation.navigate("home");
  }

  useEffect(() => {
    setUser(username)
  }, []);

  return (
    <>
      {loadedFonts && (
        <View style={styles.container}>
          <Header />
          <Image source={require("../../../assets/username.png")} />
          <View style={styles.viewBox}>
            <Text style={styles.text}>Insira seu nome e sobrenome:</Text>
            <TextInput
              placeholder="Ex.: Salário Mensal"
              style={styles.textInput}
              placeholderTextColor={"#0376c488"}
              value={user}
              onChangeText={(text) => setUser(text)}
            />
          </View>

          <View style={styles.viewBox}>
            <TouchableOpacity
              style={styles.add}
              onPress={() => handleUsernameChange()}
            >
              <Text style={styles.addText}>Alterar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cancel}
              onPress={() => navigation.navigate("home")}
            >
              <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}
