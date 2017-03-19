import Backbone from 'backbone'
import config from '../../../config/secrets'
import {formatCityName} from '../util'

var flickrKey = config.FLICKR_KEY

var CityModel = Backbone.Model.extend({
	url:'https://maps.googleapis.com/maps/api/geocode/json?',
	parse: function(apiResponse){
		for(var i = 0; i<apiResponse.results.length; i++){
			if(apiResponse.results[i].types[0] === 'locality'){
				return formatCityName(apiResponse.results[i]['formatted_address'])
			}
			else if(apiResponse.results[i].types[0] === 'administrative_area_level_1'){
				return formatCityName(apiResponse.results[i]['formatted_address'])
			}
		}
		for(var i = 0; i<apiResponse.results.length; i++){
			for(var j=0; j<apiResponse.results[i]['address_components'].length; j++){
				if(apiResponse.results[i]['address_components'][j].types[0] === 'administrative_area_level_1'){
					return formatCityName(apiResponse.results[i]['address_components'][j]['long_name'])
				}
			}
		}
	}
})

var SearchCityModel = Backbone.Model.extend({
	url:"https://maps.googleapis.com/maps/api/geocode/json?",
	parse: function(apiResponse){
		return apiResponse
	}
})

var FlickrCollection = Backbone.Collection.extend({
	parse: function(apiResponse){
		return apiResponse
	}
})

export {CityModel, SearchCityModel}