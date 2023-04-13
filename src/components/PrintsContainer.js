import cell1 from "../assets/prints/cell1.png"
import cell2 from "../assets/prints/cell2.png"
import prints1 from "../assets/prints/prints1.png"
import prints2 from "../assets/prints/prints2.png"
import inst1 from "../assets/prints/inst1.png"
import inst2 from "../assets/prints/inst2.png"
import dep from "../assets/prints/dep.png"

export default function PrintsContainer(){

    return(<div className="prints">
        <h1>Confira o que as alunas dizem sobre os métodos:</h1>
        <div className="sectiona"><img src={cell1} alt="print"/><img src={cell2} alt="print"/></div>
        <div className="sectionb"><img src={prints1} alt="print"/><img src={prints2} alt="print"/></div>
        <div className="sectionc"><img src={inst1} alt="print"/><img src={inst2} alt="print"/></div>
        <div className="sectiond"><img src={dep} alt="print"/></div>
    </div>)
}