import { useState, useEffect } from 'react';
import Axios from "axios";
import './App.css';

function App() {
	const [boredActivity, setBoredActivity] = useState(null);

	function fetchBoredActivity(){
		Axios.get('https://apis.scrimba.com/bored/api/activity')
			.then(response => {
				setBoredActivity(response.data.activity)
			})
	}

	useEffect(() => {
		fetchBoredActivity()
	}, [boredActivity])
	
	return(
		<div className='App'>
			<h1>BoredBot</h1>
			<button className='button' onClick={fetchBoredActivity}>Find something to do</button>
			<p className='activity'>{boredActivity}</p>
		</div>
	)
}

export default App
