//A really messy way to tranlate the api.icon return into my own icons
function translateIcon(iconStr){
	var key1 =[
	'clear-day',
	'clear-night',
	'rain',
	'snow',
	'sleet',
	'wind',
	'fog',
	'cloudy',
	'partly-cloudy-day',
	'partly-cloudy-night',
	'hail',
	'thunderstorm',
	'tornado']

	var key2 =[
	'wi wi-day-sunny',
	'wi wi-night-clear',
	'wi wi-rain',
	'wi wi-snow',
	'wi wi-sleet',
	'wi wi-strong-wind',
	'wi wi-fog',
	'wi wi-cloudy',
	'wi wi-day-cloudy',
	'wi wi-night-cloudy',
	'wi wi-hail',
	'wi wi-thunderstorm',
	'wi wi-tornado']
	return key2[key1.indexOf(iconStr)]
}

//used to convert input to upper case
function toTitleCase(str){
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

//converts seconds to time format
function secondsToTime(num){
	var date = new Date()
	date.setSeconds(num)
	return date.toString()
}