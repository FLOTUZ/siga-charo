import Head from "next/head";
import Image from "next/image";
import Router from "next/router";

import Logo from "../assets/img/logo-ayuntamiento.svg";
import {
  FormLabel,
  InputRightElement,
  Button,
  Input,
  InputGroup,
  useToast,
  Heading,
  VStack,
  Alert,
  AlertIcon,
  Box,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";

import { useState } from "react";
import axios from "axios";

export default function Home() {
  const toast = useToast();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cargando, setCargando] = useState(false);

  const verPassword = () => setShow(!show);

  const validar = (e) => {
    e.preventDefault();

    let data = {
      where: {
        email: email,
        password: password,
      },
      fields: {
        idUsuario: true,
        nombreUsuario: true,
        nombre: true,
        apellidoPaterno: true,
        apellidoMaterno: true,
        email: true,
        puesto: true,
        haceSolicitudes: true,
        altaDeApoyos: true,
        autorizaApoyos: true,
        haceReportes: true,
        administraSistema: true,
        activo: true,
      },
    };

    let urlParameters = encodeURIComponent(JSON.stringify(data));

    //Se obtiene usuario del servidor
    axios({
      method: "get",
      url:
        process.env.NEXT_PUBLIC_API_URL + "/usuarios?filter=" + urlParameters,
    })
      .then(function (respuesta) {
        if (respuesta.data.length > 0) {
          setUserLoged(respuesta.data[0]);
          localStorage.setItem("user", JSON.stringify(respuesta.data[0]));

          async () =>
            toast({
              title: `Bienvenido ${respuesta.data[0].nombre}`,
              status: "success",
              position: "bottom-left",
              duration: 7000,
            });

          setCargando(false);
          Router.push("/dashboard");
        } else {
          setCargando(false);
          toast({
            title: "Error de autenticación",
            description: "Verifica que tus credenciales sean correctas",
            status: "error",
            position: "bottom-left",
            duration: 7000,
          });
        }
      })
      .catch(function (error) {
        setCargando(false);
        toast({
          position: "bottom-left",
          render: () => (
            <Alert status="error">
              <AlertIcon />
              <Box flex="1">
                <AlertTitle>Error de sistema</AlertTitle>
                <AlertDescription display="block">
                  Es posible que el servidor no este disponible, contacte con el
                  administrador
                </AlertDescription>
              </Box>
              <CloseButton position="absolute" right="8px" top="8px" />
            </Alert>
          ),
        });
      });
  };

  return (
    <div>
      <Head>
        <title>Login - Siga</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="login">
        <VStack paddingStart="1.5rem">
          <Image src={Logo} height={300} width={300} alt="Logo Siga" />
          <Heading paddingTop="2rem" alignSelf="center">
            Login
          </Heading>
          <div className="form-login">
            <form onSubmit={(e) => validar(e)}>
              {/* ------  EMAIL    -------- */}
              <FormLabel>Email</FormLabel>
              <Input
                id="email"
                type="email"
                placeholder="email@mail.com"
                variant="filled"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* ------  PASSWORD   -------- */}
              <FormLabel marginTop="1rem">Password</FormLabel>
              <InputGroup size="md">
                <Input
                  id="password"
                  pr="4.5rem"
                  placeholder="Contraseña"
                  variant="filled"
                  value={password}
                  type={show ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    marginEnd="0.5rem"
                    size="sm"
                    onClick={verPassword}
                  >
                    {show ? "Ocultar" : "Ver"}
                  </Button>
                </InputRightElement>
              </InputGroup>

              {/* ------  BTN INGRESAR   -------- */}
              <Button
                mt={4}
                size="lg"
                isLoading={cargando}
                colorScheme="teal"
                type="submit"
              >
                Ingresar
              </Button>
            </form>
          </div>
        </VStack>
        {/* IMAGEN DE FONDO */}
        <div className="img-login"></div>
      </main>
    </div>
  );
}
