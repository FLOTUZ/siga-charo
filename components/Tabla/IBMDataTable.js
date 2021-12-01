import Link from "next/link";
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
  PaginationNav
} from "carbon-components-react";
import { IconName } from "react-icons/bi";
import React, { useState } from "react";

import { Delete, Save, Download } from "carbon-icons";

function IBMDataTable({ headers = [], rows = [] }) {
  const [buscar, setBusqueda] = useState("");

  const eliminar = (selectedRows) => {
    console.log("Eliminando", selectedRows);
  };
  const exportar = (selectedRows) => {
    console.log("Exportando", selectedRows);
  };
  const guardar = (selectedRows) => {
    console.log("Guardando", selectedRows);
  };
  const nuevoItem = () => {
    console.log("Nueva Cosa");
  };

  const itemClickeado = (row) => {
    console.log(row);
  };
  return (
    <>
      <DataTable rows={rows} headers={headers} isSortable>
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
            title="Tabla de datos"
            description="Descripcion de la tabla"
            {...getTableContainerProps()}
          >
            <TableToolbar {...getToolbarProps()}>
              <TableBatchActions {...getBatchActionProps()}>
                <TableBatchAction
                  tabIndex={
                    getBatchActionProps().shouldShowBatchActions ? 0 : -1
                  }
                  renderIcon={Delete}
                  onClick={() => eliminar(selectedRows)}
                >
                  Eliminar
                </TableBatchAction>
                <TableBatchAction
                  tabIndex={
                    getBatchActionProps().shouldShowBatchActions ? 0 : -1
                  }
                  renderIcon={Save}
                  onClick={() => guardar(selectedRows)}
                >
                  Guardar
                </TableBatchAction>
                <TableBatchAction
                  tabIndex={
                    getBatchActionProps().shouldShowBatchActions ? 0 : -1
                  }
                  renderIcon={Download}
                  onClick={() => exportar(selectedRows)}
                >
                  Exportar
                </TableBatchAction>
              </TableBatchActions>
              <TableToolbarContent>
                <TableToolbarSearch
                  persistent={true}
                  tabIndex={
                    getBatchActionProps().shouldShowBatchActions ? -1 : 0
                  }
                  onChange={onInputChange}
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
                  onClick={() => nuevoItem()}
                  size="small"
                  kind="primary"
                >
                  Agregar 
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
                    onClick={() => itemClickeado(row)}
                    key={i}
                    {...getRowProps({ row })}
                  >
                    <TableSelectRow {...getSelectionProps({ row })} />
                    {row.cells.map((cell) => (
                      <TableCell key={cell.id}>
                        <Link href="http://google.com" alt="holi">
                          <a>{cell.value}</a>
                        </Link>
                      </TableCell>
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
