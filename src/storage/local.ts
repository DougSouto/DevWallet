import AsyncStorage from "@react-native-async-storage/async-storage";

const USERNAME = "DEVWALLET@user";
const TRANSACTION = "DEVWALLET@transactions";

async function setLocalUserName(user: string) {
  try {
    await AsyncStorage.setItem(USERNAME, user);
  } catch (e) {
    throw new Error();
  }
}

async function getLocalUserName() {
  try {
    const value = await AsyncStorage.getItem(USERNAME);
    return value ? value : "? ?";
  } catch (e) {
    throw new Error();
  }
}

interface TransactionProps {
  description: string;
  value: string;
  type: "in" | "out";
}

async function getTransactions() {
  const transactions = await AsyncStorage.getItem(TRANSACTION);
  return transactions;
}

async function saveTransaction(transactions: TransactionProps[]) {
  try {
      await AsyncStorage.setItem(TRANSACTION, JSON.stringify([transactions]));
  } catch (error) {
    throw new Error();
  }
}

export { TransactionProps, saveTransaction, getLocalUserName, setLocalUserName, getTransactions };
