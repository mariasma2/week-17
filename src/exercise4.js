
function generate() {
    document.getElementById('generated').innerHTML = "";
    document.getElementById('max').innerHTML = "";
    document.getElementById('min').innerHTML = "";
    document.getElementById('average').innerHTML = "";
    document.getElementById('sum').innerHTML = "";
    document.getElementById('numbers').innerHTML = "";
    let arr = [];
    for (let i = 0; i < 5; i++) {
        arr.push(Math.trunc(Math.random() * 10 + 1));
        arr.push(Math.trunc(Math.random() * -10 - 1));
    }
    document.getElementById('generated').innerHTML += arr;
    let min = Math.min.apply(null, arr);
    document.getElementById('min').innerHTML += min;

    let max = Math.max.apply(null, arr);
    document.getElementById('max').innerHTML += max;

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    document.getElementById('sum').innerHTML += sum;
    document.getElementById('average').innerHTML += sum / 10;

    let numbers = 1;
    for (let i = 0; i < arr.length; i++) {
        numbers *= arr[i];
    }
    document.getElementById('numbers').innerHTML += numbers;
}
