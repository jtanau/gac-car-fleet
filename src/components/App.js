import { useState, useEffect } from 'react'
import Banner from './Banner'
import logo from '../assets/logo.png'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'
import { readString } from 'react-papaparse'
import {cars} from '../datas/data'
import Cart from './Cart'

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
			<Banner>
				<img src={logo} alt='logo-Gac-car-fleet' className='lmj-logo' />
				<h1 className='lmj-title'>Gac Car Fleet</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			
		</div>
	)
}


export default App