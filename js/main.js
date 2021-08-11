$(function(){
    const upTitle01 = document.querySelectorAll('.tit01 p');
    const upTitle02 = document.querySelectorAll('.tit02 p');
    const underLine = document.querySelectorAll('.underline');
    const chBarColor = document.querySelectorAll('.nav li');
    const upTextAbout = document.querySelectorAll('.about .textbox');
    const PortNav = document.querySelectorAll('.portfolio__nav li')
    const purgio = document.querySelector('.purgio');
    const twks = document.querySelector('.twks');
    const converse = document.querySelector('.converse');
    const seouledu = document.querySelector('.seouledu');
    let portSct = document.querySelector('.portfolio').offsetTop;

    //nav 클릭 이동
    $('.nav li:nth-child(1)').click(function () {
        let home = $('.home').offset().top;
        $('html, body').animate({
            scrollTop: home
        }, 800);
    });
    $('.nav li:nth-child(2)').click(function () {
        let about = $('.about').offset().top;
        $('html, body').animate({
            scrollTop: about
        }, 800);
    });
    $('.nav li:nth-child(3)').click(function () {
        let portfoilo = $('.portfolio').offset().top + 200;
        console.log(portfoilo);
        $('html, body').animate({
            scrollTop: portfoilo
        }, 800);
    });
    
    //scroll효과
    $(window).scroll( ()=> {
        sct = $(window).scrollTop();
        console.log(sct);
        sct >= 800
        ? upTitle01.forEach((p, i) => setTimeout(() => p.classList.add('up'), 100 * i))
        : upTitle01.forEach((p, i) => setTimeout(() => p.classList.remove('up'), 100 * i))

        sct >= 2000
        ? chBarColor.forEach((l, i) => l.classList.add('ch-barbg'))
        : chBarColor.forEach((l, i) => l.classList.remove('ch-barbg'));

        if (sct >= 1600) {
            underLine[0].classList.add('line');
            upTextAbout[0].classList.add('up');
        }
        if (sct >= 1800) { 
            underLine[1].classList.add('line');
            upTextAbout[1].classList.add('up');
        }
        if (sct >= 2100) { 
            underLine[2].classList.add('line');
            upTextAbout[2].classList.add('up');
        }
        if (sct >= 2400) { 
            underLine[3].classList.add('line');
            upTextAbout[3].classList.add('up');
        }

        sct >= 3300
        ? upTitle02.forEach((p, i) => setTimeout(() => p.classList.add('up'), 100 * i))
        : upTitle02.forEach((p, i) => setTimeout(() => p.classList.remove('up'), 100 * i))
       
        if (sct >= (portSct + 200)) {
            PortNav.forEach((p, i) =>
             setTimeout(() => p.classList.add('up'), 100 * i)
            );
        }       

        //반응형
        const media1599 = window.matchMedia( '(max-width:1599px)' );
        if(media1599.matches == true) {
            if (sct >= 700) {
                upTitle01.forEach((p, i) =>
                  setTimeout(() => p.classList.add('up'), 100 * i)
                );
            }

            sct >= 1800
            ? chBarColor.forEach((l, i) => l.classList.add('ch-barbg'))
            : chBarColor.forEach((l, i) => l.classList.remove('ch-barbg') );

            if (sct >= 3000) {
                upTitle02.forEach((p, i) =>
                    setTimeout(() => p.classList.add('up'), 100 * i)
                );
            }
        }

        const media1279 = window.matchMedia( '(max-width:1279px)' );
        if(media1279.matches == true) {
            sct >= 1900
            ? chBarColor.forEach((l, i) => l.classList.add('ch-barbg'))
            : chBarColor.forEach((l, i) => l.classList.remove('ch-barbg'));
        }

        const media1023 = window.matchMedia( '(max-width:1023px)' );
        if(media1023.matches == true) {
            if (sct >= portSct) {
                PortNav.forEach((p, i) =>
                 setTimeout(() => p.classList.add('up'), 100 * i)
                );
            } 
        }

        const media779 = window.matchMedia( '(max-width:779px)' );
        if(media779.matches == true) {
            if (sct >= 1400) {
                underLine[0].classList.add('line');
                upTextAbout[0].classList.add('up');
            }
            if (sct >= 1600) { 
                underLine[1].classList.add('line');
                upTextAbout[1].classList.add('up');
            }
            if (sct >= 1800) { 
                underLine[2].classList.add('line');
                upTextAbout[2].classList.add('up');
            }
            if (sct >= 2000) { 
                underLine[3].classList.add('line');
                upTextAbout[3].classList.add('up');
            }

            sct >= 2500
            ? upTitle02.forEach((p, i) => setTimeout(() => p.classList.add('up'), 100 * i))
            : upTitle02.forEach((p, i) => setTimeout(() => p.classList.remove('up'), 100 * i))

            console.log((portSct - 300));
            if (sct >= portSct - 300) {
                PortNav.forEach((p, i) =>
                 setTimeout(() => p.classList.add('up'), 100 * i)
                );
            }
        }
    })
    //scroll 끝

    //포트폴리오 nav 클릭
    PortNav[0].addEventListener('click', ()=> {
        purgio.classList.add('on');
        twks.classList.remove('on');
        converse.classList.remove('on');
        seouledu.classList.remove('on');
    })
    PortNav[1].addEventListener('click', ()=> {
        purgio.classList.remove('on');
        twks.classList.add('on');
        converse.classList.remove('on');
        seouledu.classList.remove('on');
    })
    PortNav[2].addEventListener('click', ()=> {
        purgio.classList.remove('on');
        twks.classList.remove('on');
        converse.classList.add('on');
        seouledu.classList.remove('on');
    })
    PortNav[3].addEventListener('click', ()=> {
        purgio.classList.remove('on');
        twks.classList.remove('on');
        converse.classList.remove('on');
        seouledu.classList.add('on');
    })

    //타이핑효과
    let i = 0,
    j = 0;
  
    const textArray = ["Hello!", "I'm Min!"],
    speed = 150,
    target = document.querySelector('.tiping');
  
    function txtnum() {
        j == textArray.length - 1
        ? j = 0
        : j++
    }
  
    function type() {
        i < textArray[j].length
        ? (target.innerHTML += textArray[j].charAt(i), i++, setTimeout(type, speed))
        : remove()
    }
  
    function remove() {
        0 <= i
        ? (target.innerHTML = target.innerHTML.slice(0, i), i--, setTimeout(remove, speed))
        : (type(), txtnum())
    }
    type();
})
