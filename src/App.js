import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas'

function App() {

  const [linea1, setLinea1] = useState();
  const [linea2, setLinea2] = useState();
  const [imagen, setImagen] = useState();
  const [color, setColor] = useState();

  const setLinea1Function = (valor)=>{
    setLinea1(valor.target.value)
  }

  const setLinea2Function = (valor)=>{
    setLinea2(valor.target.value)
  }

  const setImagenFunction = (valor)=>{
    setImagen(valor.target.value)
  }

  const setTextColor = (valorColor)=>{
    setColor(valorColor.target.value)
  }

  const exportarImagen = ()=>{
    html2canvas(document.querySelector(".memeContainer")).then(canvas => {
      let img = canvas.toDataURL("image/png");
      let link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
  });
  }


  return (
    <div className="App">
      <span>Seleccione el meme: </span>
      <select onChange={setImagenFunction}>
        <option value='fire'>fire</option>
        <option value='futurama'>futurama</option>
        <option value='history'>history</option>
        <option value='matrix'>matrix</option>
        <option value='philosoraptor'>philosoraptor</option>
        <option value='smart'>smart</option>
      </select> <br/>

      <input onChange={setLinea1Function} type='text'/> <br/>
      <input onChange={setLinea2Function} type='text'/> <br/>
      <p>Color: <input onChange={setTextColor} type='color'/></p>

      <div className='memeContainer'>
        <span className='span1' style={{color: color}}>{linea1}</span>

        <img src={`/images/${imagen}.jpg`}/>

        <span className='span2' style={{color: color}}>{linea2}</span>
      </div>
      
      <button onClick={exportarImagen}>Exportar</button>
    </div>
  );
}

export default App;
