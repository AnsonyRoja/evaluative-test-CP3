const utils = require("../utils");

/* ⚠️ No modificar nada arriba de esta línea ⚠️ */

/* 4️⃣ * EJERCICIO 4 * - deletePersonaje 4️⃣:

🟢 Busca un personaje por ID. Elimínalo de la base de datos y responde con el array de personajes teniendo en cuenta que no está más el que acabas de eliminar.
🟢 Si no existe el personaje con ese ID, arrojá un error que diga: `No existe el personaje con id: ${personajeID}`.
*/

const deletePersonaje = (personajeID) => {
  // Tu código aquí

  const personajeEncontradoIndex = utils.personajes.findIndex((p) => p.id === personajeID);

  // Paso 3: Si no se encuentra el personaje, arrojar un error
  if (personajeEncontradoIndex === -1) {

    throw new Error(`No existe el personaje con id: ${personajeID}`);

  }

  // Paso 4: Eliminar el personaje del array utils.personajes usando splice
  utils.personajes.splice(personajeEncontradoIndex, 1);

  // Paso 5: Retornar todos los personajes después de eliminar el personaje
  return utils.personajes;


};

// ⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = deletePersonaje;
