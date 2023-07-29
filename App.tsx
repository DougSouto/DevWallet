import { StatusBar } from "expo-status-bar";
import Routes from "./src/routes";
import { WalletContextProvider } from "./src/context/WalletContext";
export default function App() {
  return (
    <WalletContextProvider>
      <Routes />
      <StatusBar style="light" />
    </WalletContextProvider>
  );
}
