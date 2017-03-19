import React from 'react'
import {CityModel, SearchCityModel} from '../models/CityModel'
import ReactDOM from 'react-dom'

var CityName = React.createClass({
	_fetchCityName: function(coords){
		var hashArr = location.hash.substr(1).split('/')

		var cityModelInstance = new CityModel()
		var promise = cityModelInstance.fetch({
			data:{
				latlng: coords,
				language:'en'
			}
		})
		promise.then(()=>{
				this.setState({
					cityName: Object.keys(cityModelInstance.attributes)[0]
				})
				return Object.keys(cityModelInstance.attributes)[0]
			}
		)
	},

	getInitialState:function(){
		var hashArr = location.hash.substr(1).split('/')
		console.log('hash is currently', location.hash)
		console.log('coords is currently', this.props.coords)
		console.log('defaultcoords is currently', this.props.defaultCoords)
		return {
			cityName: this._fetchCityName(hashArr[0]+','+hashArr[1])
		}	
	},
	componentWillReceiveProps(nextProps){
		console.log('next props', nextProps)
		if(!this.props.coords){
			console.log('setting default ciirds')
			this.setState({
				cityName: this._fetchCityName(this.props.defaultCoords)
			})
		}
		this.setState({
			cityName: this._fetchCityName(nextProps.coords)
		})
	},
	render:function(){
		return(
			<div>
				<h1 id='cityText'>{this.state.cityName}</h1>
			</div>
		)
	}
})

export default CityName