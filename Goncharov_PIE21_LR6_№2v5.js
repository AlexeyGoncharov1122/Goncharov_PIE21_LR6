alert("Пользователь вводит целые положительные числа M, N, число D. Программа формирует набор из случайных М чисел\
       в диапазоне от 1 до 20. Далее формируется матрица размера M х N,\
       у которой первый столбец совпадает с исходным набором чисел (list_M), а элементы каждого следующего столбца\
       равны сумме соответствующего элемента предыдущего столбца и числа D (в результате каждая строка матрицы будет\
       содержать элементы арифметической прогрессии).");
function checking_the_value(text, default_value) {
    let value;
    // Проверка value на соответствие условиям: целое и положительное от одного до десяти
    do {
        value = prompt(text, default_value);
    } while (value / (Math.round(value)) != 1 || value > 10 || value < 1);
    return value;
}

function creating_an_array(base_list, m, n, d){
    // Заполнение двумерного массива array числами в соответствии с условием
    let array = [];
    for (let i = 0; i < m; i++) {
        array.push([]);
        for (let j = 0; j < n; j++) {
            array[i].push(list_N[j] * d ** i);
        }
        array[i] = array[i].join(', ');
    }
    return array;
}

let M = checking_the_value("Введите M", 3);
let N = checking_the_value("Введите N", 3);
let list_N = [];
let element;
// Заполнение массива N
for (let i = 0; i < N; i++) {
    list_N.push(checking_the_value("Введите " + (i + 1) + "-ый элемент массива N", i + 1));
}
let D = checking_the_value("Введите D", 3);
let list_MxN = creating_an_array(list_N, M, N, D);
list_MxN = list_MxN.join("\n                             ");
list_MxN = "Матрица MxN = [" + list_MxN;
list_MxN = list_MxN + "]";
alert("M = " + M + ", N = " + N + ", D = " + D + "\nМассив N = [" + list_N.join(", ") + "]\n" + list_MxN);