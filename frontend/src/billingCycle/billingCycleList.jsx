import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getList, showUpdates, showDelete }from './billingCycleActons'

class BillingCycleList extends Component {
    componentDidMount(){
        this.props.refreshList()
    }


    render() {
        const mappedList = this.props.list.map(cycle => (
            <tr key={cycle._id}>
                <td>{cycle.name}</td>
                <td>{cycle.month}</td>
                <td>{cycle.year}</td>
                <td>
                    <button className="btn btn-warning" onClick={() => this.props.goToUpdate(cycle)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn btn-danger" onClick={() => this.props.goToDelete(cycle)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </td>

            </tr>
        ))
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th className="table-actions">Ação</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {mappedList}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.billingCycle.list
    }
}
const mapDispatchToProps = dispatch => ({
    refreshList(){
        dispatch(getList())
    },
    goToUpdate(bc) {
        dispatch(showUpdates(bc))
    },
    goToDelete(bc) {
        dispatch(showDelete(bc))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)