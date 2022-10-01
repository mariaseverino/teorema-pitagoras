import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);
    const [resultado, setreRultado] = useState(null);

    const [selectA, setSelectA] = useState(false);
    const [selectB, setSelectB] = useState(false);
    const [selectC, setSelectC] = useState(false);

    function handleSubmit() {
        // if (a === 0) {
        //     alert("a");

        //     setA(0);
        // }
        // if (b === 0) {
        //     alert("b");
        //     setB(0);
        // }
        // if (c === 0) {
        //     alert("c");

        //     setC(0);
        // }
        let url = `https://pitagoras--maria-ritarita7.repl.co/calcula?a=${a}&b=${b}&c=${c}`;

        console.log(url);
        axios
            .get(url)
            .then(({ data }) => {
                setreRultado(data.resultado);
            })
            .catch((error) => console.log(error));
    }

    return (
        <div className="blocao">
            <div className="bloco">
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
                            // className="corA"
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
                            resultado != null ? "aparece" : "nao-aparece"
                        }
                    >
                        O resultado é {resultado}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default App;
