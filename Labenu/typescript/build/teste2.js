function anagrama(input) {
  const fatorial = input.split('').length
  var resultado = 1
  for (let i = fatorial; i > 1; i--) {
    resultado *= i;
  }
 return resultado
}
console.log(anagrama("cinco"))