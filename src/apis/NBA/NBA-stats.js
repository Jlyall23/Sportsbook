async function nbaStatisticsAPI(){
const url = 'https://api-nba-v1.p.rapidapi.com/players/statistics?id=236&season=2022';
const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': 'c59be1e429msh71d174bf586dc1ap156878jsnee725f2e1a74',
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}
}
export default nbaStatisticsAPI