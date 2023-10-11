import './UpDown.css'

function UpDown({ updateUp, updateDown }) {
    const handleUp = () => {
        updateUp();
    }
    const handleDown = () => {
        updateDown();
    }
    return (
        <div className="up-down-container">
            <div className="up" onClick={handleUp}>
                <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 0.75L11.1962 9.75H0.803848L6 0.75Z" fill="#83898C" />
                </svg>
            </div>
            <div className="down" onClick={handleDown}>
                <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9.25L0.803849 0.249999L11.1962 0.25L6 9.25Z" fill="#83898C" />
                </svg>
            </div>
        </div>
    )
}

export default UpDown