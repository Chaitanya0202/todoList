import React from 'react'

function FetchApi() {

    const city=()=>{
        let a=document.getElementsByClassName('cityname')
        document.write(a.innerHTML);
    }
  return (
    <div>
    <h2>Wearher Apication</h2>
    <input type='text' className='cityname'></input>
    <p className='ci'>this is this</p>
    <button onClick={()=>{city()}}>Click</button>
    
    </div>
  )
}

export default FetchApi