document.addEventListener("DOMContentLoaded", function(){

    console.log(Math.random());
    console.log(Math.random());
    console.log(Math.random() * 10);
    console.log(Math.random() * 100);
    console.log(Math.round(Math.random() * 10))
    console.log(Math.round(Math.random() * 100))

    console.log(Math.floor(4.9))
    console.log(Math.ceil(4.1))
    console.log(Math.round(4.1))
    console.log(Math.round(4.9))

    ////////////////////////////////////


    let fruit = ["🍎", "🍌", "🍒", "🍇", "🥭"]

    function getF(){
        return fruit[Math.floor(Math.random() * fruit.length)];
    }

    let r_fruit = document.querySelector(".r_fruit");
    let g_button = document.querySelector(".g_button");
      
    g_button.addEventListener("click", function(){
        r_fruit.textContent = "Ваш фрукт дня:" + getF()
    });

    ////////////////////////////////////

    let popup = document.querySelector(".popup");
    let close = document.querySelector(".close");

    close.addEventListener("click", function(){
        popup.style.display = "none";
    });

    ////////////////////////////////////

    let random_images = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScqg2tvRjDXFlmPayv7Md3HKbIHriE1atz0A&s",
        "https://99px.ru/sstorage/86/2017/04/image_862604172209045345869.gif",
        "https://i.pinimg.com/originals/fb/e2/63/fbe263256cf8edb017c0a6ed848b9216.gif",
        "https://cs4.pikabu.ru/post_img/2016/05/26/9/1464272230137630231.gif"
    ];

     function get_img(){
        return random_images[Math.floor(Math.random() * random_images.length)];
    };

    let boxes = document.querySelectorAll(".box");
    let generate_img = document.querySelector(".generate_img");

    function images(){
        boxes.forEach(function(box) {
            box.innerHTML = "";
            let img = document.createElement("img");
            img.src = get_img();
            img.style.width = "10vw";
            box.appendChild(img);
        });
    };

    generate_img.addEventListener("click", images)


});