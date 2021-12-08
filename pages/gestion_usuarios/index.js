import Scaffold from "../../components/layout/Scaffold";
import IBMDataTable from "../../components/Tabla/IBMDataTable";
import Link from "next/link";
import GenerateHash from "random-hash";
import { useRef, useEffect, useState } from "react";
import { BiArchive, BiUserPlus } from "react-icons/bi";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
} from "@chakra-ui/react";

import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableToolbar,
  TableBatchActions,
  TableBatchAction,
  TableToolbarContent,
  TableToolbarSearch,
  TableToolbarMenu,
  TableToolbarAction,
  TableSelectAll,
  TableSelectRow,
  Button as CButton,
} from "carbon-components-react";

import { Delete, Save, Download } from "carbon-icons";

import { Consultar } from "../../services/API";

function Usuarios() {
  //TODO: Poner el drawer en un componente
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [usuarios, setUsuarios] = useState([]);
  const [header2, setHeader2] = useState([]);
  const [rows2, setRows2] = useState([]);

  let rutas = [
    {
      url: "/gestion_de_usuarios/usuarios",
      nombre: "Usuarios",
      isCurrentPage: true,
    },
  ];

  useEffect(() => {
    const datosTabla = async () => {
      let respuesta = await Consultar("/usuarios", {
        fields: {
          idUsuario: true,
          nombreUsuario: true,
          nombre: true,
          email: true,
          puesto: true,
        },
      });
      if (respuesta.status === 200) {
        setUsuarios(respuesta.data);
      } else {
        console.log("No hay data");
      }
    };
    datosTabla();
  }, []);

  useEffect(() => {
    if (usuarios.length !== 0) {
      let head = [];
      let llaves = Object.keys(usuarios[0]);
      llaves.map((header) => {
        head.push({ key: header, header: header });
      });

      let listaU = [];
      usuarios.map((u) => {
        u.id = GenerateHash({ length: 8 });
        listaU.push(u);
      });
      setRows2(listaU);
      setHeader2(head);
    }
  }, [usuarios]);

  return (
    <Scaffold rutas={rutas} titulo="Gestion de Usuarios" descripcion="Usuarios">
      <Button
        m={5}
        rightIcon={<BiArchive size="40px " />}
        ref={btnRef}
        background="gray.200"
        onClick={onOpen}
      >
        Actividad mas reciente...
      </Button>
      <Link href="/gestion_usuarios/agregar_usuarios">
        <a>
          <Button leftIcon={<BiUserPlus size="40px " />} colorScheme="teal">
            Agregar nuevo usuario
          </Button>
        </a>
      </Link>

      <Drawer onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Ultima Actividad</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Salir
            </Button>
            <Button colorScheme="blue">Exportar</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <DataTable rows={rows2} headers={header2}>
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
                <CButton
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
                </CButton>
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
    </Scaffold>
  );
}

export default Usuarios;
