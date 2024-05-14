import { useState } from 'react'
import './App.css'

function App() {

	const [color, setColour] = useState("black");

	const colorList: string[] = ["black", "red", "blue", "green", "yellowgreen", "pink", "lightpink"];

	const changeColor = (color: string) => {
		setColour(color);
	}

	return (
		<>
			<div className='color-container' style={{backgroundColor: color}}>
				<div className='button-container'>
					{colorList.map(color => (
						<button onClick={() => changeColor(color)} style={{backgroundColor: color}}>{color}</button>
					))}
				</div>
			</div>
		</>
	)
}

export default App
