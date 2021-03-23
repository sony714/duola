let n = 0;
let string = `
*{
    box-sizing: border-box;
    padding: 0;margin: 0;
}

main {
    width: 600px;
    height: 600px;
    border-radius: 50%; 
    border: 3px solid black;
    margin: 10vh auto;
    background-color: rgb(60,157,202);
    position: relative;
}

.face {
    width: 540px;
    height: 480px;
    border:2px solid thick;
    background-color: white;
    border-radius: 270px/240px;
    position: absolute;
    top: 110px;
    left: 30px;
}
.eye {
    width: 120px;
    height: 140px;
    border: 1px solid black;
    border-radius: 60px/70px;
    background-color: white;
    z-index: 1;
}

.left {
    position: absolute;
    right: 50%;
    top: 55px;
}
 .right {
    position: absolute;
    left: 50%;
    top: 55px;
}
.nose {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgb(185,3,25);
    position: relative;
    left: 50%;
    margin-left: -23px;
    top:55px;
    z-index: 1;
}
.nose::after{
    content: '';
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: relative;
    top: 15px;
    left: 8px;
    background-color:white;
}
.centerLine{
    width: 2px;
    height: 290px;
    background-color: #000;
    position: absolute;
    left: 50%;
    margin-left: -2.5   px;
    top:95px;
    z-index: 1;
}

.mouth {
   width: 400px;
   height: 400px;
   border-radius: 100%;
   position: relative;
   left: 50%;
   margin-left: -200px;
   bottom: 52px;
   background-color: #000;
}
.mouth::after{
    content: '';
    display: block;
    border-radius: 100%;
    position: relative;
    width: 402px;
    height: 401px;
    top: -3px;
    left: -1.5px;
    background-color: #fff;
}
.leftLine{
    width: 2px;
    height: 150px;
    background-color: #000;
    position: absolute;
    transform: rotate(285deg);
    top: 112px;
    left: 120px;
}
.leftLine::before{
    content: '';
    display: block;
    width: 2px;
    height: 150px;
    background-color: #000;
    position: absolute;
    transform: rotate(-14deg);
    top: -15px;
    left: -55px;
}
.leftLine::after {
    content: '';
    display: block;
    width: 2px;
    height: 150px;
    background-color: #000;
    position: absolute;
    transform: rotate(330deg);
    top: 10px;
    left: -110px;
}

.rightLine {
    width: 2px;
    height: 150px;
    background-color: #000;
    position: absolute;
    transform: rotate(75deg);
    top: 112px;
    right: 125px;
}
.rightLine::before{
    content: '';
    display: block;
    width: 2px;
    height: 150px;
    background-color: #000;
    position:relative;
    transform: rotate(10deg);
    top: -5px;
    right:-50px;
}
.rightLine::after{
    content: '';
    display: block;
    width: 2px;
    height: 150px;
    background-color: #000;
    position:relative;
    transform: rotate(26deg);
    top: -136px;
    right:-100px;
}

.eye_black{
    width: 25px;
    height: 35px;
    border-radius: 100%;
    background-color: #000;
    position: relative;
    top: 85px;
    left: 15px;
    animation: move 5s ease infinite;
}

.eye_black::after{
    content: '';
    display: block;
    width: 10px;
    height: 16px;
    border-radius: 5px/8px;
    background-color: white;
    position: relative;
    left: 5px;
    top: 8px;
}

@keyframes move {
    16%{top:95px;left:30px;}
    32%{top:100px;left:60px;}
    48%{top:80px;left:80px}
    64%{top:100px;left:60px}
    80%{top:95px;left:30px}
  }
`
let move = document.getElementById('move')
let move2 = document.getElementById('move2')
move.innerText = string.substr(0, n)
move2.innerHTML = string.substr(0, n)
let id = setInterval(() => {
    n = n + 1;
    if (n > string.length) {
        window.clearInterval(id)
        return
    }
    move.innerText = string.substr(0, n)
    move2.innerHTML = string.substr(0, n)
    window.scrollTo(0, 9999);
}, 0)