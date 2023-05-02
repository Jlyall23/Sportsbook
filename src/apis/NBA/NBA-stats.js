async function nbaStatisticsAPI(){
const url = 'https://api-nba-v1.p.rapidapi.com/players/statistics?id=236&season=2022';
const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': process.env.REACT_APP_JORDANnBAkEY,
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	return result.response
} catch (error) {
	console.error(error);
}
}
export default nbaStatisticsAPI