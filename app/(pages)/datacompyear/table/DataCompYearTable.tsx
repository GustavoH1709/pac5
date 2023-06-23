import { useState } from 'react';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableEditRow,
  TableEditColumn,
} from '@devexpress/dx-react-grid-material-ui';
import {
  EditingState,
  PagingState,
  IntegratedPaging,
} from '@devexpress/dx-react-grid';

interface Row {
  Ano: string;
  Disponibilidades: string;
  DuplicatasAReceber: string;
  Estoques: string;
  AtivoCirculante: string;
}

const calculateAtivoCirculante = (rowData: Row) => {
  const disponibilidades = parseFloat(rowData.Disponibilidades) || 0;
  const duplicatasAReceber = parseFloat(rowData.DuplicatasAReceber) || 0;
  const estoques = parseFloat(rowData.Estoques) || 0;

  return (disponibilidades + duplicatasAReceber + estoques).toFixed(2);
};

const columns = [
  { name: 'Ano', title: 'Ano' },
  { name: 'Disponibilidades', title: 'Disponibilidades' },
  { name: 'DuplicatasAReceber', title: 'Duplicatas A Receber' },
  { name: 'Estoques', title: 'Estoques' },
  {
    name: 'AtivoCirculante',
    title: 'Ativo Circulante',
    getCellValue: (rowData: Row) => calculateAtivoCirculante(rowData),
  },
];

const data: Row[] = [
  {
    Ano: '2021',
    Disponibilidades: '100',
    DuplicatasAReceber: '200',
    Estoques: '300',
    AtivoCirculante: '600',
  },
  {
    Ano: '2022',
    Disponibilidades: '150',
    DuplicatasAReceber: '250',
    Estoques: '400',
    AtivoCirculante: '800',
  },
  // Adicione mais linhas de acordo com suas necessidades
];

export function DataCompYearTable() {
  const [tableColumns] = useState(columns);
  const [tableData, setTableData] = useState(data);

  const commitChanges = ({
    added,
    changed,
    deleted,
  }: {
    added?: Row[];
    changed?: { [key: string]: Partial<Row> };
    deleted?: Array<string>;
  }) => {
    let updatedData = tableData;
  
    if (added) {
      updatedData = [...tableData, ...added];
    }
  
    if (changed) {
      updatedData = updatedData.map((item) => {
        const updatedItem = changed[item.Ano] || item;
        const updatedAtivoCirculante =
          parseFloat(updatedItem.Disponibilidades) +
          parseFloat(updatedItem.DuplicatasAReceber) +
          parseFloat(updatedItem.Estoques);
        updatedItem.AtivoCirculante = isNaN(updatedAtivoCirculante)
          ? ''
          : updatedAtivoCirculante.toFixed(2);
        return updatedItem;
      });
    }
  
    if (deleted) {
      updatedData = updatedData.filter(
        (item) => !deleted.includes(item.Ano)
      );
    }
  
    setTableData(updatedData);
  };
  

  return (
    <Grid rows={tableData} columns={tableColumns}>
      <EditingState onCommitChanges={commitChanges} />
      <PagingState defaultCurrentPage={0} defaultPageSize={10} />
      <IntegratedPaging />
      <Table />
      <TableHeaderRow />
      <TableEditRow />
      <TableEditColumn showAddCommand showEditCommand showDeleteCommand />
    </Grid>
  );
}
