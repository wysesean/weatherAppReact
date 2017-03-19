import React from 'react'
import {CityModel, SearchCityModel} from '../models/CityModel'
import ReactDOM from 'react-dom'

var CityName = React.createClass({
	_fetchCityName: function(){
		console.log('getCityName running')
		var hashArr = location.hash.substr(1).split('/')

		var cityModelInstance = new CityModel()
		var promise = cityModelInstance.fetch({
			data:{
				latlng: hashArr[0]+','+hashArr[1],
				language:'en'
			}
		})
		promise.then(()=>{
				console.log('promise returned')
				console.log('am i returning the correct thing',Object.keys(cityModelInstance.attributes)[0])
				return Object.keys(cityModelInstance.attributes)[0]
			}
		)
	},

	render:function(){
		console.log(this.props)
		return(
			<div>
				<h1 id='cityText'>{this._fetchCityName()}</h1>
			</div>
		)
	}
})

export default CityName