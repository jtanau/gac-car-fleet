import { useState, useEffect } from 'react'
import Banner from './Banner'
import '../styles/Layout.css'
import { readString } from 'react-papaparse'
import {cars} from '../datas/data'
import Podium from './Podium'

function App() {

	const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

//read data.js
const resu = readString(cars);
console.log(resu.data.length);

	return (
		<div>
			<Banner />				
			<div className='lmj-layout-inner'>
				<Podium />
			</div>
			
		</div>
	)
}


export default App