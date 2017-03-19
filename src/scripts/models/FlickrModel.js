import Backbone from 'backbone'
import config from '../../../config/secrets'

var FlickrCollection = Backbone.Collection.extend({
	url : "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key="+flickrKey+"&text="+place+"&sort=relevance&media=photos&extras=url_l&per_page=1&page=1&format=json&nojsoncallback=1"
	parse: function(apiResponse){
		return apiResponse.photos.photo[0]['url_l']
	}
})