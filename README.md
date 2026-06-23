# 🚀 Proyecto Docker - Integración Continua con Jenkins

## Politécnico Grancolombiano

**Asignatura:** Integración Continua  
**Programa:** Ingeniería de Software

---

# 📖 Descripción

Este proyecto académico fue desarrollado para la asignatura Integración Continua del Politécnico Grancolombiano.

El objetivo principal fue implementar una aplicación web utilizando Node.js y MySQL, desplegada mediante Docker y gestionada con Docker Compose. Adicionalmente, se implementó Jenkins y GitHub Actions para automatizar procesos de construcción, validación y ejecución mediante un flujo de Integración Continua (CI/CD).

La aplicación consulta información almacenada en la base de datos venta_jugos y presenta los registros de la tabla tb_cliente mediante una interfaz web accesible desde el navegador.

La solución integra herramientas modernas de automatización y despliegue, permitiendo validar automáticamente la infraestructura y los servicios cada vez que se realizan cambios en el repositorio GitHub.

---

# 🎯 Objetivos

- Implementar una aplicación web utilizando Node.js y Express.
- Conectar la aplicación con una base de datos MySQL.
- Desplegar la solución utilizando Docker.
- Gestionar servicios mediante Docker Compose.
- Implementar control de versiones utilizando Git y GitHub.
- Automatizar procesos mediante Jenkins.
- Implementar validación automática mediante GitHub Actions.
- Integrar la aplicación y la base de datos dentro de una arquitectura contenerizada.
- Aplicar conceptos de Integración Continua y DevOps vistos durante el curso.


---

# 🛠 Tecnologías Utilizadas

- Docker
- Docker Compose
- Node.js
- Express.js
- MySQL 8
- Jenkins
- Git
- GitHub
- Visual Studio Code
- GitHub Actions


---

# 🏗 Arquitectura del Proyecto

```text
CI Tools
   │
   ▼
GitHub
   │
   ▼
Jenkins
   │
   ▼
Docker
   │
   ├── Aplicación Node.js
   └── Base de Datos MySQL
```

---

# 📂 Estructura del Proyecto

```text
proyecto_docker/
│
├── .github/
│ └── workflows/
│ └── ci.yml
│
├── database/
│ └── init.sql
│
├── app.js
├── package.json
├── package-lock.json
│
├── Dockerfile
├── docker-compose.yml
│
├── Jenkinsfile
├── Dockerfile.jenkins
│
├── .gitignore
│
└── README.md

```

---

# ⚙️ Funcionalidades Implementadas

- Creación y administración de contenedores Docker.
- Gestión de servicios mediante Docker Compose.
- Desarrollo de aplicación web con Node.js y Express.
- Conexión a base de datos MySQL.
- Consulta de registros desde la tabla `tb_cliente`.
- Visualización de datos mediante una tabla HTML.
- Control de versiones con Git y GitHub.
- Implementación de integración continua mediante Jenkins.
- Automatización de procesos mediante Pipeline.
- Integración continua adicional mediante Github Actions CI.
- Validación automática del proyecto en la nube con Github Actions CI.
- Configuración de servicios y ejecución de procesos en Codeship.
- Verificación del entorno de desarrollo mediante Codeship.
- Validación automática de Docker y Docker Compose.
- Automatización de procesos al detectar cambios en GitHub.
- Integración continua adicional mediante Github Actions CI.
- Validación automática del proyecto en la nube con Github Actions CI.
- Configuración y ejecución de procesos mediante Codeship.
- Verificación del entorno de desarrollo utilizando Codeship.
- Implementación de GitHub Actions.
- Automatización de procesos al detectar cambios en el repositorio GitHub.



---

# 🚀 Ejecución del Proyecto

## Construcción y ejecución

```bash
docker compose up --build
```

## Acceso a la aplicación

```text
http://localhost:3000
```

## Acceso a Jenkins

```text
http://localhost:8080
```

## Acceso a herramientas de Integración Continua

### Jenkins
http://localhost:8080

### Github Actions CI
Se puede acceder al estado de ejecución desde el panel web de Github Actions CI vinculado al repositorio GitHub.

### Codeship
Se puede acceder al estado de ejecución desde el panel web de Codeship vinculado al repositorio.

---

# Evidencias del Proyecto

## 1. Aplicación Web en Ejecución

Visualización de los datos obtenidos desde la base de datos MySQL a través de la aplicación desarrollada en Node.js.

<p align="center">
  <img width="2158" height="1434" alt="image" src="https://github.com/user-attachments/assets/1a5f70f2-77a8-4924-96f2-5566a5b6518e" />

</p>

---

## 2. Docker Desktop

Contenedores e imágenes utilizadas durante la ejecución del proyecto.

<p align="center">
  <img width="2161" height="1435" alt="image" src="https://github.com/user-attachments/assets/45477205-db70-44c4-a231-13255741e7c5" />

</p>

---

## 3. Base de Datos MySQL

Base de datos utilizada por la aplicación y tabla consultada por Node.js.

<p align="center">
  <img width="2160" height="1439" alt="image" src="https://github.com/user-attachments/assets/4c3c2953-0c20-42d2-9b9c-5ccacb6e6dc4" />

</p>

---

## 4. Código Fuente de la Aplicación (app.js)

Implementación de la conexión entre Node.js y MySQL y generación de la interfaz web.

<p align="center">
  <img width="2551" height="1436" alt="image" src="https://github.com/user-attachments/assets/8ac7f660-116d-4039-bb7c-85ed8bd15ded" />

</p>

---

## 5. Dockerfile

Configuración utilizada para construir la imagen Docker de la aplicación.

<p align="center">
  <img width="2550" height="1432" alt="image" src="https://github.com/user-attachments/assets/bd0c8553-958b-455e-a83d-3159ea4424b0" />

</p>

---

## 6. Jenkins Dashboard

Panel principal de Jenkins utilizado para la gestión de la integración continua.

<p align="center">
  <img width="2158" height="1439" alt="image" src="https://github.com/user-attachments/assets/818b1613-6752-4102-ab8c-2a7d09e7e238" />

</p>

---

## 7. Jenkinsfile

Archivo de configuración del Pipeline utilizado para automatizar tareas del proyecto.

<p align="center">
  <img width="2544" height="1438" alt="image" src="https://github.com/user-attachments/assets/4ba6d26b-2529-4e9a-82b8-09b3c9f7613b" />

</p>

---

## 8. Pipeline Ejecutado Correctamente

Evidencia de la ejecución exitosa del Pipeline en Jenkins.

<p align="center">
  <img width="2163" height="1439" alt="image" src="https://github.com/user-attachments/assets/1bd050a6-32c4-49ea-bf1b-3686cf82d210" />

</p>

---

## 9. Repositorio GitHub

Repositorio utilizado para el control de versiones y almacenamiento del proyecto.

<p align="center">
  <img width="2154" height="1309" alt="image" src="https://github.com/user-attachments/assets/5ec45c30-c705-4aa0-ad48-808cf575a270" />

</p>

---

## 10. Ejecución Exitosa del Proyecto

Salida de la terminal mostrando la construcción y ejecución correcta mediante Docker Compose.

<p align="center">
  <img width="2160" height="1437" alt="image" src="https://github.com/user-attachments/assets/4037816e-2338-4b13-98ad-9b4fd4e29300" />

</p>

---

---

## 11. Configuración de Travis CI

Archivo `.travis.yml` que define la automatización del proyecto en Travis CI, ejecutando procesos como instalación de dependencias y construcción de la imagen Docker.

<p align="center">
  <img width="1600" height="627" alt="WhatsApp Image 2026-06-22 at 22 39 16" src="https://github.com/user-attachments/assets/d842d640-44f7-4ff4-98fe-430954419770" />
</p>

---

---

## 12. Configuración de Codeship

Archivo `codeship-services.yml` utilizado para definir los servicios y la construcción de la aplicación mediante Docker en Codeship.

<p align="center">
<img width="1600" height="687" alt="WhatsApp Image 2026-06-22 at 22 43 33" src="https://github.com/user-attachments/assets/dc2258d8-663f-49d1-adeb-56dbb4f3f493" />
</p>

---

## 13. Historial de ejecuciones en GitHub Actions

Evidencia de múltiples ejecuciones exitosas del pipeline, mostrando la evolución del proyecto y la correcta integración continua.

<p align="center">
<img width="1600" height="610" alt="WhatsApp Image 2026-06-22 at 23 10 06" src="https://github.com/user-attachments/assets/f6c08adf-4b8e-48ca-94eb-0767ea24267b" />
</p>

---
# ✅ Resultados Obtenidos

Durante el desarrollo del proyecto se logró:

- Implementar una aplicación web funcional utilizando Node.js y Express.js.
- Conectar exitosamente la aplicación con una base de datos MySQL.
- Desplegar la solución mediante contenedores Docker.
- Gestionar servicios utilizando Docker Compose.
- Implementar control de versiones mediante Git y GitHub.
- Configurar Jenkins para la automatización de procesos de Integración Continua.
- Crear y ejecutar satisfactoriamente un Pipeline de Jenkins.
- Visualizar información almacenada en la base de datos mediante una interfaz web.
- Implementar validación automática del proyecto mediante Github Actions CI.
- Ejecutar procesos de verificación en la nube utilizando Codeship.
- Orquestación mediante Docker Compose.
- Automatizar la ejecución del proyecto al detectar cambios en el repositorio GitHub.
- Integración completa entre Node.js y MySQL.
  


Este proyecto permitió aplicar de forma práctica los conceptos de contenerización, automatización, control de versiones e integración continua vistos durante el desarrollo de la asignatura.
Además, se logró implementar un flujo completo de integración continua, donde múltiples herramientas automatizan la validación y ejecución del proyecto, mejorando la eficiencia y reduciendo la intervención manual.

---


# 📜 Historial de Cambios

A continuación se presenta el registro de cambios realizados durante el desarrollo del proyecto.

## Versión 1.0 – Implementación inicial
**Fecha:** Semana 3  
**Cambios:**
- Creación de contenedores Docker.
- Configuración de red entre contenedores.
- Implementación de comunicación entre servicios.
- Pruebas de conectividad (ping entre contenedores).

---

## Versión 2.0 – Integración con Jenkins
**Fecha:** Semana 5  
**Cambios:**
- Instalación de Jenkins.
- Creación de un job automatizado.
- Ejecución de comandos mediante Jenkins.
- Integración de Jenkins con Docker.
- Automatización de procesos del proyecto.

---

## Versión 3.0 – Integración Continua Completa
**Fecha:** Semana 7  
**Cambios:**
- Integración del repositorio con GitHub.
- Configuración del workflow ci.yml.
- Implementación de validación automática.
- Validación de Docker y Docker Compose.
- Integración MySQL.
- Inicialización automática mediante init.sql.
- Automatización CI/CD completa.

---

## Versión 3.1 – Cambio de Travis por Github Actions
**Fecha:** Semana 7
**Cambios:**
- Integración del repositorio con GitHub.
- Configuración de archivo `ci.yml`.
- Implementación de validación automática con Github Actions CI.
- Ejecución de pruebas en la nube.
- Implementación del flujo completo:
  GitHub → Jenkins → Docker  
  GitHub → Github Actions CI  
  GitHub → Codeship 
- Actualización del README.
- Inclusión de integración multiherramienta.
- Mejora de la arquitectura del proyecto.
- Explicación del flujo de integración continua.
- Organización de evidencias.



---

# ❌ Problemas Encontrados
- Travis CI requería plan de pago para la ejecución de pipelines.
- Se reemplazó Travis CI por GitHub Actions.
- Error de sintaxis YAML en docker-compose.yml.
- Integración inicial sin servicio MySQL.
- Ajustes de sincronización Git mediante pull --rebase.

---

# Lecciones Aprendidas

- Uso de Docker para contenerización.
- Uso de Docker Compose para orquestación.
- Integración Node.js y MySQL.
- Automatización mediante Jenkins.
- Automatización mediante GitHub Actions.
- Gestión colaborativa mediante GitHub.
- Resolución de errores YAML y CI/CD

---

# 📚 Conclusiones

- Docker facilitó el despliegue y ejecución de la aplicación en contenedores.
- Docker Compose permitió administrar los servicios de forma centralizada.
- Jenkins automatizó las tareas de integración continua mediante Pipelines.
- Git y GitHub facilitaron el control de versiones y el trabajo con ramas.
- La integración entre Node.js y MySQL permitió consultar y visualizar información en tiempo real.
- Se cumplieron los objetivos propuestos para la asignatura de Integración Continua.
- Travis CI permitió validar el proyecto automáticamente en un entorno en la nube.
- Codeship permitió ejecutar pruebas adicionales de integración sobre el proyecto.
- La integración de múltiples herramientas (Jenkins, Github Actions CI y Codeship) permitió automatizar completamente el flujo de desarrollo.


---

# 👨‍💻 Autor

**Grupo: B04**

**Subgrupo: 08**

**Ingeniería de Software**

**Politécnico Grancolombiano**

**Asignatura:** Integración Continua

**Año:** 2026
