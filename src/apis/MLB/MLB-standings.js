
async function MLBStandings(){
	// const url = 'https://sports-live-scores.p.rapidapi.com/baseball/rankings/41276';
	// const options = {
	// 	method: 'GET',
	// 	headers: {
	// 		'content-type': 'application/octet-stream',
	// 		'X-RapidAPI-Key': 'c59be1e429msh71d174bf586dc1ap156878jsnee725f2e1a74',
	// 		'X-RapidAPI-Host': 'sports-live-scores.p.rapidapi.com'
	// 	}
	// };
	
	// try {
	// 	const response = await fetch(url, options);
	// 	const result = await response.text();
	// 	console.log(result);
	// } catch (error) {
	// 	console.error(error);
	// }
	const url = 'https://api-baseball.p.rapidapi.com/timezone';
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
		const result = await response.text();
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}
export default MLBStandings