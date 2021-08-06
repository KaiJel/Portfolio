$(function(){
    const upTitle01 = document.querySelectorAll('.tit01 p');
    const upTitle02 = document.querySelectorAll('.tit02 p');
    const underLine = document.querySelectorAll('.underline');
    const upTextSkill = document.querySelectorAll('.about .textbox');
    const PortNav = document.querySelectorAll('.portfolio__nav li')
    const purgio = document.querySelector('.purgio');
    const twks = document.querySelector('.twks');
    const converse = document.querySelector('.converse');
    const seouledu = document.querySelector('.seouledu');


    //nav 누르면 각 위치로 top값만큼 이동하기
    
    //scroll효과
    $(window).scroll( ()=> {
        sct = $(window).scrollTop();
        console.log(sct);
        if (sct >= 1000) {
            upTitle01.forEach((p, i) =>
              setTimeout(() => p.classList.add('up'), 100 * i)
            );
        }
        if (sct >= 2000) { 
            underLine[0].classList.add('line');
            upTextSkill[0].classList.add('up');
         }
        if (sct >= 2200) { 
            underLine[1].classList.add('line');
            upTextSkill[1].classList.add('up');
        }
        if (sct >= 2500) { 
            underLine[2].classList.add('line');
            upTextSkill[2].classList.add('up');
        }
        if (sct >= 2800) { 
            underLine[3].classList.add('line');
            upTextSkill[3].classList.add('up');
        }

        if (sct >= 4000) {
            upTitle02.forEach((p, i) =>
              setTimeout(() => p.classList.add('up'), 100 * i)
            );
        }
        if (sct >= 5400) {
            PortNav.forEach((p, i) =>
            setTimeout(() => p.classList.add('up'), 100 * i)
          );
        }
    })
    //scroll함수 끝
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

})