-- MariaDB dump 10.19  Distrib 10.4.18-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: pysw
-- ------------------------------------------------------
-- Server version	10.4.18-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `organismo`
--

DROP TABLE IF EXISTS `organismo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `organismo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `image_Url` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `organismo`
--

LOCK TABLES `organismo` WRITE;
/*!40000 ALTER TABLE `organismo` DISABLE KEYS */;
INSERT INTO `organismo` VALUES (1,'AFIP','https://i.ibb.co/ckhH7j0/afip.png'),(2,'ANSES','https://i.ibb.co/HVZy0k3/anses.png'),(3,'MUNICIPALIDAD SPJ','https://i.ibb.co/qppWZW3/municipalidad-spj.png\"'),(4,'RENTAS','https://i.ibb.co/mBfZTjp/Rentas.jpg'),(5,'PAMI','https://i.ibb.co/fQr9Xq5/pami.jpg'),(6,'DNRPA','https://i.ibb.co/Pjx5mQ0/dnrpa.png'),(7,'POLICÍA','https://i.ibb.co/3Sz2q4W/policia.png'),(8,'REGISTRO CIVIL','https://i.ibb.co/1fW1Tp1/registro-civil.png');
/*!40000 ALTER TABLE `organismo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tramite`
--

DROP TABLE IF EXISTS `tramite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tramite` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_organismo` int(11) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_c98595ededfcd9e74257c96a8d2` (`id_organismo`),
  CONSTRAINT `FK_c98595ededfcd9e74257c96a8d2` FOREIGN KEY (`id_organismo`) REFERENCES `organismo` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tramite`
--

LOCK TABLES `tramite` WRITE;
/*!40000 ALTER TABLE `tramite` DISABLE KEYS */;
INSERT INTO `tramite` VALUES (1,1,'Constancia de Cuit','https://www.afip.gob.ar/consultas/constancia-de-cuil','Obtener una constancia de CUIT a través de la AFIP'),(2,1,'Inscripción AFIP','https://seti.afip.gob.ar/padron-puc-constancia-internet/ConsultaConstanciaAction.do','Realizar la inscripción en la AFIP como contribuyente'),(4,1,'Generar Clave Fiscal','https://www.afip.gob.ar/clavefiscal/ayuda/obtener-clave-fiscal.asp','Obtener la clave fiscal para realizar trámites online en la AFIP'),(5,1,'Recuperar Clave Fiscal','https://www.afip.gob.ar/clavefiscal/ayuda/recupera-clave-fiscal.asp','Recuperar la clave fiscal de la AFIP en caso de olvido'),(6,1,'Alta de Monotributo','https://auth.afip.gob.ar/contribuyente_/login.xhtml?action=SYSTEM&system=padron-puc-consulta-internet','Realizar el alta en el régimen de monotributo de la AFIP'),(7,2,'Obtener Clave de Seguridad Social','https://www.anses.gob.ar/obtener-clave-de-la-seguridad-social','Solicitar y obtener la clave de seguridad social de ANSES'),(8,2,'Generación de CUIL','https://www.argentina.gob.ar/servicio/solicitar-constancia-de-cuil','Solicitar la generación de CUIL a través de ANSES'),(9,2,'Fecha de Cobro','https://www.anses.gob.ar/consultas/fecha-de-cobro','Consultar la fecha de cobro de beneficios de ANSES'),(10,2,'Constancia de CUIL','https://www.anses.gob.ar/consultas/constancia-de-cuil','Obtener una constancia de CUIL a través de ANSES'),(11,4,'Realizar un pago','https://www.rentasjujuy.gob.ar/pagar-2/','Realizar el pago de impuestos o servicios a la Dirección Provincial de Rentas'),(12,4,'Consultar','https://www.rentasjujuy.gob.ar/consultar-2/','Consultar información tributaria con la Dirección Provincial de Rentas'),(13,4,'Solicitar Clave Fiscal','https://www.rentasjujuyonline.gob.ar/cedulavirtual/wpsolinuecla.aspx','Solicitar la clave fiscal para realizar trámites online con la Dirección Provincial de Rentas'),(14,4,'Pagar Inmobiliario','https://www.rentasjujuyonline.gob.ar/cedulavirtual/winmscf.aspx','Realizar el pago del impuesto inmobiliario a la Dirección Provincial de Rentas'),(15,4,'Devolución Inmobiliario','https://www.rentasjujuy.gob.ar/devolucion-2/','Solicitar la devolución de pagos indebidos o en exceso de impuestos inmobiliarios'),(16,4,'Sacar Turno','https://www.rentasjujuyonline.gob.ar/cedulavirtual/WturnosWeb1.aspx','Obtener un turno para trámites en la Dirección Provincial de Rentas'),(17,3,'Pagar Impuestos','https://rentassanpedro.mspj.gob.ar/','Realizar el pago de impuestos municipales en la Municipalidad de San Pedro de Jujuy'),(18,3,'Boletin Oficial','https://sanpedrodejujuy.gob.ar/boletin-oficial/','Acceder al Boletín Oficial de la Municipalidad de San Pedro de Jujuy'),(19,3,'Portal de Empleo','http://empleos.sanpedrodejujuy.gob.ar/view/seccionPrincipal.php','Acceder al portal de empleo de la Municipalidad de San Pedro de Jujuy'),(20,3,'Dirección de la Mujer','https://sanpedrodejujuy.gob.ar/direccion-de-la-mujer-y-equidad-de-genero/','Acceder a servicios y recursos ofrecidos por la Dirección de la Mujer de San Pedro de Jujuy'),(21,3,'Atención Ciudadana','https://sanpedrodejujuy.gob.ar/denuncias-reclamos-2/','Realizar denuncias y reclamos en la Municipalidad de San Pedro de Jujuy'),(22,3,'Sistema de Estacionamiento Medido','https://sanpedrodejujuy.gob.ar/sem/','Acceder al sistema de estacionamiento medido de la Municipalidad de San Pedro de Jujuy'),(23,3,'Ordenanzas Municipales','http://municipalidadsp.ddns.net/Ordenanza/Consultas.aspx','Consultar ordenanzas municipales de San Pedro de Jujuy'),(24,5,'Sacar Turno','https://turnos.pami.org.ar','Obtener un turno para trámites en PAMI'),(25,5,'Autogestión - PAMI','https://www.pami.org.ar/mi-pami','Acceder a la plataforma de autogestión de PAMI'),(26,5,'Consultar Cartilla Médica','https://www.pami.org.ar/cartilla','Consultar la cartilla médica de PAMI'),(27,5,'Buscar Ópticas','https://www.pami.org.ar/opticas','Buscar ópticas habilitadas por PAMI'),(28,5,'Validar una receta manual','https://www.pami.org.ar/validador-receta-manual','Validar una receta médica manual por parte de PAMI'),(29,5,'Buscador de Farmacias','https://www.pami.org.ar/farmacias','Buscar farmacias adheridas al convenio de PAMI'),(30,5,'Veteranos y excombatientes','https://www.pami.org.ar/veteranos','Acceder a servicios especiales para veteranos y excombatientes a través de PAMI'),(31,7,'Certificado de Residencia','https://tramites.seguridad.jujuy.gob.ar/certificadoResidencia','Obtener un certificado de residencia desde la Policía de Jujuy'),(32,7,'Exposición por no votación','https://tramites.seguridad.jujuy.gob.ar/constanciaPorNoVotacion','Realizar una exposición por no votación en la Policía de Jujuy'),(33,7,'Certificado de residencia y convivencia','https://tramites.seguridad.jujuy.gob.ar/certificadoResidenciaConvivencia','Obtener un certificado de residencia y convivencia desde la Policía de Jujuy'),(34,7,'Certificado de supervivencia','https://tramites.seguridad.jujuy.gob.ar/certificadoSupervivencia','Obtener un certificado de supervivencia desde la Policía de Jujuy'),(35,7,'Constancia de extravío','https://tramites.seguridad.jujuy.gob.ar/constanciaPorExtravio','Obtener una constancia por extravío desde la Policía de Jujuy'),(36,7,'Exposición por justificativo laboral por falta de transporte','https://tramites.seguridad.jujuy.gob.ar/exposicionPorJustificativoLaboralPorFaltaDeTransporte','Realizar una exposición por justificativo laboral por falta de transporte en la Policía de Jujuy'),(37,7,'Planilla Prontuarial','https://tramites.seguridad.jujuy.gob.ar/planillaProntuarial','Obtener una planilla prontuarial desde la Policía de Jujuy'),(38,7,'Pagar Reba','https://tramites.seguridad.jujuy.gob.ar/descargarCertificadoReba','Descargar el certificado REBA desde la Policía de Jujuy'),(39,8,'Partida Nacimiento','http://www.registrocivil.jujuy.gob.ar/partidasdigitales','Solicitar una partida de nacimiento en el Registro Civil de Jujuy'),(40,8,'Renovar DNI','http://www.registrocivil.jujuy.gob.ar/form-dni-pasaporte','Renovar el Documento Nacional de Identidad en el Registro Civil de Jujuy'),(41,8,'Partida de defunción','http://rcactasdigitales.jujuy.gob.ar:3000/login','Solicitar una partida de defunción en el Registro Civil de Jujuy'),(42,8,'Inscripción de nacimiento','http://www.registrocivil.jujuy.gob.ar/form-nacimiento','Realizar la inscripción de nacimiento en el Registro Civil de Jujuy'),(43,8,'Solicitud Pasaporte','https://www.argentina.gob.ar/interior/pasaporte','Solicitar un pasaporte en el Registro Civil de Jujuy'),(44,8,'Cambio de domicilio','http://cdr.jujuy.gov.ar/turno\"','Realizar un cambio de domicilio en el Registro Civil de Jujuy'),(45,8,'Validar Actas','http://www.registrocivil.jujuy.gob.ar/validarpartidasdigitales','Validar actas de estado civil en el Registro Civil de Jujuy'),(46,8,'Sacar Turno','http://cdr.jujuy.gov.ar/turno','Obtener un turno para trámites en el Registro Civil de Jujuy'),(47,6,'Transferencia Digital - 08','https://www2.jus.gov.ar/dnrpa-site/#!/08D','Realizar la transferencia digital de vehículos mediante el trámite 08 en el Registro del Automotor (DNRPA)'),(48,6,'Turnos e Inicios de trámites','https://www2.jus.gov.ar/dnrpa-site/#!/','Obtener turnos e iniciar trámites en el Registro del Automotor (DNRPA)'),(49,6,'Cédula Digital','https://www.argentina.gob.ar/miargentina/servicios/cedulas-de-tu-vehiculo-digital','Obtener la cédula digital de tu vehículo en el Registro del Automotor (DNRPA)'),(54,3,'Hola','hola.com','hola');
/*!40000 ALTER TABLE `tramite` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-10 16:43:45
