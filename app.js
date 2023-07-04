// alert('하이')

//클래스는 .으로,이지미태그를 선택
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const h1 = document.querySelector('h1');

//랜덤 번호
const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;


img1.setAttribute('src', 'images/dice' + randomNumber1 + '.png');
img2.setAttribute('src', 'images/dice' + randomNumber2 + '.png');




console.log(randomNumber1);
console.log(randomNumber2);


h1.innerText = '😂누가 이겼는지?';


if (randomNumber1 > randomNumber2) {
    h1.innerText = '😊Player1이 이겼습니다'
} else if (randomNumber1 < randomNumber2) {
    h1.innerText = '😍Player2가 이겼습니다'
} else {
    h1.innerText = '😎비겼습니다'
}

//h1.innerText='누가 이겼는지?';



