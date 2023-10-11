import './MagicInputReal.css'
import { useEffect, useRef, useState } from "react"
import Tick from './SVGComponents/Tick';
import UpDown from './Buttons/UpDown';
import HideShow from './Buttons/HideShow';

function MagicInputReal({ inputStatus, inputValue, inputType, label, isRequired, hint, errorMessage, icon, focusTheme, setInputValue, setInputType, setInputStatus }) {
    const [theme, setTheme] = useState();
    const inputRef = useRef();
    const [inputTypeClone, setInputTypeClone] = useState(inputType);

    useEffect(() => {
        switch (inputStatus) {
            case 'default':
                setTheme('#CFD3D4');
                break;
            case 'focus':
                setTheme(focusTheme);
                break;
            case 'filled':
                setTheme('#5E6366');
                break;
            case 'error':
                setTheme('#F57E77');
                break;
            case 'success':
                setTheme('#32936F');
                break;
            case 'disabled':
                setTheme('#DDE2E5');
                break;
            default:
                break;
        }
    }, [inputStatus])

    const handleInput = () => {
        setInputValue(inputRef.current.value)
    }
    const handleFocus = () => {
        setInputStatus('focus')
    }
    const handleBlur = () => {
        if (inputValue) {
            setInputStatus('filled')
        } else {
            setInputStatus('default')
        }
    }
    const configurePaddingRight = () => {
        if(inputType === 'password' || inputType === 'number') {
            return '88px'
        }
    }
    const updateUp = () => {
        inputRef.current.value++;
    }
    const updateDown = () => {
        inputRef.current.value--;
    }
    return (
        <div className="input-container">
            <div className='label-input'>
                {label && <label htmlFor={`input-${label}`} style={{ color: theme }}>
                    {label}
                    {isRequired && <span className='required'>*</span>}
                </label>}
                <div className='smaller-input-container'>
                    <div className={`icon ${icon}`}></div>
                    <input type={inputTypeClone}
                        id={`input-${label}`}
                        style={
                            { 
                                border: `1px solid ${theme}`, 
                                paddingLeft: icon ? '56px' : '',
                                paddingRight: configurePaddingRight()
                            }
                        }
                        ref={inputRef}
                        onInput={handleInput}
                        onFocus={handleFocus}
                        onBlur={handleBlur} />
                    <div className='right-icon'>
                        {
                            inputStatus === 'success' && (
                                <div className='check'>
                                    <Tick />
                                </div>
                            )
                        }
                        {
                            (inputType === 'number') && <UpDown updateUp={updateUp} updateDown={updateDown} />
                        }
                        {
                            (inputType === 'password') && <HideShow setInputTypeClone={setInputTypeClone}/>
                        }
                    </div>
                </div>
            </div>
            <div className='message'>
                {errorMessage ? errorMessage : hint}
            </div>
        </div>
    )
}

export default MagicInputReal