import React from 'react'
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
	render:function(){
		return (
			<div className='left-side-bar'>
				<div id="interactStuff">
					<input id="inputText" type="text" name="search" placeholder="Search..." />
					<div id="weatherButtons">
						<input type='button' onClick={this._handleCurrentClick} className="weatherButton" id="currentLink" value='Current' />
						<input type='button' onClick={this._handleHourlyClick} className="weatherButton"  id="hourlyLink" value='Hourly' />
						<input type='button' onClick={this._handleDailyClick} className="weatherButton"  id="dailyLink" value='Daily' />
					</div>
				</div>
				<div id="weatherContainer"></div>
				<div id="cityName">
				</div>
			</div>
		)
	}
})

var NavBar = React.createClass({
	render: function(){
		return (
			<div className='nav-bar'>
				<input id='inputText' type='text' placeholder='Search...' />
			</div>
		)
	}
})

export default LeftSideBar