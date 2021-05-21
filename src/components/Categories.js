import { carList } from '../datas/carList';
import '../styles/Categories.css'

var t = carList.length 
function count(category){
	t = category !== "" ? carList.filter((car) => car.manufacturer === category).length : carList.length;
}

function Categories({ setActiveCategory, categories, activeCategory}) {
	return (
		<div className='lmj-categories'>
			<select
				value={activeCategory}
				onChange={(e) => {
					count(e.target.value)
					setActiveCategory(e.target.value)
				}
				}
				className='lmj-categories-select'
			>
				<option value=''>---</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			<button onClick={() => {
				t = carList.length
				setActiveCategory('')}}>Réinitialiser
			</button> 
			<p>{t} véhicule(s) {activeCategory === '' ? '' : 'de type'} {activeCategory} dans le parc</p>
		</div>
	)
}

export default Categories