import { useState } from 'react'
import './App.css'

function App() {

  const [age,setAge] = useState(0)

  function predictAge() {
    setAge(document.getElementById('age').value)
  }

  const handleSubmit = event => {
    event.preventDefault();
  }
  
  return (
    <>
      <h1>Đây là máy dự đoán tuổi của bạn</h1>
      <form className='form' onSubmit={handleSubmit}>  
        <input id='age' className='form--input' type='number' placeholder='Nhập số tuổi của bạn' required></input>
        <button type='submit' onClick={predictAge} className='form--button'>Dự đoán tuổi của bạn</button>
        <h3 className='form--result'>{age?"Số tuổi của bạn là "+age:''}</h3>
      </form>
    </>
  )
}

export default App 
