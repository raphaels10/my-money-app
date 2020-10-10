import React, { Component } from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import LabelAndInput from '../common/form/labelAndInput'
import { connect } from 'react-redux'
import { init } from './billingCycleActons'
import ItemList from './itemList'
import Summary from './summary'

class BillingCycleForm extends Component {


    calcSummary() {
        return {
            sumCredits: this.props.credits.map(credit => +credit.value || 0).reduce((p, n) => p + n, 0),
            sumDebts: this.props.debts.map(debt => +debt.value || 0).reduce((p, n) => p + n, 0)
        }
    }

    render() {
        console.log(this.props)
        const {sumCredits, sumDebts} = this.calcSummary()
        return (
            <form role="form" onSubmit={this.props.handleSubmit}>
                <div className="box-body">
                    <Field name="name" component={LabelAndInput} label="Nome" cols="12 4"
                    placeholder="Informe o nome" readOnly={this.props.readOnly}/>
                    <Field name="month" component={LabelAndInput} label="Mês" cols="12 4"
                    placeholder="Informe o mês" readOnly={this.props.readOnly}/>
                    <Field name="year" component={LabelAndInput} label="Ano" cols="12 4"
                    placeholder="Informe o ano" readOnly={this.props.readOnly}/>
                    <Summary credit={sumCredits} debt={sumDebts}/>
                    <ItemList cols="12 12 12 12" readOnly={this.props.readOnly}
                    list={this.props.credits} legend="Créditos" field="credits"/>
                    <ItemList cols="12 12 12 12" readOnly={this.props.readOnly}
                    list={this.props.debts} legend="Débitos" field="debts" showStatus={true}/>

                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.buttonSubmit}`}>
                        {this.props.labelSubmit}
                    </button>
                    <button type="button" className="btn btn-default"
                    onClick={this.props.initz}>Cancelar</button>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    initz() {
        dispatch(init())
    }
})

const selector = formValueSelector("billingCycleForm")
const mapStateToProps = state => ({credits: selector(state, "credits"), debts: selector(state, "debts")})
BillingCycleForm =  reduxForm({form: "billingCycleForm", destroyOnUnmount: false})(BillingCycleForm)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)