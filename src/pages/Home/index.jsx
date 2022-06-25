import "./styles.css";
import { Card } from "../../components/Card";
import React, { useState } from "react";

export function Home() {
  const [studantName, setStudantName] = useState("");
  const [studants, setStudants] = useState([]);
  
  function handleAddStudant(){
    const newStudant = {
      name: studantName,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };

    setStudants(prevState => [...prevState, newStudant])
  }

  return (
    <div className="container">
      <h1>Lista de Presença</h1>
      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={(e) => setStudantName(e.target.value)}
      />
      <button type="button" onClick={handleAddStudant}>
        Adicionar
      </button>

      {
        studants.map(studant => <Card name={studant.name} time={studant.time} />)
      }


    </div>
  )
}
