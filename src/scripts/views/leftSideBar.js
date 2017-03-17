import React from 'react'
import LoadingIcon from './loadingicon'
var LeftSideBar = React.createClass({
	render:function(){
		return (
			<div className='left-side-bar'>
				<div id="interactStuff">
					<input id="inputText" type="text" name="search" placeholder="Search..." />
					<div id="weatherButtons">
						<button className="weatherButton" id="currentLink">Current</button>
						<button className="weatherButton"  id="hourlyLink">Hourly</button>
						<button className="weatherButton"  id="dailyLink">Daily</button>
					</div>
				</div>
				<LoadingIcon />
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