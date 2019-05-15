//F1进入全屏模式
function loadFullScreen() {
    //进入全屏
    function requestFullScreen(element) {
        let de = document.querySelector(element) || document.documentElement;
        if (de.requestFullscreen) {
            de.requestFullscreen();
        } else if (de.mozRequestFullScreen) {
            de.mozRequestFullScreen();
        } else if (de.webkitRequestFullScreen) {
            de.webkitRequestFullScreen();
        }
    }

//退出全屏
    function exitFullscreen(element) {
        let de = document.querySelector(element) || document.documentElement;
        if (de.exitFullscreen) {
            de.exitFullscreen();
        } else if (de.mozCancelFullScreen) {
            de.mozCancelFullScreen();
        } else if (de.webkitCancelFullScreen) {
            de.webkitCancelFullScreen();
        }
    }

    document.onkeydown = function (ev) {
        keydownForScreen(ev);
    }

    function keydownForScreen(ev) {
        if (ev.keyCode == 113) {
            requestFullScreen();
            requestFullScreen('body');
            requestFullScreen('#main');
        }
    }
}

//加载性能监视器
function loadStats() {
    stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '8px';
    stats.domElement.style.top = '8px';
    let body = document.getElementsByTagName('body');
    body[0].appendChild(stats.domElement);
}

//屏幕适应
function loadAutoScreen(camera, renderer) {
    window.addEventListener('resize', onResize, false);
    function onResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
}


