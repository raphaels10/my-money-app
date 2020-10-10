import React from 'react'
import Grid from '../common/layout/grid'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'

export default params => (
    <Grid cols="12">
        <fieldset>
            <legend>Resumo</legend>
            <Row>
                <ValueBox cols="12 4" color="green" icon="bank" value={`R$ ${params.credit}`}
                text="Total de créditos"/>
                <ValueBox cols="12 4" color="red" icon="credit-card" value={`R$ ${params.debt}`}
                text="Total de débitos"/>
                <ValueBox cols="12 4" color="blue" icon="money" value={`R$ ${params.credit - params.debt}`}
                text="Valor consolidado"/>
            </Row>
        </fieldset>
    </Grid>
)