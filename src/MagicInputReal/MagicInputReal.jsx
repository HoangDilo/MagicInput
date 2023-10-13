import './MagicInputReal.css'
import { useEffect, useRef, useState } from "react"


function MagicInputReal({ inputStatus, inputValue, inputType, label, placeholder, isRequired, hint, errorMessage, emptyMessage, icon, focusTheme, funtionalButton, setInputValue, setInputStatus, setInputError }) {
    const [theme, setTheme] = useState();
    const [internalValue, setInternalValue] = useState(inputValue);
    const [internalType, setInternalType] = useState(inputType);
    const inputRef = useRef();

    useEffect(() => {
        if(inputType === 'number') {
            setInternalType('text');
            inputRef.current.addEventListener('keydown', (event) => {
                const isNumber = /[0-9eE\.\-]/.test(event.key);
                if(!isNumber) {
                    event.preventDefault();
                }
            })
        }
    }, [inputType])

    //gan lai input value tu parent khi co inputValue thay doi
    useEffect(() => {
        setInternalValue(inputValue);
    }, [inputValue])

    useEffect(() => {
        switch (inputStatus) {
            case 'default':
                //console.log('default');
                setTheme('#CFD3D4');
                break;
            case 'focus':
                //console.log('focus');
                setTheme(focusTheme);
                break;
            case 'filled':
                //console.log('filled');
                setTheme('#5E6366');
                break;
            case 'error':
                //console.log('error');
                setTheme('#F57E77');
                break;
            case 'disabled':
                setTheme('#DDE2E5');
                break;
            default:
                break;
        }
    }, [inputStatus])

    //set lai state inputValue cua parent
    const handleInput = (event) => {
        setInputValue(event.target.value);
    }
    const handleFocus = () => {
        if (!errorMessage) {
            setInputStatus('focus');
        }
    }
    const handleBlur = () => {
        if (inputValue) {
            if (errorMessage) {
                setInputStatus('error');
            } else {
                setInputStatus('filled')
            }
        } else {
            if (isRequired && label) {
                setInputStatus('error');
                setInputError(emptyMessage);
            } else {
                if (!errorMessage) {
                    setInputStatus('default');
                }
            }
        }
    }
    const configurePaddingRight = () => {
        funtionalButton && '88px'
    }
    const updateUp = () => {
        inputRef.current.value++;
        inputRef.current.focus();
        setInputValue(inputRef.current.value);
    }
    const updateDown = () => {
        inputRef.current.value--;
        inputRef.current.focus();
        setInputValue(inputRef.current.value);
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
                    <input type={internalType}
                        id={`input-${label}`}
                        style={{
                            border: `1px solid ${theme}`,
                            paddingLeft: icon ? '56px' : '',
                            paddingRight: configurePaddingRight()
                        }}
                        placeholder={placeholder}
                        value={internalValue}
                        disabled={inputStatus === 'disabled'}
                        ref={inputRef}
                        onChange={(event) => handleInput(event)}
                        onFocus={handleFocus}
                        onBlur={handleBlur} />
                    <div className='right-icon'>
                        {funtionalButton && funtionalButton(updateUp, updateDown, inputStatus, (type) => setInternalType(type))}
                    </div>
                </div>
            </div>
            <div className='message' style={{color: errorMessage && 'red'}}>
                {errorMessage ? errorMessage : hint}
            </div>
        </div>
    )
}

export default MagicInputReal