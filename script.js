const gameContainer = document.querySelector(".container"),
userResult = document.querySelector(".user_result img"),
cpuResult = document.querySelector(".cpu_result img"),
result = document.querySelector(".result"),
opt_img = document.querySelectorAll(".opt_img");


opt_img.forEach((image , index) => {

  image.addEventListener("click" ,(e) => {
    image.classList.add("active");

    userResult.src = cpuResult.src = "image/rock.png";
    result.textContent = "Wait...";

    opt_img.forEach((image2 ,index2) =>{
     
     index !== index2 && image2.classList.remove("active");
     
    });

    gameContainer.classList.add("start");

     let time = setTimeout(() =>{

      gameContainer.classList.remove("start");

     let imageSrc = e.target.querySelector("img").src;
 
     userResult.src = imageSrc;
     let randomNumber = Math.floor(Math.random() * 3);
     
     let cpuImages = ["image/rock.png" ,"image/paper.png" ,"image/scissor.png"];
     cpuResult.src = cpuImages[randomNumber];
 
     let cpuValue = ["R","P","S"] [randomNumber];
     
     let userValue = ["R","P","S"] [index];
     let outcomes = {
       RR: "Draw",
       RP: "Cpu",
       RS: "User",
       PP: "Draw",
       PR: "User",
       PS: "Cpu",
       SS: "Draw",
       SR: "Cpu",
       SP: "User"
     };
 
     let outcomeValue = outcomes[userValue + cpuValue];
 
    result.textContent = userValue === cpuValue ? "Match Draw" : `${outcomeValue} Won!!`;

     }, 2500);
  });
  
}); 


