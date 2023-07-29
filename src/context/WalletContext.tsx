import { ReactNode, createContext, useEffect, useState } from "react";
import { getLocalUserName, saveTransaction, setLocalUserName } from "../storage/local";

interface WalletContextProviderProps {
    children: ReactNode
}

interface Transaction {
    description: string
    value: string 
    type: "in" | "out"
}

interface WalletContextType {
    username: string
    changeUsername: (name: string) => void
    transactions: Transaction[]
    addNewTransaction: (newtransaction: Transaction) => void
    getStoragedTransactions: () => void
}

export const WalletContext = createContext({} as WalletContextType)

export function WalletContextProvider({ children }: WalletContextProviderProps) {
    const [username, setUsername] = useState("")
    const [transactions, setTransactions] = useState([] as Transaction[])

    function changeUsername(name: string) {
        setLocalUserName(name)
        setUsername(name)
    }

    async function updateUsernameOnLoad() {
        const user = await getLocalUserName()
        setUsername(user)
    }

    async function updateTransactionsOnLoad(){
        const storedTransactions = await getStoragedTransactions()
        setTransactions(storedTransactions)
    } 

    function addNewTransaction(newtransaction: Transaction) {
        setTransactions([...transactions, newtransaction])
        saveTransaction([...transactions, newtransaction])
    }

    function getStoragedTransactions() {
        return transactions
    }

    useEffect(() => {
        updateUsernameOnLoad()
        updateTransactionsOnLoad()
    }, [])

    return (
        <WalletContext.Provider value={{ username, getStoragedTransactions, changeUsername, transactions, addNewTransaction }}>
            {children}
        </WalletContext.Provider>
    )
}