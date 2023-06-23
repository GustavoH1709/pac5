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
  Investimentos: string;
  Imobilizado: string;
  Acumulado: string;
  AtivoPermanente: string;
}

const calculateAtivoPermanente = (rowData: Row) => {
  const investimentos = parseFloat(rowData.Investimentos) || 0;
  const imobilizado = parseFloat(rowData.Imobilizado) || 0;
  const acumulado = parseFloat(rowData.Acumulado) || 0;

  return (investimentos + imobilizado - acumulado).toFixed(2);
};

const columns = [
  { name: 'Ano', title: 'Ano' },
  { name: 'Investimentos', title: 'Investimentos' },
  { name: 'Imobilizado', title: 'Duplicatas A Receber' },
  { name: 'Acumulado', title: 'Acumulado' },
  {
    name: 'AtivoPermantene',
    title: 'Ativo Permanente',
    getCellValue: (rowData: Row) => calculateAtivoPermanente(rowData),
  },
];

const data: Row[] = [
  {
    Ano: '2021',
    Investimentos: '100',
    Imobilizado: '200',
    Acumulado: '300',
    AtivoPermanente: '600',
  },
  {
    Ano: '2022',
    Investimentos: '150',
    Imobilizado: '250',
    Acumulado: '400',
    AtivoPermanente: '800',
  },
  // Adicione mais linhas de acordo com suas necessidades
];

export function DataCompYearTablePermanent() {
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
        const updatedAtivoPermanente =
          parseFloat(updatedItem.Investimentos) +
          parseFloat(updatedItem.Imobilizado) +
          parseFloat(updatedItem.Acumulado);
        updatedItem.AtivoPermanente = isNaN(updatedAtivoPermanente)
          ? ''
          : updatedAtivoPermanente.toFixed(2);
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
