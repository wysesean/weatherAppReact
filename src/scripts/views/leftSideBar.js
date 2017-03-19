import React from 'react'
import {CityModel, SearchCityModel} from '../models/CityModel'
import ReactDOM from 'react-dom'

var LeftSideBar = React.createClass({
	_handleCurrentClick:function(){
		var hashArr = location.hash.split('/')
		location.hash = hashArr[0]+'/'+hashArr[1]+'/current'

	},
	_handleHourlyClick:function(){
		var hashArr = location.hash.split('/')
		location.hash = hashArr[0]+'/'+hashArr[1]+'/hourly'

	},
	_handleDailyClick:function(){
		var hashArr = location.hash.split('/')
		location.hash = hashArr[0]+'/'+hashArr[1]+'/daily'
	},
	_handleSearch: function(event){
		if(event.key == 'Enter'){
			var searchInstance = new SearchCityModel()
			var promise = searchInstance.fetch({
				data:{
					address:event.target.value
				}
			})
			event.target.value = ''
			promise.then((apiResponse)=>{
				if(apiResponse.status === 'ZERO_RESULTS'){
					location.hash = "errorPage"
					return
				}
				var hashArr = location.hash.split('/')
				hashArr[0] = apiResponse.results[0].geometry.location['lat']
				hashArr[1] = apiResponse.results[0].geometry.location['lng']
				location.hash = hashArr.join('/')
				this.setState({
					lat:hashArr[0],
					long:hashArr[1]
				})

			})

		}
	},

	getInitialState: function(){
		var hashArr = location.hash.substr(1).split('/')
		return {
			lat:hashArr[0],
			long:hashArr[1],
			cityName: ''
		}
	},
	componentWillMount: function(){
		this.setState({
			cityName: ''
		})
	},
	render:function(){
		return (
			<div className='left-side-bar'>
				<div id="interactStuff">
					<input onKeyPress={this._handleSearch} id="inputText" type="text" name="search" placeholder="Search..." />
					<div id="weatherButtons">
						<input type='button' onClick={this._handleCurrentClick} className="weatherButton" id="currentLink" value='Current' />
						<input type='button' onClick={this._handleHourlyClick} className="weatherButton"  id="hourlyLink" value='Hourly' />
						<input type='button' onClick={this._handleDailyClick} className="weatherButton"  id="dailyLink" value='Daily' />
					</div>
				</div>
				<div id="weatherContainer"></div>
				<div id='cityName'></div>
			</div>
		)
	}
})



export default LeftSideBar