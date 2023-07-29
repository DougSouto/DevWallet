import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Add from "../screens/Add";
import EditUser from "../screens/EditUser";
import Home from "../screens/Home";
import Transactions from "../screens/Transactions";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        animationTypeForReplace: "push",
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="add" component={Add} />
      <Screen name="transactions" component={Transactions} />

      <Screen name="edit" component={EditUser} />
    </Navigator>
  );
}
