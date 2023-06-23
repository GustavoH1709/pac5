import { useState } from 'react';
import {
  Grid,
  Table,
  TableHeaderRow,
  PagingPanel,
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
  Receita: string;
  Custo: string;
  Despesas: string;
  LucroLiquido?: string;
}

const columns = [
  { name: 'Ano', title: 'Ano' },
  { name: 'Receita', title: 'Receita' },
  { name: 'Custo', title: 'Custo' },
  { name: 'Despesas', title: 'Despesas' },
  { name: 'LucroLiquido', title: 'Lucro Líquido' },
];

const data: Row[] = [
  {
    Ano: '2021',
    Receita: '1000',
    Custo: '600',
    Despesas: '200',
  },
  {
    Ano: '2022',
    Receita: '1200',
    Custo: '700',
    Despesas: '250',
  },
  // Adicione mais linhas de acordo com suas necessidades
];

export function DataCompYearTable() {
  const [tableColumns] = useState(columns);
  const [tableData, setTableData] = useState(data);

  const calculateLucroLiquido = (rowData: Row) => {
    const receita = parseFloat(rowData.Receita) || 0;
    const custo = parseFloat(rowData.Custo) || 0;
    const despesas = parseFloat(rowData.Despesas) || 0;

    return (receita - custo - despesas).toFixed(2);
  };

  const commitChanges = ({
    added,
    changed,
    deleted,
  }: {
    added?: Row[];
    changed?: { [key: string]: Partial<Row> };
    deleted?: string[];
  }) => {
    let updatedData = tableData;

    if (added) {
      updatedData = [...updatedData, ...added];
    }

    if (changed) {
      updatedData = updatedData.map((item) => {
        const updatedItem = changed[item.Ano] ? { ...item, ...changed[item.Ano] } : item;
        updatedItem.LucroLiquido = calculateLucroLiquido(updatedItem);
        return updatedItem;
      });
    }

    if (deleted) {
      updatedData = updatedData.filter((item) => !deleted.includes(item.Ano));
    }

    setTableData(updatedData);
  };

  return (
    <Grid rows={tableData} columns={tableColumns}>
      <PagingState defaultCurrentPage={0} defaultPageSize={10} />
      <EditingState onCommitChanges={commitChanges} />
      <IntegratedPaging />
      <Table />
      <TableHeaderRow />
      <TableEditRow />
      <TableEditColumn
        showAddCommand
        showEditCommand
        showDeleteCommand
      />
      <PagingPanel />
    </Grid>
  );
}
