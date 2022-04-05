const backImg = ["backimg1.jpg", "backimg2.jpg", "backimg3.jpeg", "backimg4.jpg", "backimg5.jpeg",
                 "backimg6.jpeg", "backimg7.jpg", "backimg8.jpg", "backimg9.jpg", "backimg10.JPG"]


const randomImg = backImg[Math.floor(Math.random()*backImg.length)]

const bgImg = document.createElement("img");

bgImg.src = `../images/${randomImg}`;

document.body.appendChild(bgImg);