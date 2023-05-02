import React from "react";
async function NFLstandings(){const url = 'https://api-american-football.p.rapidapi.com/standings?league=1&season=2022';
const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': process.env.REACT_APP_JORDANnBAkEY,
		'X-RapidAPI-Host': 'api-american-football.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	return result.response;
} catch (error) {
	console.error(error);
}
}
export default NFLstandings
