function factoial(n) {
    if(n <= 1) {
        return n
    }
    return n * factorial(n-1)
}

// 1. 종료조건 체크
// 2. 반복문으로 구현 가능한 것은 재귀함수로 모-두 구현 가능
// 2.1 재귀함수로 구현 가능한 것은 반복문으로 대-부분 구현 가능 (복잡도를 증가시키면 모두 구현 가능)(재귀함수 사용 이유)

factorial(5) == 5 * factorial(4)
factorial(4) == 4 * factorial(3)
factorial(3) == 3 * factorial(2)
factorial(2) == 2 * factorial(1)
factorial(1) == 1
//위에서 아래로 내려왔다가,
5 * 24
4 * 6
3 * 2
2 * 1
1
//아래에서 부터 위로 올라간다

function sigma(n) {
    if(n <= 1) {
        return n
    }
    return n + sigma(n-1)
}
sigma(5) == 5 + sigma(4)
sigma(4) == 4 + sigma(3)
sigma(3) == 3 + sigma(2)
sigma(2) == 2 + sigma(1)
sigma(1) == 1
5 + 10
4 + 6
3 + 3
2 + 1
1


function reverse(text) {
    text + ''  // 안전하게 문자열을 받겠다는 의지
    if (text.length <= 1) {
        return text
    }
    return reverse(text.slcie(1)) + text[0]
}

reverse('hello') == reverse('ello') + 'h'  // == 'olle' + 'h' == 'olleh'
reverse('ello') == reverse('llo') + 'e'  // == 'oll' + 'e' == 'olle'
reverse('llo') == reverse('lo') + 'l'  // == 'ol' + 'l' == 'oll'
reverse('lo') == reverse('o') + 'l'  // == 'o' + 'l' == 'ol'
reverse('o') == 'o'


// 피보나치
function fibo(n) {
    if(n <= 2) {
        return n
    }
    return fibo(n-1) + fibo(n-2)
}

fibo(4) == fibo(3) + fibo(2) == fibo(2) + fibo(1) + 2 == 2 + 1 + 2 == 5
// 왼쪽
fibo(3) == fibo(2) + fibo(1) == 2 + 1 == 3
fibo(2) == 2
fibo(1) == 1

// 오른쪽 fibo(2)를 다시해야하는 상황


3 in [1,2,3] // false
3 in [1,2,3,3] // true
3 in [1,2,4,4] // true

if (true) {
    var x = 10;
    let y =100;
}
// var는 살아남고, let은 죽는다.

function a() {
    var a = 10;
    var b = 100;
}

// function은 다 죽는다


// map
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// mdn 예제
let array = [1, 4, 9, 16];
let 값1 = array.map(x => x * 2);

array
(4) [1, 4, 9, 16]
값1
(4) [2, 8, 18, 32]

function 제곱(x) {
    return x ** 2
}
undefined

값2 = array.map(제곱);
(4) [1, 16, 81, 256]

array
(4) [1, 4, 9, 16]
값2
(4) [1, 16, 81, 256]

let data = [{
                class:1, 
                code:1, 
                name:'sungjae', 
                midterm:55
            },{
                class:1, 
                code:2, 
                name:'gildong', 
                midterm:75
            },{
                class:1, 
                code:3, 
                name:'kate', 
                midterm:100
            },{
                class:1, 
                code:4, 
                name:'simon', 
                midterm:25
            },{
                class:1, 
                code:5, 
                name:'alex', 
                midterm:50
            }]

data.map(x => x.midterm)

let s = 0;
data.map(x => x.midterm).forEach(y => s+=y)
s == 265

let array = [1, 2, 3, 4]
let result = []
function 제곱(x) {
    return x ** 2
}

array.forEach(x => result.push(x**2));
undefined
result
(4) [1, 4, 9, 16]

let data = [[1,2,3], [4,5,6], [7,8,9]] // 2차원배열에 전부다 2를 곱하고 싶다.
let newData = data.map(a => a.map(n => n*2)); // 요거는 상당히 어려운부분입니다. 시간이 걸릴거에요






let x = [10, 20, 30];
function test(a) {
    a[0] = 10000;
}
test(x) // a가 [10,20,30]을 가리킨다  x를 가리키는게 아니라
x
[10000, 20, 30]




let x = 10;
function test(a) {
    a = 10000;
}
test(x)
x
10

// 지금 알아둘 점 : 배열과 객체를 넘겨줄때에는 주의를 해야겠구나. 원본에 영향을 미치게 될 수 있으니


// filter

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// mdn 예제
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6); // 문자길이가 > 6 이 트루인것만 가져온다 이게중요함
console.log(result);

let x = [2, 6, 5, 4, 8, 5, 4, 3, 2, 9];
// 5초과 값들 뽑아내기
//filter는 인덱스 순서대로 순회해서 가져오는것
x.filter(z => z>5);  //[6,8,9]

// 배열안에 옵젝트들
let 회원정보 = [{
            아이디 : 'jayss',
            // 패스워드 : '1q2w3e4r!' 이렇게 저장되어있으면 난리나죠?
            패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5!',//hash SHA256
            성별 : '남',
            휴대폰번호 : '010-0000-1111',
            이메일 : 'jayss@gmail.com',
            가입연도 : '2021-12-2',
            주접속위치 : '123.242.161.149'
        },{
            아이디 : 'jayss2',
            패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5!',
            성별 : '남',
            휴대폰번호 : '010-0000-1111',
            이메일 : 'jayss2@gmail.com',
            가입연도 : '2020-12-2',
            주접속위치 : '123.242.161.149'
        },{
            아이디 : 'jayss3',
            패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5!',
            성별 : '여',
            휴대폰번호 : '010-0000-1111',
            이메일 : 'jayss3@gmail.com',
            가입연도 : '2021-12-2',
            주접속위치 : '123.242.161.149'
        },{
            아이디 : 'jayss4',
            패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5!',
            성별 : '여',
            휴대폰번호 : '010-0000-1111',
            이메일 : 'jayss4@gmail.com',
            가입연도 : '2021-12-2',
            주접속위치 : '123.242.161.149'
        }];

// 1번 남자인사람
회원정보.filter(el => el.성별 === '남');
// 2번 남자이면서 2021년도에 가입한사람
회원정보.filter(el => el.성별 === '남' && parseInt(el.가입연도) === 2021); // 요거는 년도에만 국한됨
회원정보.filter(el => el.성별 === '남' && el.가입연도.split("-")[0] === '2021');
회원정보.filter(el => el.성별 === '남' && el.가입연도.slice(0,4) === "2021");
// 아이디가 jayss인 사람을 뽑아주세요 find로
// find 는 찾으면 멈춥니다. 고유값을 찾을때는 find를 찾아보자
회원정보.find(el => el.아이디 === 'jayss');
let target = "jjang";
let data = 회원정보.find(el => el.아이디 === target);


// 글이 100개 있다
// 25개는 일상 글
// 50개는 개발관련 글
// 25개는 취미관련 글
let blogs = [{
            id: 1,
            title: 'title1',
            content: 'content1',
            section: '일상',
        }, {
            id: 2,
            title: 'title2',
            content: 'content2',
            section: '취미1',
        }, {
            id: 3,
            title: 'title3',
            content: 'content3',
            section: '개발',
        }, {
            id: 4,
            title: 'title4',
            content: 'content4',
            section: '취미2',
        }];

let 검색값 = '개발'
// let data = 검색값? ?? : ??   -> 삼항연산자를 이용해서 검색값만 나오게 필터링하자
// 섹션이 빈경우만 아니라면 무조건 트루임 ''요로케 공백만 아니면
let data = 검색값? blogs.filter(x => x.section === 검색값) : blogs; //혹은 ''에 대한 결과가 없습니다.


let o = {
    a : 'aa',
    b : 'bb',
    c : 'cc'
}

Object.keys(o)
Object.values(o)
Object.entries(o)
Object.is(0, -0)

// 우리는 오브젝트 점 블라블라가 아니라 (위 경우 한정) o.블라블라 하고싶다!!
// 오브젝트는 순회가 안된다! 대체 왜,,,
// 그랬더니 만든게 Map(이건 자료형임) map은 메서드
// 키와 밸류로 이뤄진 자료형

let m = new Map();

m.set('하나', 'one!!!!!!!!!'); // one을 강조하고싶어
m.set('둘', 'two');
m.set('셋', 'three');
m.set('하나', 'one'); // 다시 생각해보니 통일시켜야겠어

for (let i of m) {
    console.log(i)
}
['하나', 'one']
['둘', 'two']
['셋', 'three']


m.get('하나') // 'one'
m.has('하나') // true
m.keys('하나') // 키들이 출력
m.values('하나') // 값들이 출력
m.delete('하나') // 삭제됨
m.entries()


// 인덱스를 가지는 자료형을 맵핑하기
let temp = new Map([[1, 10],
                    [2, 20],
                    [3, 30],
                    [4, 40]]);
    
console.log(temp);


// 옵젝을 맵으로 바꾸기?! 암트 옵젝인 자료를 맵으로 바꿔주는 방법
let o = {
    a : 'aa',
    b : 'bb',
    c : 'cc'
}

let kwak = new Map(Object.entries(o));
kwak
kwak.size


// Set 중복을 허락하지 않아요. 교집합 합집합 차집합이 가능해여. 중복을 제거하는 용도로도 사용합니다.

let s = new Set('abcdeeeeeeeee');
console.log(s);
console.log(s.size);

s
s.add('f')
s.delete('b')
s.has('c')
s.size()
s.forEach(i => console.log(i));




let a = new Set('abc');
let b = new Set('cde');
[...a].filter(value => b.has(value))