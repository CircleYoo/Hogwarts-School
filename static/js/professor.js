(function(){
    'use strict';
    const probody = document.querySelector('body')
    const pro_img_cnt = document.querySelector('.pro_cnt');
    
    //반응형
    let windowWidth = window.matchMedia('screen and (max-width: 850px)');
    
    // json가져오기
    function loadItems(){
        return fetch("../static/json/professor.json")
            .then((response)=>response.json())
            .then((json)=>json.items);
    }
    // json 뿌리기
    loadItems().then((items)=>{
        items.forEach((ele, i) => {
            const imgDiv = document.createElement('div');
            const image = document.createElement('img');
            const imfoDiv =  document.createElement('div');
            pro_img_cnt.appendChild(imgDiv);
            imgDiv.classList.add('proImage', `imgNum${i}`);
            image.src=`${ele.image}`;
            image.classList.add('pro_imgSize')
            imfoDiv.style.width=`${ele.width}`
            imfoDiv.style.height=`${ele.height}`
            imgDiv.style.width=`${ele.width}`
            imgDiv.style.height=`${ele.height}`
            imfoDiv.innerHTML=`
                ${house()}
                <div class='pro_textCnt'>
                    <div class='pro_position'>${ele.position}</div>
                    <div class='pro_name'>${ele.name}</div>
                    <div class='pro_subject'>${ele.subject}</div>
                    <div class='pro_years'>${ele.years}</div>
                </div>
            `
            imfoDiv.classList.add('proHidden', 'pro_hover');
            
            // 기숙사로고 관리
            function house(){
                if(ele.house){
                    return `<img class='pro_house' src="${ele.house}"></img>`
                } return '';
            };
            imgDiv.append(image);
            imgDiv.append(imfoDiv);
            // hover event
            imgDiv.addEventListener('mouseover', e=>{
                imfoDiv.classList.toggle('proHidden', false)
            })
            imgDiv.addEventListener('mouseout', e=>{
                imfoDiv.classList.toggle('proHidden', true)
            })
            
            // -------mouse trust event-----------------------------mouse trust event-----------------
            
                window.addEventListener('wheel', e=>{
                    window.addEventListener('scroll', e=>{ //스크롤 막기
                        e.preventDefault();
                        e.stopPropagation();
                        return false;
                    });
                    if(!(windowWidth.matches)){ 
                        pro_img_cnt.addEventListener("mousemove", (e) => {
                            let width = window.innerWidth / 2;
                            let mouseMoved2 = ((width - e.pageX*2.5));
                            let mouseMoved3 = ((width - e.pageY*2.8));
                            imgDiv.style.transform = 'translate(' + mouseMoved2 + 'px, ' + mouseMoved3 + 'px)';
                            imgDiv.style.transition=  'all 1.5s';
                        });
                    } else { //모바일
                        // 세로 스크롤 터치하기
                        let isDown = false;
                        let startY;
                        let scrollTop;

                        probody.addEventListener('mousedown', e => {
                            isDown = true;
                            startY = e.pageY - probody.offsetTop;
                            scrollTop = probody.scrollTop;
                            console.log('mousedown')
                        });

                        probody.addEventListener('mouseleave', () => {
                            isDown = false;
                            console.log('mouseleave')
                        });

                        probody.addEventListener('mouseup', () => {
                            isDown = false;
                            console.log('mouseup')
                        });

                        probody.addEventListener('mousemove', e => {
                            if (!isDown) return; 
                            e.preventDefault();
                            const y = e.pageY - probody.offsetTop;
                            const walk = y - startY;
                            probody.scrollTop = scrollTop - walk;
                            console.log('mousemove')
                        });
                    }
                })
        });
    })
    //paper 높이 조절용 -근데 안됌.
    function setScreenSize(){
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setScreenSize();
    //cursor grab grabbing 
    probody.addEventListener('mousedown', e=>{
        probody.classList.add('his_grabbing');
    })
    probody.addEventListener('mouseup', e=>{
        probody.classList.remove('his_grabbing');
    })   

})()