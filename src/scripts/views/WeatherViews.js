import React from 'react'
import {translateIcon, toTitleCase, secondsToTime, formatTime, formatDate} from '../util'

var CurrentView = React.createClass({
	render:function(){
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
		return(
			<div className='hourlyElement' key={singleElement.attributes.time}>
				<p id="hourlyTime">
					<i className={translateIcon(singleElement.attributes['icon'])}></i>&nbsp; &nbsp;
					{formatTime(secondsToTime(singleElement.attributes['time']))} &nbsp; - &nbsp;
					{Math.round(singleElement.attributes['temperature'])}&#8457; &nbsp; 
				</p>
				<hr />
			</div>

		)
	},
	render:function(){
		return(
			<div id="hourlyContainer">
				{this.props.hourlyCollection.models.slice(0,12).map(this._makeElements)}
			</div>
		)
	}
})

var DailyView = React.createClass({
	_makeElements: function(singleElement){
		return(
			<div key={singleElement.attributes.time} className="dailyElement">
				<p id="dailyDay">
					<i className={translateIcon(singleElement.attributes['icon'])}></i>&nbsp; &nbsp;
					{formatDate(secondsToTime(singleElement.attributes['time']))}&nbsp;:&nbsp;
					{Math.round(singleElement.attributes['temperatureMax'])}&#8457; / &nbsp;
					{Math.round(singleElement.attributes['temperatureMin'])}&#8457; &nbsp; &#13;
				</p>
				<div><p id="dailyDay">{singleElement.attributes['summary']}</p></div>
				<hr/>
			</div>
		)
	},
	render:function(){
		return(
			<div className="dailyContainer">
				{this.props.dailyCollection.models.slice(0,7).map(this._makeElements)}
			</div>
		)
	}
})

export {CurrentView, HourlyView, DailyView}