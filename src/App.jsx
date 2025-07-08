
import { useState } from 'react'
import  './App.css'

function App() {
const [coin,setCoin]=useState(0);
let [power,setPower]=useState(6500);
let [earn,setEarn]=useState(1)
let [levil,setLevil]=useState(1)
function handleClick(){
  if(power==0){
    return
  }else{
    changeLevil()
  setCoin(coin+ earn)
  setPower(power- earn)
  }

}
function changeLevil(){
  if(coin==20){
    setLevil(levil+1);
    setEarn(earn+1);
  }else if (coin>60 && levil==2){
    setLevil(levil+1);
    setEarn(earn+1);
  }
}


  return (
    <div className='bobo container'>
      <header>
        <div className="container">
        <h2>Hamster Kombat</h2>
          <div className="ota">
            <div className="card">
              <h4>Earn per tap</h4>
              <p><img src="1.png" alt="dfv" /> +{earn}</p>
            </div>
            <div className="card">
              <h4>Levil</h4>
              <p><img src="1.png" alt="dfv" />+{levil}</p>
            </div>
            <div className="card">
              <h4>Earn per tap</h4>
              <p><img src="1.png" alt="dfv" />+12</p>
            </div>
          </div>
          <h1><img src="1.png" alt="sdv" />{coin}</h1>

          <div className="la">
            <button className='hamistor'><img src="2.png" alt="sdfv"  onClick={()=> handleClick()}/></button>
            
          </div>
          <div className="ka">
         <h3><img src="3.png" alt="df" />{power}/ 6500</h3>
         <h5>Boost</h5>
          </div>
          <div className="ota2">
            <div className="card2">
              <img src="4.png" alt="sde" />
              <p>Exchange</p>
            </div>
            <div className="card2">
              <img src="4.png" alt="sde" />
              <p>Exchange</p>
            </div>
            <div className="card2">
              <img src="4.png" alt="sde" />
              <p>Exchange</p>
            </div>
            <div className="card2">
              <img src="4.png" alt="sde" />
              <p>Exchange</p>
            </div>
            <div className="card2">
              <img src="4.png" alt="sde" />
              <p>Exchange</p>
            </div>
          </div>
        </div>
      </header>







    </div>
  )
}

export default App
