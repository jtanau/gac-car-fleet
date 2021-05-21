import { carList } from '../datas/carList';
import '../styles/Categories.css'

function Research({ setActiveSearch, search, activeSearch}) {
	return (
		<div>
            
            <input type="text" placeholder="Entrer l'immatriculation pour etre cherché" onChange={(e)=>
                {
                    // carList = carList.filter((car) => car.identification === e.target.value);
                    activeSearch = e.target.value
                    setActiveSearch(e.target.value)}} />
            
			
		</div>
	)
}

export default Research