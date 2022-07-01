const tabs = document.querySelector('.tabs');
const content = document.querySelectorAll('.content');
const tabBtn = document.querySelector('.tab3-btn');
const tabBtnContents = document.querySelectorAll('.content3');

const changeClass = el => {
    for(let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
    
};

tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.tab;
    changeClass(e.target);
    for(let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        if (content[i].dataset.content === currTab) {
            content[i].classList.add('active');
        }
    }
});




const tabBtnChangeClass = cl => {
    for(let i = 0; i < tabBtn.children.length; i++) {
        tabBtn.children[i].classList.remove('tab-active');
    }
    cl.classList.add('tab-active');
    
};

tabBtn.addEventListener('click', c => {
    const currentTab = c.target.dataset.tab3;
    tabBtnChangeClass(c.target);
    for(let i = 0; i < tabBtnContents.length; i++) {
        tabBtnContents[i].classList.remove('cont-active');
        if (tabBtnContents[i].dataset.cont === currentTab) {
            tabBtnContents[i].classList.add('cont-active');
        }
    }
});