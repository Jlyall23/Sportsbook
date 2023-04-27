import React from "react";
async function NFLstandings(){const url = 'https://api-american-football.p.rapidapi.com/standings?league=1&season=2022';
const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': 'c59be1e429msh71d174bf586dc1ap156878jsnee725f2e1a74',
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
