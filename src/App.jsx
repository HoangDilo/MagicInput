import { useEffect, useState } from 'react'
import './App.css'
import MagicInputReal from './MagicInputReal/MagicInputReal';

function App() {
  const [emailStatus, setEmailStatus] = useState('default');
  const [emailValue, setEmailValue] = useState('');
  const [emailError, setEmailError] = useState('');

  const [email2Status, setEmail2Status] = useState('default');
  const [email2Value, setEmail2Value] = useState('');
  const [email2Error, setEmail2Error] = useState('');

  const [passwordStatus, setPasswordStatus] = useState('default');
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [numberStatus, setNumberStatus] = useState('default');
  const [numberValue, setNumberValue] = useState('');
  const [numberError, setNumberError] = useState('');

  useEffect(() => {
    if (emailValue) {
      console.log('abc');
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (emailValue.toLocaleLowerCase().match(emailRegex)) {
        setEmailStatus('success');
        setEmailError('');
      } else {
        setEmailStatus('error');
        setEmailError(<span style={{ color: 'red' }}>Email is not valid</span>)
      }
    }
  }, [emailValue])

  useEffect(() => {
    if (email2Value) {
      console.log('abc');
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (email2Value.toLocaleLowerCase().match(emailRegex)) {
        setEmail2Status('success');
        setEmail2Error('');
      } else {
        setEmail2Status('error');
        setEmail2Error(<span style={{ color: 'red' }}>Email is not valid</span>)
      }
    }
  }, [email2Value])


  return (
    <div className='inputs'>
      This is a fake form:
      <MagicInputReal
        inputStatus={emailStatus}
        inputValue={emailValue}
        inputType="text"

        label="Email"
        placeholder="Enter your email"
        isRequired={true}
        hint={'Email should have this format: \'abc@xyz.ijk\''}
        errorMessage={emailError}
        icon='heart'
        focusTheme='#5570F1'

        setInputValue={setEmailValue}
        setInputStatus={setEmailStatus} 
        setInputError={setEmailError}/>

      <MagicInputReal
        inputStatus={email2Status}
        inputValue={email2Value}
        inputType="text"

        placeholder="Enter your email"
        isRequired={true}
        errorMessage={email2Error}
        icon='heart'
        focusTheme='#5570F1'

        setInputValue={setEmail2Value}
        setInputStatus={setEmail2Status} 
        setInputError={setEmail2Error}/>

      <MagicInputReal
        inputStatus={passwordStatus}
        inputValue={passwordValue}
        inputType="password"

        label="Password"
        placeholder="Enter your password"
        isRequired={true}
        hint={'Email should have this format: \'abc@xyz.ijk\''}
        errorMessage={passwordError}
        icon='lock'
        focusTheme='#FF20FF'

        setInputValue={setPasswordValue}
        setInputStatus={setPasswordStatus} 
        setInputError={setPasswordError}/>

      <MagicInputReal
        inputStatus='disabled'
        inputValue=''
        inputType="password"

        label="Password-2"
        placeholder="Enter your password"
        isRequired={false}
        hint={'Email should have this format: \'abc@xyz.ijk\''}
        icon='lock'
        focusTheme='#FF20FF' />

      <MagicInputReal
        inputStatus={numberStatus}
        inputValue={numberValue}
        inputType="number"

        label="Number"
        placeholder="0"
        isRequired={true}
        hint={'Email should have this format: \'abc@xyz.ijk\''}
        errorMessage={numberError}
        icon='lock'
        focusTheme='red'

        setInputValue={setNumberValue}
        setInputStatus={setNumberStatus} 
        setInputError={setNumberError}/>
    </div>
  )
}

export default App
