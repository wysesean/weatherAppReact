//Loader gif provided by tobiasahlin.com/spinkit
//Images provided by Flickr
//Location services provided by google maps api

import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import util from './util'
import {CurrentModel, HourlyCollection, DailyCollection} from './models/WeatherModels'
import {CurrentView, HourlyView, DailyView} from './views/WeatherViews'
import LeftSideBar from './views/leftSideBar'
import LoadingIcon from './views/loadingicon'


const app = function() {
	var WeatherRouter = Backbone.Router.extend({
		routes:{
			":latitude/:longitude/current": "handleCurrent",
			":latitude/:longitude/hourly": "handleHourly",
			":latitude/:longitude/daily": "handleDaily",
			"errorPage": "handleError",
			"": "handleDefault"
		},
		handleCurrent: function(latitude, longitude){
			var currentCollectionInstance = new CurrentModel()
			currentCollectionInstance._generateURL(latitude,longitude)
			var promise = currentCollectionInstance.fetch({
				dataType:'jsonp',
				data:{
					'exclude':'[minutely,hourly,daily,alerts,flags]',
					'callback':'?'
				}
			})
			//Render the loading icon then overwrite loading icon once promise fufills
			ReactDOM.render(<LoadingIcon />, document.querySelector('#weatherContainer'))
			promise.then(function(){
				console.log(currentCollectionInstance.url)
				ReactDOM.render(<CurrentView currentCollection={currentCollectionInstance}/>,document.querySelector('#weatherContainer'))
			})
		},
		handleHourly: function(latitude, longitude){
			var hourlyCollectionInstance = new HourlyCollection()
			hourlyCollectionInstance._generateURL(latitude,longitude)
			var promise = hourlyCollectionInstance.fetch({
				dataType:'jsonp',
				data:{
					'exclude':'[currently,minutely,daily,alerts,flags]',
					'callback':'?'
				}
			})
			//Render the loading icon then overwrite loading icon once promise fufills
			ReactDOM.render(<LoadingIcon />, document.querySelector('#weatherContainer'))
			promise.then(function(){
				console.log('collection instance',hourlyCollectionInstance)
				ReactDOM.render(<HourlyView hourlyCollection={hourlyCollectionInstance}/>,document.querySelector('#weatherContainer'))
			})
		},
		handleDaily: function(latitude, longitude){
			var dailyCollectionInstance = new DailyCollection()
			dailyCollectionInstance._generateURL(latitude,longitude)
			var promise = dailyCollectionInstance.fetch({
				dataType:'jsonp',
				data:{
					'exclude':'[currently,minutely,hourly,alerts,flags]',
					'callback':'?'
				}
			})
			//Render the loading icon then overwrite loading icon once promise fufills
			ReactDOM.render(<LoadingIcon />, document.querySelector('#weatherContainer'))
			promise.then(function(){
				ReactDOM.render(<DailyView dailyCollection={dailyCollectionInstance}/>,document.querySelector('#weatherContainer'))
			})
		},
		handleError: function(){
			//TO DO
			//ReactDom.render(<ErrorView />, document.querySelector('#leftSideBar'))
		},
		handleDefault: function(){
			//If empty hash, change the hash to the current geolocation
			navigator.geolocation.getCurrentPosition((positionObj)=>{
				var lat = positionObj.coords.latitude,
					long = positionObj.coords.longitude
				location.hash = lat + '/' + long + '/current'
				//TO DO Render City Name
				//TO DO Render background image
			})
		}
	})
	ReactDOM.render(<LeftSideBar />, document.querySelector('#rightColumn'))
	//To do
	//getInitialValues()
	new WeatherRouter()
	Backbone.history.start()
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..