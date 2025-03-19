function ab(){
    document.getElementById("abspc").style.display='flex';  
    document.getElementById("remove").style.display='none';
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });  
    document.getElementById("overfl").style.overflowY="auto";   
}
function nxt() {
    let rows = document.querySelectorAll("tr.tabsld");
    rows.forEach((row, index) => {
        setTimeout(() => {
            row.classList.add("show");
        }, index * 200);
    });
}

document.addEventListener("DOMContentLoaded",function(){
    tab1("#nametab"); 
    tab2("#imgtab"); 
    tab3("#fstbt");
    tab4("#cert")
}); 
function tab1(tableSelector){
    rows=document.querySelectorAll(`${tableSelector} th.rows`); 
    rows.forEach((row, index) => {
        setTimeout(() => {
            row.classList.add("show1");
        }, index * 200);
    });
}
function tab2(tableSelector1){
    rows2=document.querySelectorAll(`${tableSelector1} th.rows2`); 
    rows2.forEach((row, index) => {
        setTimeout(() => {
            row.classList.add("show2");
        }, index * 600);
    });
}
function tab3(tableSelector2){
    rows2=document.querySelectorAll(`${tableSelector2} td.tit2`); 
    rows2.forEach((row, index) => {
        setTimeout(() => {
            row.classList.add("show3");
        }, index * 600);
    });
}

function tab4(tableSelector3){
    rows2=document.querySelectorAll(`${tableSelector3} td.tabss`); 
    rows2.forEach((row, index) => {
        setTimeout(() => {
            row.classList.add("show3");
        }, index * 300);
    });
}

function download(){
    var link = document.createElement('a');  
        link.href = 'image/db/resume.pdf'; 
        link.download = 'resume.pdf'; 
        link.click();
}