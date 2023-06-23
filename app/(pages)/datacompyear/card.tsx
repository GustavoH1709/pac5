import { Card, CardHeader, CardBody } from '../../../components/layout'
import { DataCompYearTable } from './table/DataCompYearTable';
import { DataCompYearTablePermanent } from './table/DataCompYearTablePermanent';

export function DataCompYearCard() {
    return (
        <Card>
            <CardHeader title='Balanço patrimonial Ativo Circulante'/>
            <CardBody>
                <DataCompYearTable/>
                <DataCompYearTablePermanent/>
            </CardBody>
        </Card>
        //Balanço Patrimonial Ativo Permanente
    )
}