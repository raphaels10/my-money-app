import axios from 'axios'
const BASE_URL = "http://localhost:3003/api"

export function getSummary() {
    return dispatch => {
        axios.get(`${BASE_URL}/billingCycles/summary`)
        .then(r => dispatch({
            type: "BILLING_SUMMARY_FETCHED",
            payload: r.data
        }))
    }
}

/*export function getSummary() {
    const request = axios.get(`${BASE_URL}/billingCycles/summary`)
    return {
        type: "BILLING_SUMMARY_FETCHED",
        payload: request
    }
}*/


