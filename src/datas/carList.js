import { cars } from './data'
import { readString } from 'react-papaparse'

const carList = []

const datas = readString(cars);
for (let index = 1; index < datas.data.length; index++) {
	const car = {
		'id': datas.data[index][0],
		'created_at': datas.data[index][1],
		'into_circulation_date': datas.data[index][2],
		'manufacturer': datas.data[index][3],
		'model': datas.data[index][4],
		'identification': datas.data[index][5],
		'initial_mileage': datas.data[index][6],
		'entry_park_date': datas.data[index][7],
		'last_mileage': datas.data[index][8],
		'status': datas.data[index][9],
	}
	carList.push(car)
}

export{carList}