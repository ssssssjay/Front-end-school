// https://ko.javascript.info/ 소개
// https://www.w3schools.com/ 소개

// 자바스크립트로 출력하는 방법
// let age = 10; //지금은 다루지 않습니다.
// const pi = 3.141592; // 지금은 다루지 않습니다.
var name = '사용자';
var age = 20;

//html에 접근하겠습니다. 요소를 아이디로 가져옵니다. 타이틀이라는 아이디. 에치티에멜문서에 넣겠다. 웰컴투 제이에스100제
document.getElementById('title').innerHTML = 'Welcome to JS100제';
//html에 접근하겠다. 적어라. 20 + 20을
document.write(20 + 20);

// 브라우저에게. 경고창을 띄워주세요. 네임이라는 이름을가진
window.alert(name);
console.log(age);
// 한 줄 주석
/* 주석
입니다. */