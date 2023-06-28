import {
  Grid,
  Table,
  TableHeaderRow
} from '@devexpress/dx-react-grid-material-ui';

const columns = [
  { name: 'Emprestimos', title: 'Empréstimos' },
  { name: 'Fornecedores', title: 'Forcedores' },
  { name: 'Salarios', title: 'Salários a Pagar' },
  { name: 'Impostos', title: 'Impostos a Recolher' },
];


export function DataCompYearPassivo() {

  return (
    <Grid rows={[]} columns={columns}>
      <Table />
      <TableHeaderRow />
    </Grid>
  );
}
