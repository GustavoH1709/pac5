import { Card, CardHeader, CardBody } from '../../../components/layout'
import { DataCompYearTable } from './table/DataCompYearTable';

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


export function DataCompYearCard() {
    return (
        <Card>
            <CardHeader title='Teste' actions={actions}/>
            <CardBody>
                <DataCompYearTable/>
            </CardBody>
        </Card>
    )
}