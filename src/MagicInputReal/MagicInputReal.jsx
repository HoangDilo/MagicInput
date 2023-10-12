import './MagicInputReal.css'
import { useEffect, useRef, useState } from "react"


function MagicInputReal({ inputStatus, inputValue, inputType, label, placeholder, isRequired, hint, errorMessage, emptyMessage, icon, focusTheme, funtionalButton, setInputValue, setInputStatus, setInputError }) {
    const [theme, setTheme] = useState();
    const inputRef = useRef();

    useEffect(() => {
        switch (inputStatus) {
            case 'default':
                console.log('default');
                setTheme('#CFD3D4');
                break;
            case 'focus':
                console.log('focus');
                setTheme(focusTheme);
                break;
            case 'filled':
                console.log('filled');
                setTheme('#5E6366');
                break;
            case 'error':
                console.log('error');
                setTheme('#F57E77');
                break;
            case 'disabled':
                setTheme('#DDE2E5');
                break;
            default:
                break;
        }
    }, [inputStatus])

    const handleInput = () => {
        setInputValue(inputRef.current.value);
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
        setInputValue(inputRef.current.value);
    }
    const updateDown = () => {
        inputRef.current.value--;
        setInputValue(inputRef.current.value);
    }
    const setInputTypeClone = (type) => { 
        inputRef.current.type = type; 
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
                    <input type={inputType}
                        id={`input-${label}`}
                        style={{
                            border: `1px solid ${theme}`,
                            paddingLeft: icon ? '56px' : '',
                            paddingRight: configurePaddingRight()
                        }}
                        placeholder={placeholder}
                        disabled={inputStatus === 'disabled'}
                        ref={inputRef}
                        onInput={handleInput}
                        onFocus={handleFocus}
                        onBlur={handleBlur} />
                    <div className='right-icon'>
                        {funtionalButton && funtionalButton(updateUp, updateDown, inputStatus, (type) => setInputTypeClone(type))}
                        {/* {(inputType === 'number') && <UpDown updateUp={updateUp} updateDown={updateDown} inputStatus={inputStatus} />}
                        {(inputType === 'password') && <HideShow setInputTypeClone={(type) => setInputTypeClone(type)} inputStatus={inputStatus} />} */}
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