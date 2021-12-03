// 객체를 다른말로 인스턴스라고도 부른다. ->2번을의미하는듯?
// 1. 자료형으로서의 객체 -> 키와 밸류의 집합
// 2. 클래스의 인스턴스이다. 자료와 그 자료를 다루는 명령의 집합
// 1, 2는 다르다

let str = new String('hello'); // 뉴스트링 == 생성자함수 == 타입생성자
___
asd = 'asdasd' // 이거는 앞에 var가 생략된거임
___

function aboutThis(){
    console.log(this);
}
// 함수를 호출한 객체를 의미한다 -> this
___
// scope
// 전역스코프
// 블록스코프
// 함수레벨스코프
___
// closure : 폐쇄된 공간 함수도 일종의 폐쇄된 공간;
// 클로져 : 테크닉, 폐쇄된 공간의 데이터에 접근하기위한 테크닉
// 클로저함수 : 폐쇄된공간에 접근할 수 있는 함수
function a() {
    var val1 = 'asd';
}
___
function myFunction(){
    var val1 = 'hello';
    return {getVal1 : function(){return val1}};
}
let result = myFunction();

result

result.getVal1() // 이제는 접근할수있게됨
___
Math.random(); // 0이상 1미만
Math.random()*10; // 0이상 10미만
Math.random()*100; // 0이상 100미만
Math.random()*23; // 0이상 23미만

Math.floor(Math.random()*10); // floor 버림 round sale

Math.floor(Math.random()*10+2); // 2이상 12미만
Math.floor(Math.random()*7+3); // 3이상 10미만
Math.floor(Math.random()*23+5); // 5이상 28미만
Math.floor(Math.random()*10+7); // 7이상 17미만

// 값을 넣을때 직관적으로 넣기위한 작업
Math.floor(Math.random()*(10-2)+2); // 2이상 10미만
Math.floor(Math.random()*(7-3)+3); // 3이상 7미만
Math.floor(Math.random()*(23-5)+5); // 5이상 23미만
Math.floor(Math.random()*(10-7)+7); // 7이상 10미만

function randomNum(시작값, 포함안되는최대값){
    return Math.floor(Math.random()*(포함안되는최대값-시작값)+시작값);
}

let lotto = [];
for(i=0; i<6; i++){
    lotto += randomNum(1, 46); // 이건 문자열이되어버림
    lotto.push(randomNum(1, 46)); // 배열안에 숫자넣기^^
    console.log(randomNum(1,46))
}
console.log(lotto)

___
Truthy: 참 같은 값이란 불리언을 기대하는 문맥에서 true로 평가되는 값
Falsy: 거짓 같은 값은 불리언 문맥에서 false 로 평가되는 값 // 0, NaN, false, null, undefined, ""

|| : 마지막 폴시(falsy) 값 혹은 처음 만난 투루시(truthy) 값을 반환합니다.
1 || 2 || 3 || 4 || 5  // 1
0 || 0 || 3 || 4 || 5  // 3
0 || 0 || 0 || 0 || 5  // 5
0 || 0 || 0 || 0 || 0  // 0
0 || 0 || 0 || 0 || 1  // 1
0 || 0 || 0 || 1 || 0  // 1

&& : 마지막 투루시(truthy) 값 혹은 처음 만난 마지막 폴시(falsy) 값을 반환합니다.
0 && 1 && 2

function randomNum(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}

// 임준홍님 코드
function tryLotto(...input) {
    if (input.length !== 6) {
        console.log('숫자를 6개 입력해야 합니다.');
        return;
    } else if (input.length !== new Set(input).size) {
        console.log('숫자를 중복되지 않게 입력해야 합니다.');
        return;
    } else if (input.some(v => !Number.isInteger(v) || v > 45 || v < 1)) {
        console.log('1부터 45까지 숫자 중 하나를 입력해야 합니다.');
        return;
    }

    const selected = [];
    let count = 0;
    while (count < 7) {
        const selectedNum = randomNum(1, 46);
        if (!selected.includes(selectedNum)) {
            count++;
            selected.push(selectedNum);
        }
    }
    console.log(`당첨번호: ${selected.slice(0, 6).join(' ')} | 보너스: ${selected[6]}`);
    const nums = input.filter(v => selected.slice(0, 6).includes(v));
    switch (nums.length) {
        case 0:
        case 1:
        case 2:
            console.log('꽝!');
            break;
        case 3:
            console.log('★ 5등 당첨! ★');
            break;
        case 4:
            console.log('★★ 4등 당첨! ★★');
            break;
        case 5:
            if (input.includes(selected[6])) {
                console.log('★★★★ 2등 당첨!! ★★★★');
                nums.push(`보너스 ${selected[6]}`);
            } else console.log('★★★ 3등 당첨!! ★★★');
            break;
        case 6:
            console.log('★★★★★ 1등 당첨!!! ★★★★★');
    }
    if (nums.length > 0) console.log(`내가 맞춘 번호: ${nums.join(' ')}`);
}

// 로또번호 만들기 - 같이 작업하기
function randomFunc(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}

let lottoArr = [];
function lottoGenerator() {
    while (lottoArr.length < 6) {
        let result = randomFunc(1, 46);
        let isGot = false;

        // 중복판단
        lottoArr.forEach(element => {
            if (element === result) {
                isGot = true;
            }
        });

        // 중복이없다면 배열에 추가
        if(!isGot) {  // if(isGot != true) 랑 같은거임
            lottoArr.push(result);
        }
    }
    return lottoArr;
}

lottoGenerator()

// array.includes()
// ie 지원안함;;;;;;;
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
function randomFunc(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}

let lottoArr = [];
function lottoGenerator() {
    while (lottoArr.length < 6) {
        let result = randomFunc(1, 46);

        if (!lottoArr.includes(result)) {
            lottoArr.push(result);
        }
    }
    return lottoArr;
}

// 강사님의 인클루드
function randomFunc(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function lottoGenerator() {
    let lottoArr = [];
    while (lottoArr.length < 6) {
        let result = randomFunc(1, 46);
        // 중복 판단, 다만 include는 IE지원안됨
        // 중복되는 숫자가 없다면
        if(!lottoArr.includes(result)) {
            lottoArr.push(result);
        }
    }
    return lottoArr;
}
console.log(lottoGenerator());

// Set
function randomFunc(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}

let lottoSet = new Set();
function lottoGenerator() {
    while (lottoSet.size < 6) {
        let result = randomFunc(1, 46);
        lottoSet.add(result);
    }
    return lottoSet;
}

//강사님 셋 방법
let lottoSet = new Set();
function lottoGenerator() {
    while (lottoSet.size < 6) {
        let result = randomNum(1, 46);
        lottoSet.add(result);
    }
    return lottoSet;
}