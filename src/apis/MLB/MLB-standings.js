
async function MLBstandings(){
	
	const url = 'https://api-baseball.p.rapidapi.com/standings?league=1&season=2023';
	const options = {
		method: 'GET',
		headers: {
			'content-type': 'application/octet-stream',
			'X-RapidAPI-Key': 'c59be1e429msh71d174bf586dc1ap156878jsnee725f2e1a74',
			'X-RapidAPI-Host': 'api-baseball.p.rapidapi.com'
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
export default MLBstandings