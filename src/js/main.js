console.log ("Iniciando Carga del Sistema....");
//PACKAGE=require('../../package.json');
window.version = VERSION;
console.log ('Declarafacil PI VP v:' + VERSION );
/*
 global require ('catalogos-muns.js');
 global require ('catalogos.js');
 global require ('config.js');
*/

// añadir los css de las librerias
import '../css/bootstrap.min.css';
import '../css/sweetalert2.min.css';

// añadir los css propios
import '../css/tema.css';

// añadir las librerias que usamos
import $ from 'jquery';
import jQuery from 'jquery';
window.$ = jQuery;
global.$ = $;
import 'bootstrap';
import swal from 'sweetalert2';
window.swal = window.Swal = swal;

import  jsPDF from 'jspdf';
window.jspdf = jsPDF;
import 'jspdf-autotable';

const pako = require('pako');
window.pako = pako;


//window.jsPDF = window.jspdf = jsPDF;

//variables globales
/*var captura={
                "tipo_declaracion":"",
                "formato":"",
                "status_gral":"",
                "declaracion":[]
            };
window.captura=captura;
*/


// añadir los modulos del sistema

//import './mideclaracion.js';

//import './generar_version_pub.js';
//import './imagenesb64.js';
import './generar_version_pub_testada.js';



console.log ('CSS y JS cargados...');
//if (module.hot) {module.hot.accept( './generales.js',function(){console.log ('Aceptando cambios'); window.loadCat=loadCat;})}
//module.hot.accept();
