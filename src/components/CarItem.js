import '../styles/CarItem.css'
import { carList } from '../datas/carList'

function changeStatus(status, identification){
		carList.find((car) => car.identification === identification)['status'] = status
		
}

function CarItem({cover,status, identification, manufacturer}) {
	return (
		<li className='lmj-car-item'>
			{manufacturer} {identification}
			<img className='lmj-car-item-cover' src={cover} alt=''/>
			
			<div>

			<p>
				<input type="radio" id="ava" name={identification} value="available" defaultChecked={status==="available"} onClick={()=>changeStatus("available", identification)} /> <label>available</label>
				<input type="radio" id="unava" name={identification} value="unavailable" defaultChecked={status==="unavailable"} onClick={()=>changeStatus("unavailable", identification)}/> <label>unavailable</label>
			</p>
			</div>
			
		</li>
	)
}

export default CarItem