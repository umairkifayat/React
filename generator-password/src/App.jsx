import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faSync } from '@fortawesome/free-solid-svg-icons';

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

  const RefreshButton = () => {
    const handleRefresh = () => {
      window.location.reload();
    };

  }
  function generatePassword() {
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (number) {
      str += '1234567890';
    }
    if (symbol) {
      str += '~!@#$%^&*()_+/*-+?><:"}{\\|[]';
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
    <h1 className='mt-3 text-[#020f66] p-5 text-[50px] font-mono'>Password Generator</h1>
   <center >
                <h1 className=' font-serif text-5xl mt-[3%] bg-[#e6ebef] text-[#175ddc] p-[4%]
   w-[80%]  rounded-[15px] whitespace-pre'>{password}</h1>
                </center>

         <center>             
     <button onClick={ copyText} className='bg-[#020f66] text-white mt-5 p-[1%] rounded-[15px] w-[30%]'><FontAwesomeIcon className='text-[white] rounded-2xl' icon={faCopy }  />&nbsp;&nbsp; Copy to Clipboard</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <button onClick={generatePassword} className='bg-[#175ddc] hover:bg-[#020f66]  text-white mt-5 p-[1%] rounded-[15px]  w-[30%]' ><FontAwesomeIcon icon={faSync} className='text-[white] rounded-2xl' />&nbsp;Generate</button>
     </center>

   
<center >
       <div className='flex justify-evenly bg-[#e6ebef] p-[4%] rounded-[15px] w-[80%] mt-5' >
        <div >
                  <label htmlFor="number" >Number</label>
        <input type="checkbox" id="number" onChange={includeNumber} checked={number} /><br />
  
        <label htmlFor="symbol">Symbol</label>
        <input type="checkbox" id="symbol" onChange={includeSymbol} checked={symbol} /><br />
        </div>

       <div>

       <label htmlFor="length">Characters:{length}</label><br />
      
 
      <input type="range" id="length"  min={1} max={30} onChange={(e) => setLength(e.target.value)} value={length} />
      </div>
      </div> 
      </center>
     
    </>
  );
}

export default App;
