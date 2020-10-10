import React, {Component} from 'react'
import { connect } from 'react-redux'
import { selectTab, showTabs } from '../common/tab/tabActions'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import List from './billingCycleList'
import Form from './billingCycleForm'
import {createCycle, updateCycles, deleteCycles, init } from './billingCycleActons'

class BillingCycle extends Component {
    componentDidMount(){
        this.props.initform()
    }

    render() {
        return(
        <div>
            <ContentHeader title="Ciclos de Pagamentos" small="Cadastro"/>
            <Content>
                <Tabs>
                    <TabsHeader>
                        <TabHeader label="Listar" icon="bars" target="tabList"/>
                        <TabHeader label="Incluir" icon="plus" target="tabCreate"/>
                        <TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
                        <TabHeader label="Excluir" icon="trash" target="tabDelete" />
                    </TabsHeader>
                    <TabsContent>
                        <TabContent id="tabList">
                            <List />
                        </TabContent>
                        <TabContent id="tabCreate">
                            <Form onSubmit={this.props.create} labelSubmit="Incluir"
                            buttonSubmit="primary"/>
                        </TabContent>
                        <TabContent id="tabUpdate">
                            <Form onSubmit={this.props.update} labelSubmit="Alterar"
                            buttonSubmit="info"/>
                        </TabContent>
                        <TabContent id="tabDelete">
                             <Form onSubmit={this.props.delete} readOnly={true} labelSubmit="Excluir"
                             buttonSubmit="danger"/>
                        </TabContent>

                    </TabsContent>
                </Tabs>
            </Content>
        </div>
        )
    }
}
const mapDispatchToProps = dispatch => (
    {
        select(tabId) {
            dispatch(selectTab(tabId))
        },
        show(...tabs) {
            dispatch(showTabs(...tabs))
        },
        create(values){
            dispatch(createCycle(values))
        },
        update(values){
            dispatch(updateCycles(values))
        },
        delete(values){
            dispatch(deleteCycles(values))
        },
        initform(){
            dispatch(init())
        }
    }
)
export default connect(null, mapDispatchToProps)(BillingCycle)