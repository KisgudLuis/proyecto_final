# SIMTELE-WEB

integrante:
Casablanca Condori Luis Boris

## Sistema de monitoreo y prevención de Mi Teleférico

### 1. Descripción del proyecto

SIMTELE-WEB es una aplicación web educativa que simula un panel de control para el monitoreo y prevención de situaciones relacionadas con un sistema de transporte por cable.

El proyecto permite realizar cálculos, registrar componentes, analizar mediciones de viento y controlar registros de sensores mediante cuatro módulos interactivos.

Este sistema tiene fines académicos y no representa el sistema oficial de monitoreo de Mi Teleférico.

### 2. Objetivo general

Desarrollar una aplicación web interactiva que permita simular tareas básicas de monitoreo, registro y prevención mediante el uso de HTML, CSS y JavaScript.

### 3. Módulos del sistema

#### Módulo 1: Detención de emergencia
- Ingreso de velocidad en km/h.
- Ingreso del tiempo de reacción.
- Cálculo de distancia recorrida.
- Clasificación del resultado mediante condicionales.

#### Módulo 2: Control de mantenimiento
- Registro de componentes.
- Ingreso de horas de uso.
- Selección del estado del componente.
- Visualización de registros en una tabla.
- Eliminación de componentes registrados.

#### Módulo 3: Monitoreo de viento
- Registro de cinco mediciones.
- Cálculo del promedio.
- Identificación del valor máximo.
- Clasificación de la velocidad del viento.

#### Módulo 4: Registro de sensores
- Ingreso del código del sensor.
- Selección del tipo de sensor.
- Registro de lecturas numéricas.
- Validación del código mediante expresiones regulares.
- Comprobación de códigos duplicados.

### 4. Tecnologías utilizadas

- HTML5: estructura de la aplicación.
- CSS3: diseño y adaptación a diferentes pantallas.
- JavaScript: cálculos, validaciones, eventos y manipulación del DOM.

### 5. Requisitos para ejecutar el proyecto

- Computadora con Windows, Linux o macOS.
- Navegador web actualizado.
- Visual Studio Code (recomendado).

No es necesario instalar servidores ni bases de datos.

### 6. Instalación y ejecución

1. Descargar o clonar el repositorio.
2. Abrir la carpeta SIMTELE-WEB.
3. Verificar que estén los siguientes archivos:
   - index.html
   - styles.css
   - script.js
   - README.md
4. Abrir el archivo index.html en un navegador.
5. Seleccionar cualquiera de los cuatro módulos y comenzar a utilizarlo.

También se puede ejecutar mediante la extensión Live Server de Visual Studio Code.

### 7. Estructura del proyecto

SIMTELE-WEB/
│
├── index.html
├── styles.css
├── script.js
└── README.md

### 8. Conceptos de JavaScript aplicados

Durante el desarrollo se utilizaron los siguientes conceptos:

- Variables: let y const.
- Condicionales: if, else if y else.
- Ciclos: for y forEach.
- Funciones.
- Arreglos.
- Objetos.
- Métodos push() y splice().
- Eventos addEventListener().
- Manipulación del DOM.
- Validación de formularios.
- Expresiones regulares.
- Conversión de datos con parseFloat().

### 9. Pruebas de funcionamiento

Se realizaron pruebas con los siguientes datos:

| Módulo | Datos de prueba | Resultado esperado |
|--------|-----------------|-------------------|
| Emergencia | 72 km/h y 3 segundos | 60 metros |
| Mantenimiento | Motor, 250 horas, Normal | Registro en tabla |
| Viento | 10, 20, 30, 40, 50 | Promedio 30 y máximo 50 |
| Sensores | SEN-001, Temperatura, 35.5 | Registro válido |

### 10. Consideraciones

- Los datos registrados se almacenan temporalmente en arreglos de JavaScript.
- Al actualizar la página, los registros se pierden.
- Los valores de clasificación son simulados con fines educativos.
- La aplicación no está conectada a sensores ni a sistemas reales de transporte.

### 11. Autoría

Proyecto académico desarrollado como práctica de Programación Web I.

**Proyecto:** SIMTELE-WEB  
**Área:** Desarrollo Web  
**Institución:** [Nombre de la universidad]  
**Integrantes:** [Nombres de los integrantes]
