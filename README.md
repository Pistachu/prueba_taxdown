# TaxDown backend challenge

- Prueba en local

Para probar el código en local, por favor, clonar el repositorio y crear en la raíz del proyecto un archivo llamado .env, que contendrá definida la url a la que atacamos para obtener los tipos de cambio actualizados (reemplazando "<url_a_atacar> por la url en sí):

API_URL="<url_a_atacar>"


Esto se hace por temas de seguridad, para que no queden expuestos datos sensibles (url´s, datos de conexión a bbdd, etc.). Posteriormente hayq que arrancar el servidor con "npm run start", Esto arrancaría el servidor en el puerto 3000 de la máquina, y para obtener los resultados de tipos de cambio actualizados, habría que atacar al endpoint /api/er:

http://localhost:3000/api/er


Se ha creado un test con una petición GET dentro del fichero peticiones.rest, que se puede lanzar desde el mismo para obtener los resultados buscados.


- Prueba en remoto

El servidor se ha desplegado en la plataforma Heroku. La url del servidor sería https://prueba-taxdown.herokuapp.com e igualmente habría que atacar al endpoint /api/er para obtener los tipos de cambio actualizados:

https://prueba-taxdown.herokuapp.com/api/er


