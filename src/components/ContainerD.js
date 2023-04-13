import { useState } from "react"
import { useEffect } from "react"
import foto2 from "../assets/foto2.png"
import { useRef } from "react"
export default function ContainerD(){
    const resposta1 = "FP é para qualquer pessoa que queira ter uma renda extra e que queira empreender no mercado de Papelaria Personalizada. Isso mesmo! Serve para quem está no início absoluto até para quem já tem conhecimentos avançados. Além disso tudo, serve também para quem quer apenas se aventurar no mundo dos personalizados, fazendo peças encantadoras para amigos, parentes e até mesmo para sua própria festa!"
    const resposta2 = "O FP foi criado para ajudar papeleiras a desbloquear a capacidade criativa e possibilitar uma liberdade nunca alcançada antes."
    const resposta3 = "O FP é o melhor lugar onde você pode se desenvolver por completo. Nele você aprende desde o básico, técnicas avançadas de decoração de peças, até estratégia de negócio, posicionamento e crescimento como marca. A maioria das papeleiras começa com coletivas e usando projetos prontos. Ao longo do tempo isso traz um bloqueio e o FP traz a liberdade de não depender mais de projetos prontos e fazer mais do mesmo. O método é simples e qualquer pessoa pode replicar."
    const resposta4 = "O FP proporciona para a papeleira que ela tenha o potencial de elevar o nível de criação e harmonização, com técnicas de fácil entendimento e aplicação. Focamos em um aprendizado de técnica, onde você não precisará de uma máquina para se diferenciar no mercado. Além disso, você pode ganhar muito mais por um produto quando comparado a um brinde."
    const resposta5 = "Assim que acessar o FP, você deve acessar o módulo INFORMATIVO. Recomendamos que inicie os PRIMEIROS PASSOS para que tenha uma noção geral sobre o mundo da papelaria personalizada. Depois, recomendamos que veja todos os EVENTOS GRATUITOS que disponibilizamos. Depois disso, você estará pronta para pôr a MÃO NA MASSA!"
    const [r1, setR1] = useState('')
    const [r2, setR2] = useState('')
    const [r3, setR3] = useState('')
    const [r4, setR4] = useState('')
    const [r5, setR5] = useState('') 
    const questionBoxRef = useRef(null); // cria uma referência para a div questionBox
    const questionBoxRef2 = useRef(null);
    const questionBoxRef3 = useRef(null);
    const questionBoxRef4 = useRef(null);
    const questionBoxRef5 = useRef(null);
useEffect(() => {
  questionBoxRef.current.style.height = questionBoxRef.current.scrollHeight + 'px'; // define a altura da div com base no seu conteúdo
}, [r1]);
useEffect(() => {
    questionBoxRef2.current.style.height = questionBoxRef2.current.scrollHeight + 'px'; // define a altura da div com base no seu conteúdo
  }, [r2]);
  useEffect(() => {
    questionBoxRef3.current.style.height = questionBoxRef3.current.scrollHeight + 'px'; // define a altura da div com base no seu conteúdo
  }, [r3]);
  useEffect(() => {
    questionBoxRef4.current.style.height = questionBoxRef4.current.scrollHeight + 'px'; // define a altura da div com base no seu conteúdo
  }, [r4]);
  useEffect(() => {
    questionBoxRef5.current.style.height = questionBoxRef5.current.scrollHeight + 'px'; // define a altura da div com base no seu conteúdo
  }, [r5]);


    
    return(<div className="fourthCont">
        <img alt="gabi" src={foto2}/>
        <div className="textboxb">
        <div className="questionBox" ref={questionBoxRef}>
            <div onClick={() => {setR1(<p>{resposta1}</p>)}} className="question">
                <h1>Pra quem é o formação papeleira?</h1>
                <h2>+</h2>
            </div>
            {r1}
        </div>

        <div className="questionBox" ref={questionBoxRef2}>
            <div onClick={() => {setR2(<p>{resposta2}</p>)}} className="question">
                <h1>Por que vocês decidiram criar o formação papeleira?</h1>
                <h2>+</h2>
            </div>
            {r2}
        </div>

        <div className="questionBox" ref={questionBoxRef3}>
            <div onClick={() => {setR3(<p>{resposta3}</p>)}} className="question">
                <h1>Por que o método do formação papeleira é o melhor?</h1>
                <h2>+</h2>
            </div>
            {r3}
        </div>

        <div className="questionBox" ref={questionBoxRef4}>
            <div onClick={() => {setR4(<p>{resposta4}</p>)}} className="question">
                <h1>O que as pessoas podem alcançar com o formação papeleira?</h1>
                <h2>+</h2>
            </div>
            {r4}
        </div>

        <div className="questionBox" ref={questionBoxRef5}>
            <div onClick={() => {setR5(<p>{resposta5}</p>)}} className="question">
                <h1>O que elas devem fazer após comprar o formação papeleira?</h1>
                <h2>+</h2>
            </div>
            {r5}
        </div>




        </div>
    </div>)
}