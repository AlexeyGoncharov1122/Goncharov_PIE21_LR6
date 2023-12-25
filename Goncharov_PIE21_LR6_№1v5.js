function f(a, b) {
    let square = a*b;   // Площадь прямоугольника
    return square;
}
let rectangle = {   // Прямоугольник
    a: 50,   // Длина
    b: 20    // Ширина
}
rectangle.s = f(rectangle.a, rectangle.b);   // Создание нового свойства - площадь
alert("Длина прямоугольника = " + rectangle.a + 
      "\nШирина прямоугольника = " + rectangle.b +
      "\nПлощадь прямоугольника = " + rectangle.s);