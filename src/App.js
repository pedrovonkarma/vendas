import BonusContainer from "./components/BonusContainer";
import ContainerA from "./components/ContainerA"
import ContainerB from "./components/ContainerB";
import ContainerC from "./components/ContainerC";
import ContainerD from "./components/ContainerD";
import ContainerE from "./components/ContainerE";
import PrintsContainer from "./components/PrintsContainer";
import GlobalStyle from "./Reset";
function App() {
  return (
    <>
    <GlobalStyle/>
    <ContainerA/>
    <ContainerB/>
    <ContainerC/>
    <ContainerD/>
    <ContainerE/>
    <PrintsContainer/>
    <BonusContainer/>
    </>
  );
}

export default App;
