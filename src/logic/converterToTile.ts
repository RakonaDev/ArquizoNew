export function convertirACadenaTitulo(cadena: string) {
  if (!cadena) {
    return "";
  }

  const palabras = cadena.split("-");
  const palabrasEnTitulo = palabras.map(
    (palabra: string) => palabra.charAt(0).toUpperCase() + palabra.slice(1)
  );
  return palabrasEnTitulo.join(" ");
}