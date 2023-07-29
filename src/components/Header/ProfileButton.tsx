import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ProfileButtonProps {
  onProfilePress?: () => void;
  name: string;
}

export default function ProfileButton({
  onProfilePress = () => {},
  name,
}: ProfileButtonProps) {
  
  const arrayOfName = name.trim().split(" ");
  const initials = `${arrayOfName[0].substring(0,1)}${arrayOfName[arrayOfName.length-1].substring(0,1)}`

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={() => onProfilePress()}>
        <Text style={styles.text}>{initials}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    borderRadius: 35,
    backgroundColor: "#0d7ebb",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textTransform: "uppercase",
    fontSize: 20,
    color: "#fff",
    fontFamily: "Inter_400Regular",
  },
});
