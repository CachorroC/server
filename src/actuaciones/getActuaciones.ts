import * as fsp from "fs/promises";
import * as fsnp from "fs";
import { intConsultaActuaciones, intConsultaNumeroRadicacion } from "../procesos";
process.env[ "NODE_TLS_REJECT_UNAUTHORIZED" ] = "0";

const ConsultasNumeroRadicacion: intConsultaNumeroRadicacion[] = [
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
        ],
        parametros: {
            numero: "25754418900320170075500",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 0,
            registrosPagina: 20,
            cantidadPaginas: 0,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50769660,
                idConexion: 259,
                llaveProceso: "11001400302120170153200",
                fechaProceso: "2017-10-11T00:00:00",
                fechaUltimaActuacion: "2023-04-14T00:00:00",
                despacho:
                    "JUZGADO 015 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: LIBARDO ALFONSO GONZALEZ TRIVIÑO ",
                esPrivado: false,
                cantFilas: -1,
            },
            {
                idProceso: 81620291,
                idConexion: 320,
                llaveProceso: "11001400302120170153200",
                fechaProceso: null,
                fechaUltimaActuacion: null,
                despacho:
                    "JUZGADO 021 CIVIL MUNICIPAL DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "--- [ PROCESO PRIVADO ] ---",
                esPrivado: true,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400302120170153200",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 2,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50468620,
                idConexion: 259,
                llaveProceso: "11001400300320170088400",
                fechaProceso: "2017-05-26T00:00:00",
                fechaUltimaActuacion: "2023-01-16T00:00:00",
                despacho:
                    "JUZGADO 003 CIVIL MUNICIPAL DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: YESID ALBEIRO RAMOS ",
                esPrivado: false,
                cantFilas: -1,
            },
            {
                idProceso: 113956611,
                idConexion: 320,
                llaveProceso: "11001400300320170088400",
                fechaProceso: "2017-05-24T00:00:00",
                fechaUltimaActuacion: null,
                despacho:
                    "JUZGADO 003 CIVIL MUNICIPAL DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante/accionante: BANCOLOMBIA SA | Demandado/indiciado/causante: YESID ALBEIRO RAMOS  (Emplazado) | Defensor Publico: MARIA HELENA SUAREZ GARCIA ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400300320170088400",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 2,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
        ],
        parametros: {
            numero: "25175408900320180060200",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 0,
            registrosPagina: 20,
            cantidadPaginas: 0,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
        ],
        parametros: {
            numero: "25245408900120170023900",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 0,
            registrosPagina: 20,
            cantidadPaginas: 0,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
        ],
        parametros: {
            numero: "25377408900120180037100",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 0,
            registrosPagina: 20,
            cantidadPaginas: 0,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 112945420,
                idConexion: 259,
                llaveProceso: "11001400303720170139100",
                fechaProceso: "2017-10-11T00:00:00",
                fechaUltimaActuacion: "2022-03-09T00:00:00",
                despacho:
                    "JUZGADO 011 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: JOSE NOEL PUERTA JARAMILLO | Demandado: LUZ DARY PUERTA JARAMILLO ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400303720170139100",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50762570,
                idConexion: 259,
                llaveProceso: "11001400304820170097400",
                fechaProceso: "2017-10-09T00:00:00",
                fechaUltimaActuacion: "2022-12-01T00:00:00",
                despacho:
                    "JUZGADO 007 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: ANDERSON REVELO SANTOS ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400304820170097400",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
        ],
        parametros: {
            numero: "25754400300120170032300",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 0,
            registrosPagina: 20,
            cantidadPaginas: 0,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50777890,
                idConexion: 259,
                llaveProceso: "11001400301520170139400",
                fechaProceso: "2017-10-13T00:00:00",
                fechaUltimaActuacion: "2021-11-08T00:00:00",
                despacho:
                    "JUZGADO 011 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: ANA LUCIA AGUILAR | Demandado: CARMELINA AGUILAR | Demandado: HUMBERTO AVILA MATIAS ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400301520170139400",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 51042800,
                idConexion: 259,
                llaveProceso: "11001400305620180022100",
                fechaProceso: "2018-03-01T00:00:00",
                fechaUltimaActuacion: "2022-11-11T00:00:00",
                despacho:
                    "JUZGADO 007 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: CREAS CONSULTORES S.A.S. ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400305620180022100",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 112628300,
                idConexion: 262,
                llaveProceso: "11001400306820200102100",
                fechaProceso: "2020-10-09T00:00:00",
                fechaUltimaActuacion: "2023-01-23T00:00:00",
                despacho:
                    "JUZGADO 068 CIVIL MUNICIPAL DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A | Demandado: DIMOIN COLOMBIA SAS ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400306820200102100",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
        ],
        parametros: {
            numero: "11001418901320190070800",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 0,
            registrosPagina: 20,
            cantidadPaginas: 0,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50468620,
                idConexion: 259,
                llaveProceso: "11001400300320170088400",
                fechaProceso: "2017-05-26T00:00:00",
                fechaUltimaActuacion: "2023-01-16T00:00:00",
                despacho:
                    "JUZGADO 003 CIVIL MUNICIPAL DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: YESID ALBEIRO RAMOS ",
                esPrivado: false,
                cantFilas: -1,
            },
            {
                idProceso: 113956611,
                idConexion: 320,
                llaveProceso: "11001400300320170088400",
                fechaProceso: "2017-05-24T00:00:00",
                fechaUltimaActuacion: null,
                despacho:
                    "JUZGADO 003 CIVIL MUNICIPAL DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante/accionante: BANCOLOMBIA SA | Demandado/indiciado/causante: YESID ALBEIRO RAMOS  (Emplazado) | Defensor Publico: MARIA HELENA SUAREZ GARCIA ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400300320170088400",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 2,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50521480,
                idConexion: 259,
                llaveProceso: "11001400303420170083600",
                fechaProceso: "2017-06-21T00:00:00",
                fechaUltimaActuacion: "2023-03-13T00:00:00",
                despacho:
                    "JUZGADO 012 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: LUIS ESNEIDER ORDUZ FARFAN ",
                esPrivado: false,
                cantFilas: -1,
            },
            {
                idProceso: 81728891,
                idConexion: 320,
                llaveProceso: "11001400303420170083600",
                fechaProceso: "2017-09-14T00:00:00",
                fechaUltimaActuacion: null,
                despacho:
                    "JUZGADO 034 CIVIL MUNICIPAL DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante/accionante: Banco Bancolombia SA | Demandado/indiciado/causante: LUIS ESNEIDER ORDUZ FARFAN | Defensor Privado: MARIA HELENA SUAREZ GARCIA | Tercero Vinculado: ACREEEDORES    (Emplazado) ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400303420170083600",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 2,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
        ],
        parametros: {
            numero: "25245408900120170023900",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 0,
            registrosPagina: 20,
            cantidadPaginas: 0,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
        ],
        parametros: {
            numero: "25754418900320170075500",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 0,
            registrosPagina: 20,
            cantidadPaginas: 0,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 112048180,
                idConexion: 259,
                llaveProceso: "11001400302520170090300",
                fechaProceso: "2017-08-29T00:00:00",
                fechaUltimaActuacion: "2023-03-30T00:00:00",
                despacho:
                    "JUZGADO 018 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: DARNELLY HERNANDEZ MARTINEZ ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400302520170090300",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50621670,
                idConexion: 259,
                llaveProceso: "11001400300120170100100",
                fechaProceso: "2017-08-09T00:00:00",
                fechaUltimaActuacion: "2023-03-28T00:00:00",
                despacho:
                    "JUZGADO 017 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: WILSON ALFONSO JIMENEZ MENDIETA ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400300120170100100",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50716620,
                idConexion: 259,
                llaveProceso: "11001400300820170113400",
                fechaProceso: "2017-09-19T00:00:00",
                fechaUltimaActuacion: "2023-03-01T00:00:00",
                despacho:
                    "JUZGADO 006 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: FANOR DIAZ AGUDELO ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400300820170113400",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 112945420,
                idConexion: 259,
                llaveProceso: "11001400303720170139100",
                fechaProceso: "2017-10-11T00:00:00",
                fechaUltimaActuacion: "2022-03-09T00:00:00",
                despacho:
                    "JUZGADO 011 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: JOSE NOEL PUERTA JARAMILLO | Demandado: LUZ DARY PUERTA JARAMILLO ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400303720170139100",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50777890,
                idConexion: 259,
                llaveProceso: "11001400301520170139400",
                fechaProceso: "2017-10-13T00:00:00",
                fechaUltimaActuacion: "2021-11-08T00:00:00",
                despacho:
                    "JUZGADO 011 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: ANA LUCIA AGUILAR | Demandado: CARMELINA AGUILAR | Demandado: HUMBERTO AVILA MATIAS ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400301520170139400",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50762570,
                idConexion: 259,
                llaveProceso: "11001400304820170097400",
                fechaProceso: "2017-10-09T00:00:00",
                fechaUltimaActuacion: "2022-12-01T00:00:00",
                despacho:
                    "JUZGADO 007 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: ANDERSON REVELO SANTOS ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400304820170097400",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50769660,
                idConexion: 259,
                llaveProceso: "11001400302120170153200",
                fechaProceso: "2017-10-11T00:00:00",
                fechaUltimaActuacion: "2023-04-14T00:00:00",
                despacho:
                    "JUZGADO 015 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: LIBARDO ALFONSO GONZALEZ TRIVIÑO ",
                esPrivado: false,
                cantFilas: -1,
            },
            {
                idProceso: 81620291,
                idConexion: 320,
                llaveProceso: "11001400302120170153200",
                fechaProceso: null,
                fechaUltimaActuacion: null,
                despacho:
                    "JUZGADO 021 CIVIL MUNICIPAL DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "--- [ PROCESO PRIVADO ] ---",
                esPrivado: true,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400302120170153200",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 2,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
        ],
        parametros: {
            numero: "25754400300120170032300",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 0,
            registrosPagina: 20,
            cantidadPaginas: 0,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 51029180,
                idConexion: 259,
                llaveProceso: "11001400302120180023600",
                fechaProceso: "2018-02-23T00:00:00",
                fechaUltimaActuacion: "2023-03-22T00:00:00",
                despacho:
                    "JUZGADO 013 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: ARTURO LINCE GOMEZ ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400302120180023600",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 51042800,
                idConexion: 259,
                llaveProceso: "11001400305620180022100",
                fechaProceso: "2018-03-01T00:00:00",
                fechaUltimaActuacion: "2022-11-11T00:00:00",
                despacho:
                    "JUZGADO 007 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: CREAS CONSULTORES S.A.S. ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400305620180022100",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 51816100,
                idConexion: 259,
                llaveProceso: "11001418901420190065600",
                fechaProceso: "2019-04-04T00:00:00",
                fechaUltimaActuacion: "2023-04-12T00:00:00",
                despacho:
                    "JUZGADO 014 DE PEQUEÑAS CAUSAS  Y COMPETENCIA MÚLTIPLE DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: LEIDY YANETH VIDAL RODRÍGUEZ ",
                esPrivado: false,
                cantFilas: -1,
            },
            {
                idProceso: 135801811,
                idConexion: 320,
                llaveProceso: "11001418901420190065600",
                fechaProceso: "2019-04-03T00:00:00",
                fechaUltimaActuacion: "2022-09-12T00:00:00",
                despacho:
                    "JUZGADO 014 DE PEQUEÑAS CAUSAS  Y COMPETENCIA MÚLTIPLE DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante/accionante: BANCOLOMBIA SA | Demandado/indiciado/causante: LEIDY YANETH VIDAL RODRIGUEZ (Emplazado) ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001418901420190065600",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 2,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 87350810,
                idConexion: 259,
                llaveProceso: "11001418900820180078500",
                fechaProceso: "2021-03-24T00:00:00",
                fechaUltimaActuacion: "2023-02-27T00:00:00",
                despacho:
                    "JUZGADO 005 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: SANDRA PATRICIA PACHECO RAMIREZ ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001418900820180078500",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
        ],
        parametros: {
            numero: "25175408900320180060200",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 0,
            registrosPagina: 20,
            cantidadPaginas: 0,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
        ],
        parametros: {
            numero: "11001418901320190070800",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 0,
            registrosPagina: 20,
            cantidadPaginas: 0,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
        ],
        parametros: {
            numero: "25377408900120180037100",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 0,
            registrosPagina: 20,
            cantidadPaginas: 0,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 128164881,
                idConexion: 256,
                llaveProceso: "11001400304220200053500",
                fechaProceso: "2020-10-16T00:00:00",
                fechaUltimaActuacion: "2023-03-13T00:00:00",
                despacho:
                    "JUZGADO 042 CIVIL MUNICIPAL DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: SANDRA LEONOR PAEZ MURCIA | Demandado: MARCO TULIO SANCHEZ MEDINA ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400304220200053500",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 112628300,
                idConexion: 262,
                llaveProceso: "11001400306820200102100",
                fechaProceso: "2020-10-09T00:00:00",
                fechaUltimaActuacion: "2023-01-23T00:00:00",
                despacho:
                    "JUZGADO 068 CIVIL MUNICIPAL DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A | Demandado: DIMOIN COLOMBIA SAS ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400306820200102100",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 51935790,
                idConexion: 259,
                llaveProceso: "11001400308520170084900",
                fechaProceso: "2019-05-23T00:00:00",
                fechaUltimaActuacion: "2023-01-16T00:00:00",
                despacho:
                    "JUZGADO 011 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: JOSE EDWIN GARCES ARDILA ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400308520170084900",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 80553011,
                idConexion: 320,
                llaveProceso: "11001310301120170033500",
                fechaProceso: null,
                fechaUltimaActuacion: null,
                despacho:
                    "JUZGADO 011 CIVIL DEL CIRCUITO DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "--- [ PROCESO PRIVADO ] ---",
                esPrivado: true,
                cantFilas: -1,
            },
            {
                idProceso: 1805257424,
                idConexion: 310,
                llaveProceso: "11001310301120170033500",
                fechaProceso: "2017-05-31T00:00:00",
                fechaUltimaActuacion: "2023-03-10T00:00:00",
                despacho:
                    "JUZGADO 001 CIVIL DEL CIRCUITO DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: OMAR DARIO ZEA GALVIS ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001310301120170033500",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 2,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 114256610,
                idConexion: 259,
                llaveProceso: "11001400304320180038400",
                fechaProceso: "2018-04-12T00:00:00",
                fechaUltimaActuacion: "2023-02-23T00:00:00",
                despacho:
                    "JUZGADO 018 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: JHONATAN ANDRES BERNAL PARRA ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400304320180038400",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50477000,
                idConexion: 259,
                llaveProceso: "11001400302620170051100",
                fechaProceso: "2017-05-31T00:00:00",
                fechaUltimaActuacion: "2023-04-13T00:00:00",
                despacho:
                    "JUZGADO 003 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: LUIS CARLOS GUTIERREZ VELANDIA | Demandado: JAQUELINE RODRIGUEZ COLMENARES ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400302620170051100",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
        ],
        parametros: {
            numero: "25035408900120170010800",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 0,
            registrosPagina: 20,
            cantidadPaginas: 0,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 86212261,
                idConexion: 320,
                llaveProceso: "25183400300120170010600",
                fechaProceso: "2017-05-30T00:00:00",
                fechaUltimaActuacion: null,
                despacho:
                    "JUZGADO 001 CIVIL MUNICIPAL DE CHOCONTÁ ",
                departamento: "CUNDINAMARCA",
                sujetosProcesales:
                    "Demandante/accionante: BANCOLOMBIA SA | Demandado/indiciado/causante: ALVARO  RODRIGUEZ ALONSO | Defensor Privado: MARIA HELENA SUAREZ GARCIA ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "25183400300120170010600",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50521190,
                idConexion: 259,
                llaveProceso: "11001400300620170030200",
                fechaProceso: "2017-06-21T00:00:00",
                fechaUltimaActuacion: "2023-02-20T00:00:00",
                despacho:
                    "JUZGADO 013 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: ANA RITA GUZMAN GOMEZ ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400300620170030200",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50593100,
                idConexion: 259,
                llaveProceso: "11001400300620170041900",
                fechaProceso: "2017-07-26T00:00:00",
                fechaUltimaActuacion: "2023-03-23T00:00:00",
                despacho:
                    "JUZGADO 011 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: DERLY CATHERINE CASTRO IZQUIERDO ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400300620170041900",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50517060,
                idConexion: 259,
                llaveProceso: "11001400304220170076000",
                fechaProceso: "2017-06-20T00:00:00",
                fechaUltimaActuacion: "2022-11-10T00:00:00",
                despacho:
                    "JUZGADO 010 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: JOSE URIEL PAEREZ PERDOMO ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400304220170076000",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
        ],
        parametros: {
            numero: "11001400303920170080000",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 0,
            registrosPagina: 20,
            cantidadPaginas: 0,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 111939890,
                idConexion: 259,
                llaveProceso: "11001400302220170056700",
                fechaProceso: "2017-06-15T00:00:00",
                fechaUltimaActuacion: "2023-02-14T00:00:00",
                despacho:
                    "JUZGADO 002 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: RHONALD MEZA  TARAPUES ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400302220170056700",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 51619370,
                idConexion: 259,
                llaveProceso: "11001400308220170068000",
                fechaProceso: "2019-01-29T00:00:00",
                fechaUltimaActuacion: "2023-04-12T00:00:00",
                despacho:
                    "JUZGADO 018 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: EDUARDO ENRIQUE ARANGO CHACON ",
                esPrivado: false,
                cantFilas: -1,
            },
            {
                idProceso: 81869501,
                idConexion: 320,
                llaveProceso: "11001400308220170068000",
                fechaProceso: "2017-06-16T00:00:00",
                fechaUltimaActuacion: null,
                despacho:
                    "JUZGADO 082 CIVIL MUNICIPAL DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante/accionante: Banco Bancolombia SA | Demandado/indiciado/causante: EDUARDO ENRIQUE ARANGO CHACON    | Defensor Privado: MARIA HELENA SUAREZ GARCIA ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400308220170068000",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 2,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50508870,
                idConexion: 259,
                llaveProceso: "11001400300420170057500",
                fechaProceso: "2017-06-15T00:00:00",
                fechaUltimaActuacion: "2023-04-18T00:00:00",
                despacho:
                    "JUZGADO 018 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: SONIA MAZUERA ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400300420170057500",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50514310,
                idConexion: 259,
                llaveProceso: "11001400305920170048300",
                fechaProceso: "2017-06-20T00:00:00",
                fechaUltimaActuacion: "2023-02-27T00:00:00",
                despacho:
                    "JUZGADO 015 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: DANIEL HERNANDEZ GONZALEZ ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400305920170048300",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 28937944,
                idConexion: 310,
                llaveProceso: "11001310302520170073600",
                fechaProceso: "2017-10-03T00:00:00",
                fechaUltimaActuacion: "2022-06-15T00:00:00",
                despacho:
                    "JUZGADO 002 CIVIL DEL CIRCUITO DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S. A. | Demandado: MIGUEL ANGEL HUERTAS VALENCIA ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001310302520170073600",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50522530,
                idConexion: 259,
                llaveProceso: "11001400307020170056600",
                fechaProceso: "2017-06-22T00:00:00",
                fechaUltimaActuacion: "2021-12-13T00:00:00",
                despacho:
                    "JUZGADO 014 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: NICOLAS FERNANDO MONTOYA ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400307020170056600",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 97088411,
                idConexion: 320,
                llaveProceso: "11001400304720170152000",
                fechaProceso: null,
                fechaUltimaActuacion: null,
                despacho:
                    "JUZGADO 047 CIVIL MUNICIPAL DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "--- [ PROCESO PRIVADO ] ---",
                esPrivado: true,
                cantFilas: -1,
            },
            {
                idProceso: 109959053,
                idConexion: 261,
                llaveProceso: "11001400304720170152000",
                fechaProceso: "2017-08-30T00:00:00",
                fechaUltimaActuacion: "2022-09-02T00:00:00",
                despacho:
                    "JUZGADO 047 CIVIL MUNICIPAL DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: MILCIADES GALINDO CASTEBLANCO | Demandado: GERMAN ALONSO SANCHEZ PICO ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400304720170152000",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 2,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50593640,
                idConexion: 259,
                llaveProceso: "11001400304520170090500",
                fechaProceso: "2017-07-26T00:00:00",
                fechaUltimaActuacion: "2022-02-25T00:00:00",
                despacho:
                    "JUZGADO 002 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: URIEL RUIZ DIAZ ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400304520170090500",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 51497380,
                idConexion: 259,
                llaveProceso: "11001400307620170063500",
                fechaProceso: "2018-11-22T00:00:00",
                fechaUltimaActuacion: "2022-12-05T00:00:00",
                despacho:
                    "JUZGADO 004 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: CARLOS DANIEL CARDENAS AVILES | Demandante: BANCOLOMBIA S.A. | Demandado: FREDY MENESES ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400307620170063500",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50598770,
                idConexion: 259,
                llaveProceso: "11001400300320170126400",
                fechaProceso: "2017-07-27T00:00:00",
                fechaUltimaActuacion: "2023-03-29T00:00:00",
                despacho:
                    "JUZGADO 003 CIVIL MUNICIPAL DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: NIDIA DORANCY GOMEZ BLANCO ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400300320170126400",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50760030,
                idConexion: 259,
                llaveProceso: "11001400301120170108400",
                fechaProceso: "2017-10-06T00:00:00",
                fechaUltimaActuacion: "2023-02-22T00:00:00",
                despacho:
                    "JUZGADO 002 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: TITULARIZADORA COLOMBIANA S.A. HITOS | Demandado: JAVIER GONZALEZ TAGUA ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400301120170108400",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50623380,
                idConexion: 259,
                llaveProceso: "11001400302520170080700",
                fechaProceso: "2017-08-09T00:00:00",
                fechaUltimaActuacion: "2021-11-29T00:00:00",
                despacho:
                    "JUZGADO 025 CIVIL MUNICIPAL DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: JUAN CARLOS TOVAR TOLEDO ",
                esPrivado: false,
                cantFilas: -1,
            },
            {
                idProceso: 81652411,
                idConexion: 320,
                llaveProceso: "11001400302520170080700",
                fechaProceso: null,
                fechaUltimaActuacion: null,
                despacho:
                    "JUZGADO 025 CIVIL MUNICIPAL DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "--- [ PROCESO PRIVADO ] ---",
                esPrivado: true,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400302520170080700",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 2,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
        ],
        parametros: {
            numero: "25175408900220170041200",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 0,
            registrosPagina: 20,
            cantidadPaginas: 0,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 51357750,
                idConexion: 259,
                llaveProceso: "11001400307920170108200",
                fechaProceso: "2018-08-09T00:00:00",
                fechaUltimaActuacion: "2023-01-19T00:00:00",
                despacho:
                    "JUZGADO 001 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A | Demandado: JHON ALEXANDER VALENCIA MARQUEZ ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400307920170108200",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
        ],
        parametros: {
            numero: "11001400302420170175000",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 0,
            registrosPagina: 20,
            cantidadPaginas: 0,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
        ],
        parametros: {
            numero: "73449408900220170025900",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 0,
            registrosPagina: 20,
            cantidadPaginas: 0,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 110120573,
                idConexion: 261,
                llaveProceso: "11001400304520170106300",
                fechaProceso: "2017-08-31T00:00:00",
                fechaUltimaActuacion: "2023-03-07T00:00:00",
                despacho:
                    "JUZGADO 045 CIVIL MUNICIPAL DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: FLOR ESPERANZA GUTIERREZ ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400304520170106300",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50669130,
                idConexion: 259,
                llaveProceso: "11001400301220170097100",
                fechaProceso: "2017-08-30T00:00:00",
                fechaUltimaActuacion: "2022-03-17T00:00:00",
                despacho:
                    "JUZGADO 015 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: FABIO ALBERTO RIVERA MESA | Demandado: NELIDA DEL CARMEN RIVERA MESA ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400301220170097100",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 86374941,
                idConexion: 320,
                llaveProceso: "25754400300220170026500",
                fechaProceso: "2017-08-31T00:00:00",
                fechaUltimaActuacion: null,
                despacho:
                    "JUZGADO 002 CIVIL MUNICIPAL DE SOACHA ",
                departamento: "CUNDINAMARCA",
                sujetosProcesales:
                    "Demandante/accionante: Banco Bancolombia SA | Demandado/indiciado/causante: JEOVANY  ROJAS CRUZ | Defensor Privado: MARIA HELENA SUAREZ GARCIA ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "25754400300220170026500",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50672820,
                idConexion: 259,
                llaveProceso: "11001400306420170119100",
                fechaProceso: "2017-08-31T00:00:00",
                fechaUltimaActuacion: "2021-11-19T00:00:00",
                despacho:
                    "JUZGADO 007 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: CESAR UMAÑA CAÑON ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400306420170119100",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 51006610,
                idConexion: 259,
                llaveProceso: "11001400302120180016300",
                fechaProceso: "2018-02-13T00:00:00",
                fechaUltimaActuacion: "2023-01-11T00:00:00",
                despacho:
                    "JUZGADO 021 CIVIL MUNICIPAL DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: JOSE ANTONIO CASTILLO CORTES ",
                esPrivado: false,
                cantFilas: -1,
            },
            {
                idProceso: 81643141,
                idConexion: 320,
                llaveProceso: "11001400302120180016300",
                fechaProceso: null,
                fechaUltimaActuacion: null,
                despacho:
                    "JUZGADO 021 CIVIL MUNICIPAL DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "--- [ PROCESO PRIVADO ] ---",
                esPrivado: true,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400302120180016300",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 2,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 86524020,
                idConexion: 259,
                llaveProceso: "11001400305520170086000",
                fechaProceso: "2017-09-04T00:00:00",
                fechaUltimaActuacion: "2023-03-27T00:00:00",
                despacho:
                    "JUZGADO 015 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: GERARDO ANTONIO MONCADA VEGA ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400305520170086000",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50685700,
                idConexion: 259,
                llaveProceso: "11001400302820170084900",
                fechaProceso: "2017-09-05T00:00:00",
                fechaUltimaActuacion: "2022-06-16T00:00:00",
                despacho:
                    "JUZGADO 016 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: JOSE LUIS TORRES TAMAYO ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400302820170084900",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50675410,
                idConexion: 259,
                llaveProceso: "11001400306920170084500",
                fechaProceso: "2017-09-01T00:00:00",
                fechaUltimaActuacion: "2023-01-18T00:00:00",
                despacho:
                    "JUZGADO 025 CIVIL MUNICIPAL DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A | Demandado: MARIA OLGA CASTAÑEDA PERUGACHI ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400306920170084500",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50687430,
                idConexion: 259,
                llaveProceso: "11001400301620170087500",
                fechaProceso: "2017-09-06T00:00:00",
                fechaUltimaActuacion: "2022-03-09T00:00:00",
                despacho:
                    "JUZGADO 018 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: JORGE ALBERTO MARTINEZ BENDECK ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400301620170087500",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50685530,
                idConexion: 259,
                llaveProceso: "11001400301320170116200",
                fechaProceso: "2017-09-05T00:00:00",
                fechaUltimaActuacion: "2023-04-17T00:00:00",
                despacho:
                    "JUZGADO 016 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: CARLOS JAVIER BECERRA BENAVIDES ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400301320170116200",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
        ],
        parametros: {
            numero: "25175408900320170047700",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 0,
            registrosPagina: 20,
            cantidadPaginas: 0,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50692590,
                idConexion: 259,
                llaveProceso: "11001400301320170117800",
                fechaProceso: "2017-09-08T00:00:00",
                fechaUltimaActuacion: "2023-04-17T00:00:00",
                despacho:
                    "JUZGADO 013 CIVIL MUNICIPAL DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: SOL JUDITH BUITRAGO DUQUE ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400301320170117800",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 112758450,
                idConexion: 259,
                llaveProceso: "11001400300820170105800",
                fechaProceso: "2017-09-05T00:00:00",
                fechaUltimaActuacion: "2022-07-21T00:00:00",
                despacho:
                    "JUZGADO 001 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: ANDRES FELIPE GUTIERREZ TRUJILLO ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400300820170105800",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50875780,
                idConexion: 259,
                llaveProceso: "11001400300920170127900",
                fechaProceso: "2017-11-28T00:00:00",
                fechaUltimaActuacion: "2022-01-26T00:00:00",
                despacho:
                    "JUZGADO 018 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: JOSE HERNANDO SANCHEZ VALBUENA ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400300920170127900",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50721470,
                idConexion: 259,
                llaveProceso: "11001400301720170119500",
                fechaProceso: "2017-09-20T00:00:00",
                fechaUltimaActuacion: "2023-04-18T00:00:00",
                despacho:
                    "JUZGADO 017 CIVIL MUNICIPAL DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: ALIRIO HEREDIA BUITRAGO ",
                esPrivado: false,
                cantFilas: -1,
            },
            {
                idProceso: 127748331,
                idConexion: 320,
                llaveProceso: "11001400301720170119500",
                fechaProceso: "2017-09-19T00:00:00",
                fechaUltimaActuacion: null,
                despacho:
                    "JUZGADO 017 CIVIL MUNICIPAL DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante/accionante: Banco de Colombia S.A | Demandado/indiciado/causante: ALIRIO  HEREDIA BUITRAGO (Emplazado) | Defensor Privado: MARIA HELENA SUAREZ GARCIA ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400301720170119500",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 2,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50711570,
                idConexion: 259,
                llaveProceso: "11001400301820170152200",
                fechaProceso: "2017-09-18T00:00:00",
                fechaUltimaActuacion: "2022-09-16T00:00:00",
                despacho:
                    "JUZGADO 016 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: JOSE AHINSONJOVER TORO VARGAS ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400301820170152200",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
        ],
        parametros: {
            numero: "11001410375220170012800",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 0,
            registrosPagina: 20,
            cantidadPaginas: 0,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 65700110,
                idConexion: 259,
                llaveProceso: "11001400306320170092400",
                fechaProceso: "2017-09-22T00:00:00",
                fechaUltimaActuacion: "2022-11-24T00:00:00",
                despacho:
                    "JUZGADO 001 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: HERNANDO PULECIO PAREDES ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400306320170092400",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 110568033,
                idConexion: 261,
                llaveProceso: "11001400305120170111300",
                fechaProceso: "2017-09-27T00:00:00",
                fechaUltimaActuacion: "2023-02-08T00:00:00",
                despacho:
                    "JUZGADO 051 CIVIL MUNICIPAL DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: RITA CECILIA FERNANDEZ IBAÑEZ ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400305120170111300",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
        ],
        parametros: {
            numero: "15842408900120170009500",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 0,
            registrosPagina: 20,
            cantidadPaginas: 0,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50765770,
                idConexion: 259,
                llaveProceso: "11001400306820170130600",
                fechaProceso: "2017-10-10T00:00:00",
                fechaUltimaActuacion: "2022-09-27T00:00:00",
                despacho:
                    "JUZGADO 015 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A | Demandado: NESTOR JULIO MARTINEZ ORJUELA ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400306820170130600",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
        ],
        parametros: {
            numero: "25148408900120170009600",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 0,
            registrosPagina: 20,
            cantidadPaginas: 0,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50763460,
                idConexion: 259,
                llaveProceso: "11001400303320170147400",
                fechaProceso: "2017-10-09T00:00:00",
                fechaUltimaActuacion: "2022-03-07T00:00:00",
                despacho:
                    "JUZGADO 002 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: LUIS AUGUSTO SANCHEZ ORTIZ ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400303320170147400",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50764880,
                idConexion: 259,
                llaveProceso: "11001400300120170130900",
                fechaProceso: "2017-10-09T00:00:00",
                fechaUltimaActuacion: "2023-03-08T00:00:00",
                despacho:
                    "JUZGADO 010 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: ANA BEATRIZ CORREDOR DE OSORIO ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400300120170130900",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50762570,
                idConexion: 259,
                llaveProceso: "11001400304820170097400",
                fechaProceso: "2017-10-09T00:00:00",
                fechaUltimaActuacion: "2022-12-01T00:00:00",
                despacho:
                    "JUZGADO 007 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: ANDERSON REVELO SANTOS ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400304820170097400",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 51499790,
                idConexion: 259,
                llaveProceso: "11001400307620170101600",
                fechaProceso: "2018-11-23T00:00:00",
                fechaUltimaActuacion: "2023-03-30T00:00:00",
                despacho:
                    "JUZGADO 017 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: MAURICIO BOTERO WOLFF | Demandante: BANCOLOMBIA S.A. | Demandado: BLANCA NUBIA LOPEZ CIFUENTES | Demandado: MARIO DE JESUS OSSA PULGARIN ",
                esPrivado: false,
                cantFilas: -1,
            },
            {
                idProceso: 81847081,
                idConexion: 320,
                llaveProceso: "11001400307620170101600",
                fechaProceso: null,
                fechaUltimaActuacion: null,
                despacho:
                    "JUZGADO 076 CIVIL MUNICIPAL DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "--- [ PROCESO PRIVADO ] ---",
                esPrivado: true,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400307620170101600",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 2,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 51465090,
                idConexion: 259,
                llaveProceso: "11001400307820170097500",
                fechaProceso: "2018-10-26T00:00:00",
                fechaUltimaActuacion: "2023-04-13T00:00:00",
                despacho:
                    "JUZGADO 012 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: JOGLI JOAQUIN OTERO VARGAS ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400307820170097500",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50782960,
                idConexion: 259,
                llaveProceso: "11001400301720170133600",
                fechaProceso: "2017-10-18T00:00:00",
                fechaUltimaActuacion: "2022-03-28T00:00:00",
                despacho:
                    "JUZGADO 015 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: NATALIA CUESTAS MONDRAGON ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400301720170133600",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50817380,
                idConexion: 259,
                llaveProceso: "11001400302220170120800",
                fechaProceso: "2017-11-01T00:00:00",
                fechaUltimaActuacion: "2023-01-31T00:00:00",
                despacho:
                    "JUZGADO 020 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: CALZADO RIVOLI  S.A.S. | Demandado: MARTHA LUCIA CUARTAS  BETANCOURT ",
                esPrivado: false,
                cantFilas: -1,
            },
            {
                idProceso: 81647611,
                idConexion: 320,
                llaveProceso: "11001400302220170120800",
                fechaProceso: null,
                fechaUltimaActuacion: null,
                despacho:
                    "JUZGADO 022 CIVIL MUNICIPAL DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "--- [ PROCESO PRIVADO ] ---",
                esPrivado: true,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400302220170120800",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 2,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 106185210,
                idConexion: 259,
                llaveProceso: "11001400305020170133600",
                fechaProceso: "2017-11-21T00:00:00",
                fechaUltimaActuacion: "2023-01-19T00:00:00",
                despacho:
                    "JUZGADO 014 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: LEONARDO SANABRIA SANABRA ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400305020170133600",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50859050,
                idConexion: 259,
                llaveProceso: "11001400300420170126600",
                fechaProceso: "2017-11-21T00:00:00",
                fechaUltimaActuacion: "2022-02-04T00:00:00",
                despacho:
                    "JUZGADO 009 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: GILBERTO JAIME BETANCOURT ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400300420170126600",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
        ],
        parametros: {
            numero: "25899400300220170013100",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 0,
            registrosPagina: 20,
            cantidadPaginas: 0,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 112730580,
                idConexion: 259,
                llaveProceso: "11001400306420170162300",
                fechaProceso: "2017-11-27T00:00:00",
                fechaUltimaActuacion: "2023-03-13T00:00:00",
                despacho:
                    "JUZGADO 016 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: ORLANDO ENRIQUE NOVOA BARRETO ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400306420170162300",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 51465700,
                idConexion: 259,
                llaveProceso: "11001400307820170116400",
                fechaProceso: "2018-10-26T00:00:00",
                fechaUltimaActuacion: "2022-03-29T00:00:00",
                despacho:
                    "JUZGADO 016 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: NESTOR ALBERTO CRISTANCHO LOPEZ ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400307820170116400",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50873000,
                idConexion: 259,
                llaveProceso: "11001400302020170147700",
                fechaProceso: "2017-11-27T00:00:00",
                fechaUltimaActuacion: "2023-03-31T00:00:00",
                despacho:
                    "JUZGADO 007 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: JOSÉ ANTONIO MONTEALEGRE HERNÁNDEZ | Demandado: YULY MARCELA PEÑA GARCIA ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400302020170147700",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 64793050,
                idConexion: 259,
                llaveProceso: "11001400307120170125000",
                fechaProceso: "2017-12-13T00:00:00",
                fechaUltimaActuacion: "2022-03-10T00:00:00",
                despacho:
                    "JUZGADO 007 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: OSCAR HUMBERTO GOMEZ CHUCHIN ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400307120170125000",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 86157021,
                idConexion: 320,
                llaveProceso: "25126408900220180004800",
                fechaProceso: "2018-02-02T00:00:00",
                fechaUltimaActuacion: null,
                despacho:
                    "JUZGADO 002 PROMISCUO MUNICIPAL DE CAJICÁ ",
                departamento: "CUNDINAMARCA",
                sujetosProcesales:
                    "Demandante/accionante: BANCOLOMBIA SA | Demandado/indiciado/causante: JUAN CAMILO CHINGATE PENAGOS (Emplazado) | Defensor Privado: MARIA HELENA SUAREZ GARCIA ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "25126408900220180004800",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 51107470,
                idConexion: 259,
                llaveProceso: "11001400301420180040600",
                fechaProceso: "2018-04-09T00:00:00",
                fechaUltimaActuacion: "2018-04-26T00:00:00",
                despacho:
                    "JUZGADO 014 CIVIL MUNICIPAL DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: JORGE ARMANDO PEREZ JIMENEZ ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400301420180040600",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50989890,
                idConexion: 259,
                llaveProceso: "11001400305920180009000",
                fechaProceso: "2018-02-06T00:00:00",
                fechaUltimaActuacion: "2022-03-25T00:00:00",
                despacho:
                    "JUZGADO 007 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: MARIA MARIN DE OROZCO ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400305920180009000",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50990920,
                idConexion: 259,
                llaveProceso: "11001400303720180011100",
                fechaProceso: "2018-02-06T00:00:00",
                fechaUltimaActuacion: "2023-02-02T00:00:00",
                despacho:
                    "JUZGADO 008 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: SANDRA PATRICIA BELTRAN  OVIEDO ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400303720180011100",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50990370,
                idConexion: 259,
                llaveProceso: "11001400305220180011700",
                fechaProceso: "2018-02-06T00:00:00",
                fechaUltimaActuacion: "2023-04-13T00:00:00",
                despacho:
                    "JUZGADO 017 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA | Demandado: DARLEY JULIED PAEZ ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400305220180011700",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
        ],
        parametros: {
            numero: "25754408900220180011300",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 0,
            registrosPagina: 20,
            cantidadPaginas: 0,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 51149410,
                idConexion: 259,
                llaveProceso: "11001400300420180047500",
                fechaProceso: "2018-04-26T00:00:00",
                fechaUltimaActuacion: "2023-02-27T00:00:00",
                despacho:
                    "JUZGADO 007 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: ADOLFO LEON DAZA FERNANDEZ ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400300420180047500",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 121826111,
                idConexion: 320,
                llaveProceso: "25307400300320210053900",
                fechaProceso: "2021-10-27T00:00:00",
                fechaUltimaActuacion: "2023-03-10T00:00:00",
                despacho:
                    "JUZGADO 003 CIVIL MUNICIPAL DE GIRARDOT ",
                departamento: "CUNDINAMARCA",
                sujetosProcesales:
                    "Demandante/accionante: BANCOLOMBIA SA | Demandado/indiciado/causante: adriana  vanegas peña | Defensor Privado: CARMEN CECILIA RAMIREZ MUÑOZ ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "25307400300320210053900",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 51154840,
                idConexion: 259,
                llaveProceso: "11001400300620180045400",
                fechaProceso: "2018-04-30T00:00:00",
                fechaUltimaActuacion: "2023-04-10T00:00:00",
                despacho:
                    "JUZGADO 017 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: SMARTITECH SAS | Demandado: EDISSON ARMANDO KARL BUITRAGO ",
                esPrivado: false,
                cantFilas: -1,
            },
            {
                idProceso: 81649171,
                idConexion: 320,
                llaveProceso: "11001400300620180045400",
                fechaProceso: null,
                fechaUltimaActuacion: null,
                despacho:
                    "JUZGADO 006 CIVIL MUNICIPAL DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "--- [ PROCESO PRIVADO ] ---",
                esPrivado: true,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400300620180045400",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 2,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 86958040,
                idConexion: 259,
                llaveProceso: "11001418901620190108500",
                fechaProceso: "2021-03-12T00:00:00",
                fechaUltimaActuacion: "2023-02-28T00:00:00",
                despacho:
                    "JUZGADO 002 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: ANGELICA NATHALY ROZO FRANCO ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001418901620190108500",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 51918470,
                idConexion: 259,
                llaveProceso: "11001400308120180051400",
                fechaProceso: "2019-05-17T00:00:00",
                fechaUltimaActuacion: "2023-03-14T00:00:00",
                despacho:
                    "JUZGADO 001 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: MARIA CLARA REYES REYES ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400308120180051400",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 89137980,
                idConexion: 259,
                llaveProceso: "11001400305120180085000",
                fechaProceso: "2018-07-16T00:00:00",
                fechaUltimaActuacion: "2023-01-25T00:00:00",
                despacho:
                    "JUZGADO 004 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: SANDRA LILIANA CRUZ BELTRAN ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400305120180085000",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 51306830,
                idConexion: 259,
                llaveProceso: "11001400303620180081800",
                fechaProceso: "2018-07-13T00:00:00",
                fechaUltimaActuacion: "2023-03-27T00:00:00",
                despacho:
                    "JUZGADO 015 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: ADRIANA LUCIA MORA PLATA ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400303620180081800",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 51341610,
                idConexion: 259,
                llaveProceso: "11001400301420180092900",
                fechaProceso: "2018-08-01T00:00:00",
                fechaUltimaActuacion: "2023-03-15T00:00:00",
                despacho:
                    "JUZGADO 009 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: JOSE RODRIGO GARCIA QUINTERO ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400301420180092900",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 52160520,
                idConexion: 259,
                llaveProceso: "11001400308220180096400",
                fechaProceso: "2019-02-15T00:00:00",
                fechaUltimaActuacion: "2022-03-24T00:00:00",
                despacho:
                    "JUZGADO 014 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: JOSE RAMON ESTRADA CASTILLO ",
                esPrivado: false,
                cantFilas: -1,
            },
            {
                idProceso: 112967583,
                idConexion: 197,
                llaveProceso: "11001400308220180096400",
                fechaProceso: "2022-05-11T00:00:00",
                fechaUltimaActuacion: "2022-05-25T00:00:00",
                despacho:
                    "JUZGADO 001 CIVIL MUNICIPAL DE ENVIGADO ",
                departamento: "ANTIOQUIA",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: JOSE RAMON ESTRADA CASTILLO ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400308220180096400",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 2,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 71079290,
                idConexion: 259,
                llaveProceso: "11001418901220180064400",
                fechaProceso: "2019-11-15T00:00:00",
                fechaUltimaActuacion: "2023-03-16T00:00:00",
                despacho:
                    "JUZGADO 017 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA | Demandado: BIBIANA PATRICIA ESGUERRA VASQUEZ ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001418901220180064400",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 64673240,
                idConexion: 259,
                llaveProceso: "11001418901220180095100",
                fechaProceso: "2019-06-28T00:00:00",
                fechaUltimaActuacion: "2022-05-02T00:00:00",
                despacho:
                    "JUZGADO 011 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA SA | Demandado: ROSALIA CHARRY SARMIENTO ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001418901220180095100",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 50780430,
                idConexion: 259,
                llaveProceso: "11001400300220170100200",
                fechaProceso: "2017-10-17T00:00:00",
                fechaUltimaActuacion: "2023-03-14T00:00:00",
                despacho:
                    "JUZGADO 013 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandado: JOGLI JOAQUIN OTERO VARGAS ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400300220170100200",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
    {
        tipoConsulta: "NumeroRadicacion",
        procesos: [
            {
                idProceso: 65701460,
                idConexion: 259,
                llaveProceso: "11001400306320170129000",
                fechaProceso: "2017-12-13T00:00:00",
                fechaUltimaActuacion: "2023-03-16T00:00:00",
                despacho:
                    "JUZGADO 019 CIVIL MUNICIPAL DE EJECUCIÓN DE SENTENCIAS DE BOGOTÁ ",
                departamento: "BOGOTÁ",
                sujetosProcesales:
                    "Demandante: BANCOLOMBIA S.A. | Demandante: BANCOLOMBIA | Demandado: DIANA PATRICIA BARRETO OSMA ",
                esPrivado: false,
                cantFilas: -1,
            },
        ],
        parametros: {
            numero: "11001400306320170129000",
            nombre: null,
            tipoPersona: null,
            idSujeto: null,
            ponente: null,
            claseProceso: null,
            codificacionDespacho: null,
            soloActivos: false,
        },
        paginacion: {
            cantidadRegistros: 1,
            registrosPagina: 20,
            cantidadPaginas: 1,
            pagina: 1,
            paginas: null,
        },
    },
];


export async function fetchActuaciones ( idProceso: number ) {
    const res = await fetch(
        `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${ idProceso }`
    );
    console.log( "res: " + res );
    const dataRaw =
        ( await res.json() ) as intConsultaActuaciones;
    console.log( "dataRaw:" + dataRaw );
    const actuacionesRaw = JSON.stringify( dataRaw );
    console.log( "actuacionesRaw:" + actuacionesRaw );
    if ( fsnp.existsSync( `actuaciones/${ idProceso }` ) ) {
        console.log( "la direccion si existe" );
        fsp.appendFile(
            `actuaciones/${ idProceso }/actuaciones.json`,
            actuacionesRaw
        );
    }
    else {
        console.log( "la direccion no existe" );
        fsp.mkdir( `actuaciones/${ idProceso }` ).then(
            () => {
                fsp.appendFile(
                    `actuaciones/${ idProceso }/actuaciones.json`,
                    actuacionesRaw
                );
            }
        );
    }

}

export async function getActuaciones () {
    const res = ConsultasNumeroRadicacion.forEach(
        ( radicado, index ) => {
            console.log( "radicado:" + radicado );
            console.log( "index:" + index );
            setTimeout( () => {
                if ( radicado.procesos.length === 0 ) {
                    console.log( "el radicado devolvio 0 procesos" );
                    return;
                }
                else {
                    radicado.procesos.forEach(
                        ( proceso, i ) => {

                            console.log( "proceso:" + proceso );
                            console.log( "i:" + i );
                            setTimeout( () => {
                                const idProceso = proceso.idProceso;
                                console.log( "idProceso:" + idProceso );
                                fetchActuaciones( idProceso );
                            }, i * 10000 );
                        }
                    );
                }
            }
                , index * 1000 );
        }
    );
    console.log( "getActaciones: " + res );
    return res;
}

console.log( getActuaciones() );