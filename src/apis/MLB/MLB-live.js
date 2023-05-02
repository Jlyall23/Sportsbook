

async function mlbLive(){
	const url = 'https://sports-live-scores.p.rapidapi.com/baseball/live';
	const options = {
		method: 'GET',
		headers: {
			'content-type': 'application/octet-stream',
			'X-RapidAPI-Key': process.env.REACT_APP_JORDANnBAkEY,
			'X-RapidAPI-Host': 'sports-live-scores.p.rapidapi.com'
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

export default mlbLive



