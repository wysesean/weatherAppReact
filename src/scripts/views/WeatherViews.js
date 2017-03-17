import React from 'react'
import {translateIcon, toTitleCase, secondsToTime, formatTime, formatDate} from '../util'

var CurrentView = React.createClass({
	render:function(){
		console.log(this)
		return(
		 	<div id="currentContainer">
				<h1 id="currentTemp">{Math.round(this.props.currentCollection.get('temperature'))} &#8457;</h1>
				<hr/>
		 		<p id="currentSummary"><i className={translateIcon(this.props.currentCollection.get('icon'))}></i>&nbsp;{this.props.currentCollection.get('summary')}</p>
				<p id="currentChance"><i className="wi wi-umbrella"></i>&nbsp;{this.props.currentCollection.get('precipProbability')}% Chance of Rain.</p>
		 		<p id="currentHumidity"><i className="wi wi-humidity"></i>&nbsp;{this.props.currentCollection.get('humidity')}% Humidity</p>
				<p id="currentWindSpeed"><i className="wi wi-strong-wind"></i>&nbsp;{this.props.currentCollection.get('windSpeed')}+ mp/h Wind Speed</p>
				<hr/>
			</div>
		)
	}
})

var HourlyView = React.createClass({
	_makeElements: function(singleElement){
		console.log(singleElement)
		return(
			<div className='hourlyElement'>
				<p id="hourlyTime">'+{formatTime(secondsToTime(singleElement.attributes['time']))}
				{Math.round(singleElement.attributes['temperature'])}&#8457;<i className={translateIcon(singleElement.attributes['icon'])}></i></p>
				<hr />
			</div>

		)
	},
	render:function(){
		console.log('hourly view',this)
		return(
			<div id="hourlyContainer">
				{this.props.hourlyCollection.models.slice(0,12).map(this._makeElements)}
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