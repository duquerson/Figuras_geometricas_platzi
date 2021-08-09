//aplicando arrow_funciones
const PI = Math.PI
    //cuadrado
const perimetro_cuadrado = (lado) => lado * 4
const area_cuadrado = (lado) => {
        return lado ** 2
    }
    //triangulo
const perimetro_triangulo = (lado1, lado2, base) => lado1 + lado2 + base
const area_triangulo = (base, altura) => (base * altura) / 2
    //circulo
const diametro_circulo = (radio) => radio * 2
const perimetro_circulo = (radio) => diametro_circulo(radio) * PI
const area_circulo = (radio) => PI * (radio ** 2)
    //interaccion con html
function calcular_perimetro_cuadrado() {
    const input = document.getElementById("input_cuadrado");
    const value = input.value;
    let perimetro = perimetro_cuadrado(value);
    alert(perimetro);
}
const calcular_area_cuadrado = () => {
    const input = document.getElementById('input_cuadrado');
    const value = input.value;
    let area = area_cuadrado(value);
    alert(area);
}
const calcular_perimetro_triangulo = () => {
    const ladoA = Number(document.getElementById('input_lado_A').value)
    const ladoB = Number(document.getElementById('input_lado_B').value)
    const basetriangulo = Number(document.getElementById('input_lado_Base').value)
    const perimetro = perimetro_triangulo(ladoA, ladoB, basetriangulo)
    alert(perimetro)
}
const calcular_area_triangulo = () => {
    const basetriangulo = Number(document.getElementById('input_lado_Base').value)
    const altura = Number(document.getElementById('input_altura_triangulo').value)
    const area = area_triangulo(basetriangulo, altura)
    alert(area)
}
const calcular_diametro_circulo = () => {
    const input = document.getElementById('input_circulo')
    let value = Number(input.value)
    let diametro = diametro_circulo(value)
    alert(diametro)
}
const calcular_perimetro_circulo = () => {
    const input = document.getElementById('input_circulo')
    let value = Number(input.value)
    let perimetro = perimetro_circulo(value)
    alert(perimetro)
}
const calcular_area_circulo = () => {
    const input = document.getElementById('input_circulo')
    let value = Number(input.value)
    let area = area_circulo(value)
    alert(area)
}