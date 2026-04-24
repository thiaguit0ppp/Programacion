export async function getPersonas() {
  const res = await fetch("http://localhost:8000/alumnos");
  if (!res.ok) {
    throw new Error("Error HTTP: " + res.status);
  }
  const data = await res.json();
  console.log("Respuesta del servidor:", data);
  return data;
}