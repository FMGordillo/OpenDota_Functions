const request = require('request-promise')

const API_URL = 'https://api.opendota.com/api'
const API_FUNCTIONS =
	'https://openwhisk.ng.bluemix.net/api/v1/namespaces/famargor%40ar.ibm.com_dev/actions'
const STEAM_ID = '56988572'

const errorMessage = {
	status: 400,
	message: 'Something bad happened'
}

/**
 * [main description]
 * @param  {Object} args [description]
 * @return {Object}      [description]
 */
function main(args) {
	return request(`${API_FUNCTIONS}/dota_get_status`).then(response => {
		if (!isStatusOk(response)) return errorMessage
	})
}

/**
 * Helper function to check responses
 * @param  {Object} response
 * @return {Boolean}
 */
function isStatusOk({ status }) {
	if (status !== 200) {
		return false
	} else {
		return true
	}
}
