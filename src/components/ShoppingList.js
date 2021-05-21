import { useState } from 'react'
import { carList} from '../datas/carList'
import CarItem from './CarItem'
import Categories from './Categories'
import '../styles/ShoppingList.css'
import mercedes from '../assets/mercedes.jpg'
import Research from './Research'

function ShoppingList({ cart, updateCart }) {
	const [activeCategory, setActiveCategory] = useState('')
	const [activeSearch, setActiveSearch] = useState('')
		var i = 0;
	const categories = carList.reduce(
		(acc, elem) =>
			acc.includes(elem.manufacturer) ? acc : acc.concat(elem.manufacturer),
		[]
	)


	function addToCart(identification, manufacturer, model, into_circulation_date, last_mileage, status) {
		const currentCarAdded = cart.find((car) => car.identification === identification)
		if (currentCarAdded) {
			// const cartFilteredCurrentcar = cart.filter(
			// 	(car) => car.identification !== identification
				
			// )
			updateCart([
				{ identification, manufacturer, model, into_circulation_date, last_mileage, status}
			])
		} else {
			updateCart([
				 { identification, manufacturer, model, into_circulation_date, last_mileage, status}])
			
		}
	}

	return (
		<div className='lmj-shopping-list'>
			<Research
				activeSearch={activeSearch}
				setActiveSearch={setActiveSearch}
			/>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>
			<ul className='lmj-car-list'>
			
				{carList.map(({ identification, manufacturer, model, into_circulation_date, last_mileage, status }) =>
					!activeCategory || activeCategory === manufacturer? (
						<div key={identification}>
							
							<CarItem
								cover={mercedes}
								status={status}
								identification={identification}
								manufacturer={manufacturer}
							
							/>
							<button onClick={() => addToCart(identification, manufacturer, model, into_circulation_date, last_mileage, status)}>Details</button>
						</div>
					) : null
				)}
			</ul>
		</div>
	)
}


export default ShoppingList