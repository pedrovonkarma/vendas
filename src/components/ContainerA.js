import foto1 from "../assets/foto1.png"
import logo from "../assets/logo.png"

export default function ContainerA(){

    return(<div className="headCont">
        <div className="textboxa">
            <img src={logo} alt="logo"/>
            <p>Ensino mulheres a ganhar de $2.000,00 a $5.000,00 mil reais por mês trabalhando de casa com papelaria personalizada.</p>
            <button>ENTRAR AGORA PARA A FORMAÇÃO PAPELEIRA</button>
        </div>
        <img className="fotoa" src={foto1} alt="foto"/>
    </div>)
}