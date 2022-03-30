import { SorteioContextProvider } from "./Sorteio"

const GlobalContext: React.FC = ({ children }) => {
    return <SorteioContextProvider>{children}</SorteioContextProvider>
}

export default GlobalContext;