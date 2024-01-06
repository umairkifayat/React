import { useEffect, useState } from 'react';

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(5);
  const [symbol, setSymbol] = useState(true);
  const [number, setNumber] = useState(true);

  useEffect(() => {
    generatePassword();
  }, [length, number, symbol]);

  function includeNumber(e) {
    setNumber(e.target.checked);
  }

  function includeSymbol(e) {
    setSymbol(e.target.checked);
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
      <h1>{password}</h1>
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
