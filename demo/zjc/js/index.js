 // 照片墙
 var pans = document.querySelectorAll(".panel");
 var cont = document.querySelector(".container");
 var ps = cont.querySelectorAll("div p");

 var hadopen = pans[0];
 var i;
 length = pans.length;
 var n = 0;
 var flag = false;

function open() {
     if (audio.paused) {
        this.classList.toggle("change");
        if (hadopen != this) {
            hadopen.classList.remove("change");
            hadopen.style.animation = "";
        }
        hadopen = this;
     
         cutSing();
         Sing();
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

var div_string = [
    "<div class='panel pan1'>\n<p>'蒋诗琪-问号'</p>\n</div>",
    "<div class='panel pan2'>\n<p>'蒋诗琪-传闻'</p>\n</div>",
    "<div class='panel pan3'>\n<p>'蒋诗琪-不能说的秘密'</p>\n</div>",
    "<div class='panel pan4'>\n<p>'蒋诗琪-走马'</p>\n</div>",
    "<div class='panel pan5'>\n<p>'蒋诗琪-永不失联的爱'</p>\n</div>",
    "<div class='panel pan6'>\n<p>'蒋诗琪-Blueming'</p>\n</div>",
    "<div class='panel pan7'>\n<p>'蒋诗琪-Lemon'</p>\n</div>"
]
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
     "./img/1.jpg",
     "./img/2.jpg",
     "./img/3.jpg",
     "./img/4.jpg",
     "./img/5.jpg",
     "./img/6.jpg",
     "./img/7.jpg"
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
     pans[0].style.animationName = "frams" + n;
     pans[0].style.animationDuration = "20S";
     pans[0].style.animationIterationCount = "infinite";
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
     pans[0].style.animation = "";
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
    pans[0].classList.toggle("change");
    if (audio.paused) {
    Sing();
    } else {
        stop();
    }
    console.log(audio.duration);
})


play_next.addEventListener("click", () => {
    pans[0].classList.remove("change");
    pans[0].style.animation = "";
    n++;
    if (n > 6)
        n = 0;
    
    pans[0].innerHTML = div_string[n]
//  alert(pans[n].innerHTML)
    pans[0].classList.toggle("change");
    cutSing();
    Sing();

})
play_prev.addEventListener("click", () => {
    pans[0].classList.remove("change");
    pans[0].style.animation = "";
    n--;
    if (n == -1)
        n = 6;
    pans[0].innerHTML = div_string[n]
    pans[0].classList.toggle("change");
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