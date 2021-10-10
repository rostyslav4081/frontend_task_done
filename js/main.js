// let Y = document.getElementsByTagName('body')[0].getElementsByTagName('article');
// let Y = document.querySelector('body').children.length;
// console.log(Y);
//  let body = document.getElementsByTagName('body');
//     length = body.length,
//     i, wrapper;
// wrapper = document.createElement('div');
// wrapper.setAttribute('class', 'cul');
// body.appendChild(wrapper);
// for (i = 0; i < length; i++) {
//     wrapper = document.createElement('div');
//     wrapper.setAttribute('class', 'cul');
//     body[i].parentNode.innerHTml(wrapper, body[i]);
//     wrapper.appendChild(body[i]);
// }
// let div_1 = document.createElement("div");
// div_1.setAttribute('class', 'col');
// document.body.appendChild(div_1);
// let div_2 = document.createElement("div");
// div_2.setAttribute('class', 'col');
// document.body.appendChild(div_2);
// let div_3 = document.createElement("div");
// div_3.setAttribute('class', 'col');
// document.body.appendChild(div_3);
function getSelectValue() {
    let selectedValue = document.getElementById("list").value;
    console.log(selectedValue);
    let listText = document.getElementById("list");
    let selectedText = listText.options[listText.selectedIndex].text;
    console.log(selectedText);
    return selectedText;
}

function search() {


}

let allDetails = document.querySelectorAll('details');
// for (let i = 0; i < all_details.length; i++) {
//     let wrapper = document.createElement('div');
//     wrapper.setAttribute('class', 'details_box');
//     all_details[i].parentNode.insertBefore(wrapper, all_details[i]);
//     wrapper.appendChild(all_details[i]);
// }
for (let i = 0; i < allDetails.length; i++) {
    allDetails[i].open = true;
}
console.log(allDetails);
// let details = document.getElementsByTagName('details');
// for (let detail of details) {
//     detail.addEventListener('click' ,openImg(detail.id));
// }
// function openImg(id){
//     let img = document.getElementById('img'+id);
//     if(img.style.display === 'none' ){
//         img.style.display = 'block';
//         console.log("opened");
//     }else
//     if(img.style.display === 'block') {
//         img.style.display = 'none';
//         console.log("closed");
//     }
// }
array = [];
info = {}
img = {}
let allArticles = document.getElementsByTagName('article');
for (let i = 0; i < allArticles.length; i++) {
    let nameBook = allArticles[i].innerText;
    let allVars = allArticles[i].getElementsByTagName('var');
    console.log(allVars);
    for (const Var of allVars) {
        info[Var.attributes['data-type'].nodeValue] = Var.innerText;
    }
    let oneImg = allArticles[i].getElementsByTagName('img');
    console.log(oneImg);
    console.log(oneImg[0].currentSrc);
    console.log(oneImg[0].alt);
    img['src'] = oneImg[0].currentSrc;
    img['alt'] = oneImg[0].alt;
    console.log(nameBook);
    console.log(info);
    console.log(img);
    array[i] = {'id' : i+1,'nameBook':nameBook,'info':info,'img':img}
}
console.log(array);