import { Card, CardHeader, CardBody } from '../../../components/layout'
import { DataCompYearTable } from './table/DataCompYearTable';

export function DataCompYearCard() {
    return (
        <Card>
            <CardHeader title='Balanço patrimonial Ativo'/>
            <CardBody>
                <DataCompYearTable/>
            </CardBody>
        </Card>
    )
}