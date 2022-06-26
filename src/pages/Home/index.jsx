import "./styles.css";
import { Card } from "../../components/Card";
import React, { useState, useEffect } from "react";

export function Home() {
  const [studantName, setStudantName] = useState("");
  const [studants, setStudants] = useState([]);
  const [user, setUser] = useState({name: '', avatar: ''})

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

  useEffect(() => {
    //corpo do useEffect

    // Usando async:

    async function fetchData(){
      const response = await fetch('https://api.github.com/users/MaiconRSantos')
      const data = await response.json();
      

      setUser({
        name: data.name,
        avatar: data.avatar_url,
      })

   
    
    }

    fetchData()

    // fetch('https://api.github.com/users/MaiconRSantos')
    // .then(response => response.json())
    // .then(data => {
    //   setUser({
    //     name: data.name,
    //     avatar: data.avatar_url
    //   })
    // })


  }, [])

  return (

    <div className="container">

    <header>
      <h1>Lista de Presença</h1>
      <div>
      <strong>{user.name}</strong>
      <img src={user.avatar} alt="Foto de perfil" />
      </div>
    </header>

      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={(e) => setStudantName(e.target.value)}/>
      <button type="button" onClick={handleAddStudant}>
        Adicionar
      </button>

      {
        studants.map(studant => <Card key={studant.time} name={studant.name} time={studant.time} />)
      }

    </div>
  )
}
