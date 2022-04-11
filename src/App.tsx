import React from 'react';
import "./joke.css";

function App() {
    return (
        <div>
            <h1 className={"gradient-text"}>Асечка - самая лучшая девочка на свете!!!!!!!</h1>
            <h1 className={"gradient-text"}>Я очень очень в нее влюблен!!!!</h1>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <video style={{ height: 500, width: 250}} controls>
                    <source src={require("./v.mp4")} type="video/mp4"/>
                </video>
            </div>
            <h1 className={"gradient-text"}>Анекдот! Иногда я использую слова, значений которых не знаю, чтобы люди видели, какой я эрегированный.</h1>
        </div>
    );
}

export default App;
