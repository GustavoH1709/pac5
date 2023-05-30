import { Card, CardHeader, CardBody } from '../../../components/layout'
import { DataCompYearTable } from './table/DataCompYearTable';

export function DataCompYearCard() {
    return (
        <Card>
            <CardHeader title='Teste'/>
            <CardBody>
                <DataCompYearTable/>
            </CardBody>
        </Card>
    )
}