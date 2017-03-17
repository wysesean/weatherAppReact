import Backbone from 'backbone'
import {config} from '../../../config/secrets'
var darkSkyKey = config.DARK_SKY_KEY,
	flickrKey = config.FLICKR_KEY

var CurrentModel = Backbone.Model.extend({
	_generateURL: function(lat,lng){
		var fullURL= 'https://api.darksky.net/forecast/'+darkSkyKey+'/'+lat+','+lng
		this.url = fullURL
	},
	parse: function(apiResponse){
		return apiResponse.currently
	}
})

var HourlyCollection = Backbone.Collection.extend({
	_generateURL: function(lat,lng){
		var fullURL= 'https://api.darksky.net/forecast/'+darkSkyKey+'/'+lat+','+lng
		this.url = fullURL
	},
	parse: function(apiResponse){
		return apiResponse.hourly
	}
})

var DailyCollection = Backbone.Collection.extend({
	_generateURL: function(lat,lng){
		var fullURL= 'https://api.darksky.net/forecast/'+darkSkyKey+'/'+lat+','+lng
		this.url = fullURL
	},
	parse: function(apiResponse){
		return apiResponse.daily
	}
})

export {CurrentModel, HourlyCollection, DailyCollection}