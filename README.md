# Perfil 3 - App móvil con React Native y Expo
 
## Datos del estudiante
 
- **Nombre del estudiante:** Kenneth Enrique Orellana Tobar
- **Carnet:** 20240438
- **Sección y grupo:** Sección A - Grupo 2
 
## Enlaces
 
- **Video demostrativo:** https://drive.google.com/file/d/1RBDL1mImemtfZFcYaeBOuqpemmx3FqPK/view?usp=sharing
- **Descargar APK:** https://expo.dev/accounts/kotsxd/projects/Perfil3_KennethOrellana/builds/ba00cd04-a6e7-4aae-9031-f9e81fd83947
 
## Descripción
 
Aplicación móvil desarrollada con **React Native** y **Expo** que consume la API pública de [Rick and Morty](https://rickandmortyapi.com/api/character) y muestra los personajes en tarjetas.
 
### Funcionalidades
 
- **Splash screen** con icono personalizado.
- **Pantalla 1:** información del estudiante (nombre, carnet, sección y grupo) y botón para navegar a la pantalla 2.
- **Pantalla 2:** lista de personajes de Rick and Morty con imagen, nombre y descripción (especie y estado), con indicador de carga y manejo de errores.
- **Navegación** entre pantallas con React Navigation (incluye regreso a la vista anterior).
 
## Tecnologías
 
- React Native + Expo
- React Navigation (native stack)
- Custom Hooks (`useFetchData`)
- Fetch API con `async/await`
- EAS Build para generar el APK
 
## Estructura del proyecto
 
```
├── assets/                  # Iconos y splash personalizados
├── src/
│   ├── components/
│   │   ├── Cards.jsx        # Componente reutilizable de tarjeta
│   │   └── Loading.jsx      # Indicador de carga
│   ├── hooks/
│   │   └── useFetchData.jsx # Custom hook: consumo de la API
│   └── screens/
│       ├── StudentsScreens.jsx  # Pantalla 1: datos del estudiante
│       └── ApiScreen.jsx        # Pantalla 2: personajes de la API
├── App.js                   # Configuración de navegación
├── app.json                 # Configuración de Expo
└── eas.json                 # Configuración del build
```
 
## Cómo ejecutar el proyecto
 
```bash
# 1. Clonar el repositorio
git clone https://github.com/TU_USUARIO/Perfil3_KennethOrellana.git
cd Perfil3_KennethOrellana
 
# 2. Instalar dependencias
npm install
 
# 3. Iniciar la app
npx expo start
```
 
Escanea el QR con **Expo Go** o presiona `a` para abrirla en un emulador de Android.
 
## Generar el APK
 
```bash
npm install -g eas-cli
eas login
eas build -p android --profile preview
```
 
## API utilizada
 
- Rick and Morty API: https://rickandmortyapi.com/api/character
- 
