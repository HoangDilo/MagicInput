import { useEffect, useState } from 'react'
import './App.css'
import MagicInputReal from './MagicInputReal/MagicInputReal';
import UpDown from './Buttons/UpDown';
import HideShow from './Buttons/HideShow';

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
  const [numberValue, setNumberValue] = useState('0');
  const [numberError, setNumberError] = useState('');

  const [number2Status, setNumber2Status] = useState('default');
  const [number2Value, setNumber2Value] = useState('0');
  const [number2Error, setNumber2Error] = useState('');

  //valid email 1
  useEffect(() => {
    if (emailValue) {
      //console.log('abc');
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (emailValue.toLocaleLowerCase().match(emailRegex)) {
        setEmailStatus('focus');
        // setEmailStatus('success');
        setEmailError('');
      } else {
        setEmailStatus('error');
        setEmailError(<span style={{ color: 'red' }}>Email is not valid</span>)
      }
    } else if (emailStatus === 'error'){
      setEmailStatus('focus');
      setEmailError('');
    }
  }, [emailValue])

  //valid email 2
  useEffect(() => {
    if (email2Value) {
      console.log(email2Value);
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (email2Value.toLocaleLowerCase().match(emailRegex)) {
        setEmail2Status('focus');
        // setEmail2Status('success');
        setEmail2Error('');
      } else {
        setEmail2Status('error');
        setEmail2Error(<span style={{ color: 'red' }}>Email is not valid</span>)
      }
    } else if(email2Status === 'error'){
      setEmail2Status('focus');
      setEmail2Error('');
    }
  }, [email2Value])

  //validate password 1
  useEffect(() => {
    if (passwordValue) {
      const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,32}$/;
      if (passwordValue.match(passwordRegex)) {
        console.log(passwordValue);
        setPasswordStatus('focus');
        // setEmailStatus('success');
        setPasswordError('');
      } else {
        setPasswordStatus('error');
        setPasswordError(<span style={{ color: 'red' }}>Password must be at least 8 Characters and must contain at least a Capital Letter, a Number and a Special Character.</span>)
      }
    } else if (passwordStatus === 'error'){
      setPasswordStatus('focus');
      setPasswordError('');
    }
  }, [passwordValue])

  //validate number 1
  useEffect(() => {
    console.log(numberValue);
    if (numberValue) {
      const numberRegex = /^-?\d+(\.\d+)?$/;
      if (numberValue.match(numberRegex)) {
        console.log('match');
        setNumberStatus('filled')
        //setNumberStatus('focus');
        // setEmailStatus('success');
        setNumberError('');
      } else {
        console.log('not match');
        setNumberStatus('error');
        setNumberError(<span style={{ color: 'red' }}>Number must be number!</span>)
      }
    } else {
      console.log('k co input');
      setNumberStatus('focus');
      setNumberError('');
    }
  }, [numberValue])

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
        emptyMessage={<span style={{color: 'red'}}>Email can not be empty</span>}
        icon='heart'
        focusTheme='#5570F1'

        setInputValue={setEmailValue}
        setInputStatus={setEmailStatus}
        setInputError={setEmailError} />

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
        setInputError={setEmail2Error} />

      <MagicInputReal
        inputStatus={passwordStatus}
        inputValue={passwordValue}
        inputType="password"

        label="Password"
        placeholder="Enter your password"
        isRequired={true}
        hint={'Make sure your password is strong'}
        errorMessage={passwordError}
        icon='lock'
        focusTheme='#FF20FF'
        funtionalButton={( updateUp, updateDown, inputStatus, callBack ) => <HideShow setInputTypeClone={callBack} inputStatus={inputStatus} />}

        setInputValue={setPasswordValue}
        setInputStatus={setPasswordStatus}
        setInputError={setPasswordError} />

      <MagicInputReal
        inputStatus='disabled'
        inputValue=''
        inputType="password"

        label="Password-2"
        placeholder="Enter your password"
        isRequired={false}
        icon='lock'
        focusTheme='#FF20FF' />

      <MagicInputReal
        inputStatus={numberStatus}
        inputValue={numberValue}
        inputType="number"

        label="Number"
        placeholder="0"
        isRequired={true}
        errorMessage={numberError}
        icon='lock'
        focusTheme='blue'
        funtionalButton={(updateUp, updateDown, inputStatus, callBack) => <UpDown updateUp={updateUp} updateDown={updateDown} inputStatus={inputStatus} />}

        setInputValue={setNumberValue}
        setInputStatus={setNumberStatus}
        setInputError={setNumberError} />

      <MagicInputReal
        inputStatus="disabled"
        inputValue={number2Value}
        inputType="number"

        label="Number 2"
        placeholder="0"
        isRequired={false}
        errorMessage={number2Error}
        icon='heart'
        focusTheme='gray'

        setInputValue={setNumber2Value}
        setInputStatus={setNumber2Status}
        setInputError={setNumber2Error} />
    </div>
  )
}

export default App
