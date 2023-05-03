import { Card, CardHeader, CardBody } from '../../../components/layout'

const actions = [
    {
        label: 'Novo',
        action: () => console.log('novo')
    },
    {
        label: 'Busca',
        action: () => console.log('busca')
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