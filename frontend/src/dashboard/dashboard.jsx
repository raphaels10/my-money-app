import React, {Component }from 'react'
import ValueBox from '../common/widget/valueBox'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Row from '../common/layout/row'
import { getSummary } from './dashboardAction'

import { connect } from 'react-redux'
import { render } from 'react-dom'



class Dashboard extends Component {
    
    componentDidMount(){
        this.props.getSum()
    }

    render() {
        const { credit, debt } = this.props.summary
        const getSum = this.props.getSum
        return (
        <div>
            <ContentHeader title="Dashboard" small="Versão 1.0"/>
            <Content>
                <Row>
                    <ValueBox cols="12 4" color="green" icon="bank" value={`R$ ${credit}`} 
                    text="Total de créditos"/>
                    <ValueBox cols="12 4" color="red" icon="credit-card" value={`R$ ${debt}`}
                    text="Total de débitos"/>
                    <ValueBox cols="12 4" color="blue" icon="money" value={`R$ ${credit - debt}`}
                     text="Valor Consolidado"/>
                </Row>
            </Content>
        </div>
        )
    }
}
const mapStateToProps = state => (
    {
        summary: state.dashboard.summary
    }
)

const mapDispatchToProps = dispatch => {
    return {
        getSum(){
            dispatch(getSummary())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)