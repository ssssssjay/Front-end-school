let text = '';
let count = 0;

for (let i = 0; i < 10001; i++) {
    text += i;
}
// console.log(text);
for (let i = 0; i < text.length; i++) {
    if (text[i] == '8'){
        count += 1;
    }
}

console.log(count);

let sample = [10, 20, 30, 5, 6, 3, 100, 110, 99, 88];
let temp = sample[0]

for (let i = 0; i < sample.length; i++) {
    if (temp < sample[i]){
        temp = sample[i];
    }
}

let quiz = 'javascript';

for (let i = 0; i < quiz.length; i++) {
    console.log(text[i-1], text[i]);
}