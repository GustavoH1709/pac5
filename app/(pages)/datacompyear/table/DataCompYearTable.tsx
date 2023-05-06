import { useState } from "react";
import {
  Grid,
  Table,
  TableHeaderRow,
  PagingPanel,
} from "@devexpress/dx-react-grid-material-ui";
import { PagingState, IntegratedPaging } from "@devexpress/dx-react-grid";
import { columns, columnsExtension } from "./DataCompYearColumnsHelpers";

export function DataCompYearTable() {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [pageSizes] = useState([20, 50, 100]);

  return (
    <Grid rows={[]} columns={columns}>
      <PagingState
        currentPage={currentPage}
        onCurrentPageChange={setCurrentPage}
        pageSize={pageSize}
        onPageSizeChange={setPageSize}
      />
      <IntegratedPaging />
      <Table
        messages={{ noData: "Sem dados" }}
        columnExtensions={columnsExtension}
      />
      <PagingPanel pageSizes={pageSizes} />
      <TableHeaderRow />
    </Grid>
  );
}
