import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(5);
  const [symbol, setSymbol] = useState(false);
  const [number, setNumber] = useState(false);

  useEffect(() => {
    generatePassword();
  }, [length, number, symbol]);

  function includeNumber(e) {
    setNumber(e.target.checked);
  }

  function includeSymbol(e) {
    setSymbol(e.target.checked);
  }

  function copyText() {
    navigator.clipboard.writeText(password)
  }




  function generatePassword() {
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (number) {
      str += '1234567890';
    }
    if (symbol) {
      str += '~!@#$%^&*()_+/*-+?><:"}{\\|[]'; // Corrected the escape character before the backslash
    }
    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      let randomNumber = Math.floor(Math.random() * str.length);
      let char = str.charAt(randomNumber);
      generatedPassword += char;
    }
    setPassword(generatedPassword);
  }
  

  return (

    <>
   <center >
                <h1 className=' font-serif text-5xl mt-[6%] bg-[#e6ebef] text-[#175ddc] p-[4%]
   w-[80%]  rounded-[15px]'>{password}</h1>
                </center>

         <center>             
     <button onClick={ copyText} className='bg-[#020f66] text-white mt-5 p-[1%] rounded-[15px]'><FontAwesomeIcon className='text-[gray] rounded-2xl' icon={faCopy }  />&nbsp;&nbsp; Copy to Clipboard</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <button> <FontAwesomeIcon className='text-[gray]' icon={faCopy }  />Copy to Clipboard</button>
     </center>

   

          

      <label htmlFor="length">{length}</label>
      <input type="range" id="length" min={1} max={30} onChange={(e) => setLength(e.target.value)} value={length} />

      <div>
        <label htmlFor="number">Number</label>
        <input type="checkbox" id="number" onChange={includeNumber} checked={number} />
      </div>
      <div>
        <label htmlFor="symbol">Symbol</label>
        <input type="checkbox" id="symbol" onChange={includeSymbol} checked={symbol} />
      </div>
    </>
  );
}

export default App;
