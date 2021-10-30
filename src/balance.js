const crypto = require("crypto-js");
const axios = require("axios");

require('dotenv').config()

const apiKey = process.env.KEY;
const apiSecret = process.env.SKEY;

// program
const signRequest = (request, apiKey, apiSecret) => {
	const {id, method, params, nonce} = request;

	const paramsString =
		params == null
			? ""
			: Object.keys(params)
				.sort()
				.reduce((a, b) => {
					return a + b + params[b];
				}, "");

	const sigPayload = method + id + apiKey + paramsString + nonce;
	// console.log(sigPayload);
	request.sig = crypto
		.HmacSHA256(sigPayload, apiSecret)
		.toString(crypto.enc.Hex);
	// console.log(request);
	return request;
}; //signRequest

let request = {
	id: 11,
	method: "private/get-account-summary",
	api_key: apiKey,
	params: {
		currency: process.argv[2].toUpperCase(),
	},
	nonce: Date.now(),
};

async function main() {
	const requestBody = JSON.stringify(signRequest(request, apiKey, apiSecret));
	const options = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	const datos = await axios
		.post(
			"https://api.crypto.com/v2/private/get-account-summary",
			requestBody,
			options
		)
		.then(
			(response) => {
				console.log(response.data.result.accounts);
			},
			(error) => {
				console.log(error);
			}
		);
}

main();
