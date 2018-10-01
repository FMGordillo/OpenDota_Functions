// Node.js 8
const request = require('request-promise')

const API_URL = 'https://api.opendota.com/api'

/**
 * MANDATORY
 * @param  {Object} args
 * @return {Object}
 */
function main(args) {
	return request({ uri: `${API_URL}/status`, json: true, qs: args.qs })
		.then(data => ({
			data,
			status: 200,
			message: 'Everything good!'
		}))
		.catch(err => ({
			err,
			status: 400,
			message: 'Something happened...'
		}))
}
