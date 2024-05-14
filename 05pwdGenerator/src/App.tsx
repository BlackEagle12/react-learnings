import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {

    const [passwd, setPasswd] = useState("");
    const [length, setLength] = useState(9)
    const [useChar, setUseChar] = useState(true)
    const [useNum, setUseNum] = useState(true)
    const [isCopied, setIsCopied] = useState(false)

    let timeOut: number | null = null;

    const generatePasswd = useCallback(() => {
        
        let pass = "";

        let charList = "ABCDEFGHIJAKMNOPQRSTUVWXYZabcdefghijklmanoprstuvwxyz";
        if(useChar)
            charList += "!@#$%^&*()_+{}:";'<>?/' 
        if(useNum)
            charList += "1234567890"

        
        for (let index = 0; index < length; index++) {
            const element = charList.charAt(Math.random() * charList.length + 1);
            pass += element;
        }

        setPasswd(pass)
        setIsCopied(false)
        if(timeOut) clearTimeout(timeOut)
        
    },[length, useChar, useNum, setPasswd, setIsCopied])

    useEffect(() => {
        generatePasswd()
    }, [length, useChar, useNum])

    const copyPasswdToClipBoard = () => {
        navigator.clipboard.writeText(passwd)
        setIsCopied(true)
        timeOut = setTimeout(() => {
            setIsCopied(false)
        }, 5000)
    }
    return (
        <>
            <div className="passwd-generator-container">
                <div className="passwd-generator">
                    <h1>Password Generator</h1>
                    <div className="passwd">
                        <input 
                            type='text' 
                            className='passwd-text'
                            value={passwd}
                            readOnly
                        />
                        <button className='copy-button' onClick={copyPasswdToClipBoard} style={{backgroundColor: isCopied ? 'gray' : 'greenyellow', color: isCopied ? 'white' : 'black' }}> { isCopied ? 'Copied' : 'copy' } </button>
                    </div>
                    <div className="paramList">
                        <div className='param'>
                            <input type='range' min={5} max={99} value={length} onChange={(e) => setLength(Number(e.target.value))}/>({length})
                        </div>
                        <div className='param'>
                            <input type='checkbox' checked={useChar} onChange={(e) => setUseChar(Boolean(e.target.checked))} /> character
                        </div>
                        <div className='param'>
                            <input type='checkbox' checked={useNum} onChange={(e) => setUseNum(Boolean(e.target.checked))} /> number
                        </div>
                    </div>
                    <button className='passwd-generate-btn' onClick={generatePasswd}> Generate </button>
                </div>

            </div>
        </>
    )
}

export default App
