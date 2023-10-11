import { useState } from 'react'
import './App.css'
import MagicInputReal from './MagicInputReal/MAgicInputReal';

function App() {
  const [inputStatus, setInputStatus] = useState('default');

  const [inputValue, setInputValue] = useState('');
  const [inputType, setInputType] = useState('password');
  let hint = 'Just type in!';
  let errorMessage = 'password fake';
  /*
  validate the input value here
  */

  return (
    <div className='inputs'>
      <MagicInputReal
        inputStatus='success'
        inputValue={inputValue}
        inputType={inputType}

        label="Hello world"
        isRequired={true}
        hint={hint}
        errorMessage={errorMessage}
        icon='lock'
        focusTheme='#5570F1'
        
        setInputValue={setInputValue}
        setInputType={setInputType}
        setInputStatus={setInputStatus} />
    </div>
  )
}

export default App
