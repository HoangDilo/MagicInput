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
  const [numberValue, setNumberValue] = useState('');
  const [numberError, setNumberError] = useState('');

  const [number2Status, setNumber2Status] = useState('default');
  const [number2Value, setNumber2Value] = useState('');
  const [number2Error, setNumber2Error] = useState('');

  const [number3Status, setNumber3Status] = useState('default');
  const [number3Value, setNumber3Value] = useState('');
  const [number3Error, setNumber3Error] = useState('');

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
        setEmailError(<span>Email is not valid</span>)
      }
    } else if (emailStatus !== 'default') {
      setEmailStatus('error');
      setEmailError('Are you dumb? I said email CAN\'T be empty!');
    }
  }, [emailValue])

  //valid email 2
  useEffect(() => {
    if (email2Value) {
      //console.log(email2Value);
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (email2Value.toLocaleLowerCase().match(emailRegex)) {
        setEmail2Status('focus');
        // setEmail2Status('success');
        setEmail2Error('');
      } else {
        setEmail2Status('error');
        setEmail2Error(<span>Email is not valid</span>)
      }
    } else if(email2Status !== 'default'){
      setEmail2Status('focus');
      setEmail2Error('');
    }
  }, [email2Value])

  //validate password 1
  useEffect(() => {
    if (passwordValue) {
      const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,32}$/;
      if (passwordValue.match(passwordRegex)) {
        //console.log(passwordValue);
        setPasswordStatus('focus');
        // setEmailStatus('success');
        setPasswordError('');
      } else {
        setPasswordStatus('error');
        setPasswordError(<span>Password must be at least 8 Characters and must contain at least a Capital Letter, a Number and a Special Character.</span>)
      }
    } else if (passwordStatus !== 'default') {
      setPasswordStatus('error');
      setPasswordError('Password can not be empty');
    }
  }, [passwordValue])

  //validate number 1
  useEffect(() => {
    //console.log(numberValue);
    if (numberValue) {
      const numberRegex = /^[-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/;
      if (numberValue.match(numberRegex)) {
        setNumberStatus('focus')
        setNumberError('');
      } else {
        setNumberStatus('error');
        setNumberError(<span style={{ color: 'red' }}>Number must be number!</span>)
      }
    } else if (numberStatus !== 'default') {
      setNumberStatus('error');
      setNumberError('Number can not be empty');
    }
  }, [numberValue])

  //validate number 3
  useEffect(() => {
    if (number3Value) {
      const number3Regex = /^[-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/;
      if (number3Value.match(number3Regex)) {
        setNumber3Status('focus')
        setNumber3Error('');
      } else {
        setNumber3Status('error');
        setNumber3Error(<span style={{ color: 'red' }}>Number must be number!</span>)
      }
    } else if(number3Status !== 'default'){
      setNumber3Status('focus')
      setNumber3Error('');
    }
  }, [number3Value])

  return (
    <div className='container'>
      <div className='inputs'>
        <MagicInputReal
          inputStatus={emailStatus}
          inputValue={emailValue}
          inputType="text"

          label="Email"
          placeholder="Enter your email"
          isRequired={true}
          hint={'Email should have this format: \'abc@xyz.ijk\''}
          errorMessage={emailError}
          emptyMessage="Email can not be empty"
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
          emptyMessage="Password can be empty"

          icon='lock'
          focusTheme='#FF20FF'
          funtionalButton={(updateUp, updateDown, inputStatus, callBack) => <HideShow setInputTypeClone={callBack} inputStatus={inputStatus} />}

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
          emptyMessage="Number can not be empty"

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
      <div>
        <MagicInputReal
          inputStatus={number3Status}
          inputValue={number3Value}
          inputType="number"

          label="Number 3"
          placeholder="0"
          isRequired={false}
          errorMessage={number3Error}
          focusTheme='yellow'
          funtionalButton={(updateUp, updateDown, inputStatus, callBack) => <UpDown updateUp={updateUp} updateDown={updateDown} inputStatus={inputStatus} />}

          setInputValue={setNumber3Value}
          setInputStatus={setNumber3Status}
          setInputError={setNumber3Error}
        />
      </div>
    </div>
  )
}

export default App
