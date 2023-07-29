import { Image, View } from "react-native";
import ProfileButton from "./ProfileButton";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { WalletContext } from "../../context/WalletContext";
import { useContext } from "react";

export default function Header() {
  const navigation = useNavigation()
  const {username} = useContext(WalletContext)
  return (
    <View style={styles.top}>
      <Image style={styles.logo} source={require("../../../assets/logo.png")} />
      <ProfileButton 
      name={username} 
      onProfilePress={()=>navigation.navigate("edit")}
      />
    </View>
  );
}
