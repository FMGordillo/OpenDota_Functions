const request = require('request-promise')

const API_URL = 'https://api.opendota.com/api'
const API_STATUS =
	'https://openwhisk.ng.bluemix.net/api/v1/namespaces/famargor%40ar.ibm.com_dev/actions/dota_get_status'
const STEAM_ID = '56988572'

function main(args) {
	if (true)
		return request({
			uri: `${API_URL}/players/${STEAM_ID}/matches`,
			json: true,
			qs: args.qs
		})
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
	else
		return {
			status: 400,
			message: 'OpenDota API not available, sorry for the inconveniance'
		}
}

async function isOk() {
	const { status } = await request({ uri: API_STATUS, json: true })
	if (status !== 200) return false
	else return true
}
