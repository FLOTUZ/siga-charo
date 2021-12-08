import Link from "next/link";
import GenerateHash from "random-hash";
import {
  DataTable,
  TableContainer,
  TableToolbar,
  TableBatchActions,
  TableBatchAction,
  TableToolbarContent,
  TableToolbarSearch,
  TableToolbarMenu,
  TableToolbarAction,
  Table,
  TableHead,
  TableRow,
  TableSelectAll,
  TableHeader,
  TableBody,
  TableSelectRow,
  TableCell,
  Button,
  PaginationNav,
} from "carbon-components-react";
import { IconName } from "react-icons/bi";
import { useState, useEffect } from "react";

import { Delete, Save, Download } from "carbon-icons";

function IBMDataTable({ rows = [] }) {
  const [headers, setHeaders] = useState([]);
  const [filas, setFilas] = useState([]);

  useEffect(() => {
    if (rows.length !== 0) {
      let head = [];
      let llaves = Object.keys(rows[0]);
      llaves.map((header) => {
        head.push({ key: header, header: header });
      });

      let registro = [];
      rows.map((u) => {
        u.id = GenerateHash({ length: 8 });
        registro.push(u);
      });
      setFilas(filas);
      setHeaders(head);
    }
  }, [filas, rows]);

  return (
    <>
      <DataTable rows={rows} headers={headers}>
        {({
          rows,
          headers,
          getHeaderProps,
          getRowProps,
          getSelectionProps,
          getToolbarProps,
          getBatchActionProps,
          onInputChange,
          selectedRows,
          getTableProps,
          getTableContainerProps,
        }) => (
          <TableContainer
            title="DataTable"
            description="With batch actions"
            {...getTableContainerProps()}
          >
            <TableToolbar {...getToolbarProps()}>
              <TableBatchActions {...getBatchActionProps()}>
                <TableBatchAction
                  tabIndex={
                    getBatchActionProps().shouldShowBatchActions ? 0 : -1
                  }
                  renderIcon={Delete}
                  onClick={() =>
                    console.log({ message: "Eliminando", selectedRows })
                  }
                >
                  Delete
                </TableBatchAction>
                <TableBatchAction
                  tabIndex={
                    getBatchActionProps().shouldShowBatchActions ? 0 : -1
                  }
                  renderIcon={Save}
                  onClick={() => {
                    console.log({ message: "Guardando", selectedRows });
                  }}
                >
                  Save
                </TableBatchAction>
                <TableBatchAction
                  tabIndex={
                    getBatchActionProps().shouldShowBatchActions ? 0 : -1
                  }
                  renderIcon={Download}
                  onClick={() => {
                    console.log({ message: "Descargando", selectedRows });
                  }}
                >
                  Download
                </TableBatchAction>
              </TableBatchActions>
              <TableToolbarContent>
                <TableToolbarSearch
                  persistent="true"
                  tabIndex={
                    getBatchActionProps().shouldShowBatchActions ? -1 : 0
                  }
                  onChange={() => onInputChange}
                />
                <TableToolbarMenu
                  tabIndex={
                    getBatchActionProps().shouldShowBatchActions ? -1 : 0
                  }
                >
                  <TableToolbarAction onClick={() => alert("Alert 1")}>
                    Action 1
                  </TableToolbarAction>
                  <TableToolbarAction onClick={() => alert("Alert 2")}>
                    Action 2
                  </TableToolbarAction>
                  <TableToolbarAction onClick={() => alert("Alert 3")}>
                    Action 3
                  </TableToolbarAction>
                </TableToolbarMenu>
                <Button
                  tabIndex={
                    getBatchActionProps().shouldShowBatchActions ? -1 : 0
                  }
                  onClick={() =>
                    console.log({ message: "A;adiendo neuva columna" })
                  }
                  size="small"
                  kind="primary"
                >
                  Add new
                </Button>
              </TableToolbarContent>
            </TableToolbar>
            <Table {...getTableProps()}>
              <TableHead>
                <TableRow>
                  <TableSelectAll {...getSelectionProps()} />
                  {headers.map((header, i) => (
                    <TableHeader key={i} {...getHeaderProps({ header })}>
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, i) => (
                  <TableRow
                    onClick={() => {
                      console.log(row.cells[i]);
                    }}
                    key={i}
                    {...getRowProps({ row })}
                  >
                    <TableSelectRow {...getSelectionProps({ row })} />
                    {row.cells.map((cell) => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </DataTable>
      <PaginationNav totalItems={10} />
    </>
  );
}

export default IBMDataTable;
