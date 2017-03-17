import React from 'react'
import {translateIcon, toTitleCase, secondsToTime} from '../util'

var CurrentView = React.createClass({
	render:function(){
		console.log(this)
		return(
		 	<div id="currentTempContainer">
				<h1 id="currentTemp">`{Math.round(this.props.currentCollection.get('temperature'))} &#8457`</h1>
				<hr/>
		 		<p id="currentSummary"><i className={translateIcon(this.props.currentCollection.get('icon'))}></i>{this.props.currentCollection.get('summary')}</p>
				<p id="currentChance"><i className="wi wi-umbrella"></i>+{this.props.currentCollection.get('precipProbability')}+'% Chance of Rain.'</p>
		 		<p id="currentHumidity"><i className="wi wi-humidity"></i>+{this.props.currentCollection.get('humidity')}+'% Humidity'</p>
				<p id="currentWindSpeed"><i className="wi wi-strong-wind"></i>+{this.props.currentCollection.get('windSpeed')}+ 'mp/h Wind Speed'</p>
				<hr/>
			</div>
		)
	}
})

var HourlyView = React.createClass({
	_makeHourlyElements:function(){
		for(var i=0; i<12; i++){
			'<div class="hourlyElement">'
				'<p id="hourlyTime">'+formatTime(secondsToTime(apiResponse.hourly.data[i]['time']))+'  -  '
				Math.round(apiResponse.hourly.data[i]['temperature'])+'&#8457\t<i class="'+translateIcon(apiResponse.hourly.data[i]['icon'])+'"></i></p>'
				'<hr>'
			'</div>'
			}
	},
	render:function(){
		return(
			<div id="hourlyContainer">
				{this._makeHourlyElements}
			</div>
		)
	}
})

var DailyView = React.createClass({
	render:function(){
		return(
			<div>
				<p> sup dude </p>
			</div>
		)
	}
})

export {CurrentView, HourlyView, DailyView}