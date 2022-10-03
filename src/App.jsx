import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);
    const [dados, setDados] = useState("");

    const [selectA, setSelectA] = useState(false);
    const [selectB, setSelectB] = useState(false);
    const [selectC, setSelectC] = useState(false);

    function handleSubmit() {
        setSelectA(false);
        setSelectB(false);
        setSelectC(false);

        let url = `https://maria-apitagoras.herokuapp.com/calcula?a=${a}&b=${b}&c=${c}`;

        axios
            .get(url)
            .then(({ data }) => {
                if (data.retangulo == true) {
                    if (a == 0) {
                        setSelectA(true);
                    } else if (b == 0) {
                        setSelectB(true);
                    } else if (c == 0) {
                        setSelectC(true);
                    }
                }
                setDados(data);
            })
            .catch((error) => console.log(error));
    }

    return (
        <div className="tela">
            <h1>Calculadora do Teorema de Pitágoras</h1>

            <div className="bloco">
                <p className="instrucao">
                    Insira dois valores para calcular o lado que falta do
                    triangulo.
                </p>

                <div className="bloquinho bloco-triangulo">
                    <span id="spanA" className={selectA ? "corA" : "normalCor"}>
                        a
                    </span>
                    <span id="spanB" className={selectB ? "corB" : "normalCor"}>
                        b
                    </span>
                    <span id="spanC" className={selectC ? "corC" : "normalCor"}>
                        c
                    </span>
                    <div className="triangulo">
                        <div
                            id="linha-vertical"
                            className={selectC ? "corC" : "normalCor"}
                        ></div>
                        <div
                            id="linha-horizontal"
                            className={selectB ? "corB" : "normalCor"}
                        ></div>
                        <div
                            id="linha-diagonal"
                            className={selectA ? "corA" : "normalCor"}
                        ></div>
                    </div>
                </div>
                <div className="bloquinho bloco-conta">
                    <form>
                        <span className={selectA ? "corA" : "normalCor"}>
                            a:
                        </span>
                        <input
                            type="text"
                            onClick={() => {
                                setSelectA(true);
                                setSelectB(false);
                                setSelectC(false);
                            }}
                            className={selectA ? "corA" : "normalCor"}
                            onChange={(event) => {
                                event.target.value != ""
                                    ? setA(event.target.value)
                                    : setA(0);
                            }}
                        />
                        <span className={selectB ? "corB" : "normalCor"}>
                            b:
                        </span>

                        <input
                            type="text"
                            onClick={() => {
                                setSelectA(false);
                                setSelectB(true);
                                setSelectC(false);
                            }}
                            className={selectB ? "corB" : "normalCor"}
                            onChange={(event) => {
                                event.target.value != ""
                                    ? setB(event.target.value)
                                    : setB(0);
                            }}
                        />
                        <span className={selectC ? "corC" : "normalCor"}>
                            c:
                        </span>

                        <input
                            type="text"
                            onClick={() => {
                                setSelectA(false);
                                setSelectB(false);
                                setSelectC(true);
                            }}
                            className={selectC ? "corC" : "normalCor"}
                            onChange={(event) => {
                                event.target.value != ""
                                    ? setC(event.target.value)
                                    : setC(0);
                            }}
                        />
                    </form>
                    <button onClick={handleSubmit}>Calcular</button>
                    <p
                        id="resultado"
                        className={
                            dados.retangulo == true ? "aparece" : "nao-aparece"
                        }
                    >
                        O valor de {dados.valorQFalta} é {dados.resultado}
                    </p>
                    <p
                        id="erro"
                        className={
                            dados.retangulo == false ? "aparece" : "nao-aparece"
                        }
                    >
                        {dados.motivo}
                    </p>
                </div>
            </div>

            <footer className="footer">
                <p>
                    Feito com 💜 por{" "}
                    <a href="https://github.com/mariaseverino">
                        Maria Rita Severino
                    </a>
                </p>
            </footer>
        </div>
    );
}

export default App;
