import { useState } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true)

	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => {
					updateCart([])
					setIsOpen(false)}}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Details</h2>
					<ul>
						{cart.map(({ identification, manufacturer, model, into_circulation_date, last_mileage, status }, index) => (
							<div key={`${identification}-${index}`}>
								<p>Marque : {manufacturer}</p>
								<p>Matricule : {identification}</p>
								<p>Modele : {model}</p>
								<p>Date de Mise en circulation : {into_circulation_date}</p>
								<p>Dernier kilometrage : {last_mileage}</p>
								<p>Status : {status}</p>
							</div>
						))}
					</ul>
					
					
				</div>
			) : (
				<div>Cliquez sur Details pour voir plus d'informations</div>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Voir les Details
			</button>
		</div>
	)
}

export default Cart