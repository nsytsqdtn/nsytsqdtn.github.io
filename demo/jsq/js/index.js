 // 照片墙
 var pans = document.querySelectorAll(".panel");
 var cont = document.querySelector(".container");
 var ps = cont.querySelectorAll("div p");
var texts = document.getElementsByClassName("text");
 console.log(texts)
 var hadopen = pans[0];
 var i;
 length = pans.length;
 var n = 0;
 var flag = false;

 function open() {
     this.classList.toggle("change");
     if (hadopen != this) {
         hadopen.classList.remove("change");
         hadopen.style.animation = "";
     }
     hadopen = this;
     if (audio.paused) {
         n = this.index;
         cutSing();
         Sing();
         for (i = 0; i < length; i++) {
             if (i != n)
             {
                 texts[i].style.display = "none";
             }
             else {
                 texts[i].style.display = "block";
             }
             
         }  
     } 
     else {
         if(this.index != n){
         n = this.index;
         cutSing();
             Sing();
             for (i = 0; i < length; i++) {
             if (i != n)
             {
                 texts[i].style.display = "none";
             }
             else {
                 texts[i].style.display = "block";
             }  
         }
         }
         else
         {
             stop()
             for (i = 0; i < length; i++) {
                 texts[i].style.display = "none";
            }
        }
         
     } 
 }

 function down(e) {
     if (e.propertyName == "flex-grow")
         this.classList.toggle("alter");
 }

 for (i = 0; i < length; i++) {
     ((i) => {
         pa = pans[i];
         pa.index = i;
         pa.addEventListener("click", open);
         pa.addEventListener("transitionend", down);
     })(i)
 }


 // 播放器
 var play_pause = document.querySelector('.b'),
     play_prev = document.querySelector('.a'),
     play_next = document.querySelector('.c'),
     player = document.querySelector('.player'),
     sname = document.querySelector('.sname'),
     sn = document.querySelector('.sn'),
     co = document.querySelector('.control'),
     tracktime = document.querySelector('.track-time'),
     trackbar = document.querySelector('.track-bar'),
     bg = document.querySelector('.bg'),
     currenttime = document.querySelector('.current-time'),
     totaltime = document.querySelector('.total-time'),
     homepage = document.querySelector('.homepage'),
     singer = document.querySelector('.singer'),
     point = document.querySelector('.point'),
     pause = play_pause.children[0],
     play = play_pause.children[1],
     audio = document.getElementsByTagName("audio")[0];
     allbar = document.querySelector('.all-bar'),
     trackbar = document.querySelector('.track-bar'),
     tracktime = document.querySelector('.track-time'),
     but = document.querySelectorAll(".control div");

 var snames = [
     "句号",
     "传闻",
     "不能说的秘密",
     "走马",
     "永不失联的爱",
     "Blueming",
     "Lemon"
 ];

 var sns = [
     "邓紫棋-句号",
     "周柏豪-传闻",
     "周杰伦-不能说的秘密",
     "刘宇宁-走马",
     "单依纯-永不失联的爱",
     "iu-Blueming",
     "米津玄师-Lemon"
 ];

 var sings = [
     "./mp3/邓紫棋 - 句号.mp3",
     "./mp3/周柏豪 - 传闻.mp3",
     "./mp3/周杰伦 - 不能说的秘密.mp3",
     "./mp3/走马（Cover 陈粒） - 摩登兄弟.mp3",
     "./mp3/单依纯-永不失联的爱.mp3",
     "./mp3/IU - Blueming.mp3",
     "./mp3/Lemon - 米津玄師.mp3"
 ]

 var bgs = [
     "./img/0.jpeg",
     "./img/1.jpeg",
     "./img/2.jpeg",
     "./img/3.jpeg",
     "./img/4.jpeg",
     "./img/5.webp",
     "./img/6.jpeg"
 ]

 var progress_t,
     progress_loc,
     c_m,
     ct_minutes,
     ct_seconds,
     cur_minutes,
     cur_seconds,
     dur_minutes,
     dur_seconds,
     play_progress;



 function button(obj) {
     obj.addEventListener("mousedown", () => {
         obj.classList.add("click");
     })
     obj.addEventListener("mouseup", () => {
         obj.classList.remove("click");
     })
 }
 button(play_pause);
 button(play_prev);
 button(play_next);


 function updateTime() {
    setTimeout(()=>{
        let min = Math.floor(audio.duration / 60);
        let sec = Math.floor(audio.duration % 60);
        if (min < 10) {
            min = '0' + min;
        }
        if (sec < 10) {
            sec = '0' + sec;
        }
            totaltime.innerText = min + ':' + sec;
    },100)
    
 }

 function Sing() {
     clearInterval(timer);
     player.classList.add('active');
     point.classList.add("po");
     singer.classList.add("round");
     homepage.classList.add("homecolor");
     pans[n].style.animationName = "frams" + n;
     pans[n].style.animationDuration = "20S";
     pans[n].style.animationIterationCount = "infinite";
     but.forEach(i => {
         i.classList.add("colo");
     });
     co.classList.add("con");
     play.style.display = "block";
     pause.style.display = "none";
     audio.play();
     updateTime();
     var timer = setInterval(function () {
         trackbar.style.width = (Math.floor(audio.currentTime) * rule()) + "px";
         let curmin = Math.floor(audio.currentTime / 60);
         let cursec = Math.floor(audio.currentTime % 60);
         if (curmin < 10) {
             curmin = '0' + curmin;
         }
         if (cursec < 10) {
             cursec = '0' + cursec;
         }
         if (isNaN(curmin) || isNaN(cursec)) {
             currenttime.innerText = '00:00';
         } else {
             currenttime.innerText = curmin + ':' + cursec;
         }
         if (audio.ended) {
             cutSing();
             audio.play();
         }
     }, 1000);

     // pans[n].classList.toggle("change");
 }

 function stop() {
     player.classList.remove('active');
     point.classList.remove("po");
     singer.classList.remove("round");
     homepage.classList.remove("homecolor");
     pans[n].style.animation = "";
     but.forEach(i => {
         i.classList.remove("colo");
     });
     co.classList.remove("con");
     play.style.display = "none";
     pause.style.display = "block";
     audio.pause();
 }

 function cutSing() {
     sname.innerText = snames[n];
     sn.innerText = sns[n];
     singer.style.backgroundImage = "url(" + bgs[n] + ")";
     bg.style.backgroundImage = "url(" + bgs[n] + ")";
     audio.src = sings[n];
 }

 // console.log(document.styleSheets[0].cssRules[0].style);
 function getstyle(obj, mode) {
     return getComputedStyle(obj, null)[mode];
 }

 function rule() {
     return Number((parseInt(getComputedStyle(allbar, null)['width']) / audio.duration));
 }

//  function main() {

     play_pause.addEventListener("click", () => {
         pans[n].classList.toggle("change");
         if (audio.paused) {
            Sing();
         } else {
             stop();
         }
         console.log(audio.duration);
     })


     play_next.addEventListener("click", () => {
         pans[n].classList.remove("change");
         pans[n].style.animation = "";
         texts[n].style.display = "none";
         n++;
         if (n == length)
             n = 0;
         texts[n].style.display = "block";
         pans[n].classList.toggle("change");
         cutSing();
         Sing();

     })
     play_prev.addEventListener("click", () => {
         pans[n].classList.remove("change");
         pans[n].style.animation = "";
         texts[n].style.display = "none";
         n--;
         if (n == -1)
             n = length - 1;
         texts[n].style.display = "block";
         pans[n].classList.toggle("change");
         cutSing();
         Sing();
     })

     allbar.addEventListener("mousemove", (e) => {
         let process = e.offsetX;
         console.log(process);

     })
     allbar.addEventListener("click", (e) => {
         let process = e.offsetX;
         trackbar.style.width = process + "px";
         console.log(process * rule());
         audio.currentTime = process / rule();
     })
//  }
//  main();