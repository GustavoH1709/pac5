import { Card, CardHeader, CardBody } from '../../../components/layout'

const actions = [
    {
        label: 'Novo',
        action: () => alert('Novo'),
        color: 'bg-blue-600'
    }
]


export function ICard() {
    return (
        <Card>
            <CardHeader title='Teste' actions={actions}/>
            <CardBody>
                <div></div>
                <div></div>
            </CardBody>
        </Card>
    )
}