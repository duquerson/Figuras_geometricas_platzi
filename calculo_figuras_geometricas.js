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
    const LadoA = document.getElementById('input_lado_A')
    const lado1 = LadoA.value
    const LadoB = document.getElementById('input_lado_B')
    const lado2 = LadoB.value
    const basetriangulo = document.getElementById('input_lado_Base')
    const base = basetriangulo.value
    const perimetro = perimetro_triangulo(lado1, lado2, base)
    alert(perimetro)
}