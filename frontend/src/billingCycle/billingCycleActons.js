import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize} from 'redux-form'
import { selectTab, showTabs } from '../common/tab/tabActions'
const BASE_URL = "http://localhost:3003/api"
const INITIAL_VALUES = {credits: [{}], debts: [{}]}

export function getList() {
    return dispatch => {
        axios.get(`${BASE_URL}/billingCycles`)
        .then(r => dispatch({
            type: "BILLING_CYCLES_FETCHED",
            payload: r.data
        }))
    }
}

export function createCycle(values) {
    return dispatch => {
        axios.post(`${BASE_URL}/billingCycles`, values)
        .then(r => {
            toastr.success("Sucesso", "Dados inseridos com sucesso!")
            dispatch(init())
        
        })
        .catch(e => {
            const errorlist = e.response.data.errors || []
            errorlist.forEach(e => toastr.error('Erro', e))
        })
    }
}

export function updateCycles(values){
    console.log(values)
    return dispatch => {
        axios.put(`${BASE_URL}/billingCycles/${values._id}`, values).then(() => {
            toastr.success("Sucesso","Dados alterados com sucesso!")
            dispatch(init())
        })
        .catch(e => {
            const errorlist = e.response.data.errors || []
            errorlist.forEach(e => toastr.error('Erro', e))
        })
    }
}

export function deleteCycles (values) {
    return dispatch => {
    axios.delete(`${BASE_URL}/billingCycles/${values._id}`).then(() => {
        toastr.success("Sucesso", "Dados excluidos")
        dispatch(init())
    })
    .catch(e => {
        e.response.data.errors.forEach(e => toastr.error('Erro', e))
    })

}}

export function showUpdates(bc) {
    bc.credits = bc.credits[0] ? bc.credits : [{}]
    bc.debts = bc.debts[0] ? bc.debts : [{}]
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', bc)
    ]
}

export function showDelete(bc){
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', bc)
    ]
}

export function init(){
    return [
        showTabs('tabList','tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}