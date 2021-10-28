// let Y = document.getElementsByTagName('body')[0].getElementsByTagName('article');//225
// let Y = document.querySelector('body').children.length;
// console.log(Y);//225
function getSelectValue() {
    let selectedValue = document.getElementById("list").value;
    console.log(selectedValue);
    let listText = document.getElementById("list");
    let selectedText = listText.options[listText.selectedIndex].text;
    console.log(selectedText);
    return selectedText;
}

function showEl(X){
    let footer = document.getElementsByTagName('h3');
    footer[0].innerText = `Number of found items ${X}/225`
}

function search() {
let listSelected = getSelectValue();
let input = document.querySelector('#search_bar');
let inputValue = input.value.toUpperCase();
HTMLCollection.prototype.forEach = Array.prototype.forEach;
let books =  document.getElementsByTagName('article');
let checkbox = document.getElementById('regex').value;
let counter = 0;
if (checkbox.checked === false){
    if (listSelected === 'Name'){
        books.forEach(
            function getMatch(info) {
                let name = info.querySelector('summary');
                let nameContent = name.innerHTML.toUpperCase();
                if (nameContent.includes(inputValue)) {
                    info.classList.add('show');
                    info.classList.remove('hide');
                    counter++;
                }
                else {
                    info.classList.add('hide');
                    info.classList.remove('show');
                }
                showEl(counter);
            }
        )
    }
    if(listSelected === 'Author'){
        books.forEach(
            function getMatch(info) {
                let author = info.querySelectorAll('var');
                let authorContent = author[1].innerHTML.toUpperCase();

                if (authorContent.includes(inputValue)) {
                    info.classList.add('show');
                    info.classList.remove('hide');
                    counter++;
                }
                else {
                    info.classList.add('hide');
                    info.classList.remove('show');
                }
                showEl(counter);
            }
        )
    }
    if (listSelected === 'Author and name'){
        books.forEach(
            function getMatch(info) {
                let name = info.querySelector('summary');
                let nameContent = name.innerHTML.toUpperCase();
                let author = info.querySelectorAll('var');
                let authorContent = author[1].innerHTML.toUpperCase();

                if (nameContent.includes(inputValue) || authorContent.includes(inputValue)) {
                    info.classList.add('show');
                    info.classList.remove('hide');
                    counter++;
                }
                else {
                    info.classList.add('hide');
                    info.classList.remove('show');
                }
                showEl(counter);
            }
        )
    }
    if(listSelected === 'All'){
        books.forEach(
            function getMatch(info) {
                let name = info.querySelector('summary');
                let nameContent = name.innerHTML.toUpperCase();
                let author = info.querySelectorAll('var');// All Vars
                let authorContent = author[1].innerHTML.toUpperCase();
                let category = author[3].innerHTML.toUpperCase();

                if (nameContent.includes(inputValue) || authorContent.includes(inputValue) || category.includes(inputValue)) {
                    info.classList.add('show');
                    info.classList.remove('hide');
                    counter++;
                }
                else {
                    info.classList.add('hide');
                    info.classList.remove('show');
                }
                showEl(counter);
            }
        )
    }
    if(listSelected === 'Please select option'){
        alert('Please select option!');
    }
} else {
    let inputReg = document.querySelector('#search_bar');
    const inputRegValue = new RegExp(inputReg.value);
    if (listSelected === 'Name'){
        books.forEach(
            function getMatch(info) {
                let name = info.querySelector('summary');
                let nameContent = name.innerHTML;
                if (inputRegValue.test(nameContent)) {
                    info.classList.add('show');
                    info.classList.remove('hide');
                    counter++;
                }
                else {
                    info.classList.add('hide');
                    info.classList.remove('show');
                }
                showEl(counter);
            }
        )
    }
    if(listSelected === 'Author'){
        books.forEach(
            function getMatch(info) {
                let author = info.querySelectorAll('var');
                let authorContent = author[1].innerHTML;
                if (inputRegValue.test(authorContent)) {
                    info.classList.add('show');
                    info.classList.remove('hide');
                    counter++;
                }
                else {
                    info.classList.add('hide');
                    info.classList.remove('show');
                }
                showEl(counter);
            }
        )
    }
    if (listSelected === 'Author and name'){
        books.forEach(
            function getMatch(info) {
                let name = info.querySelector('summary');
                let nameContent = name.innerHTML;
                let author = info.querySelectorAll('var');
                let authorContent = author[1].innerHTML;

                if (inputRegValue.test(nameContent) || inputRegValue.test(authorContent)) {
                    info.classList.add('show');
                    info.classList.remove('hide');
                    counter++;
                }
                else {
                    info.classList.add('hide');
                    info.classList.remove('show');
                }
                showEl(counter);
            }
        )
    }
    if(listSelected === 'All'){
        books.forEach(
            function getMatch(info) {
                let name = info.querySelector('summary');
                let nameContent = name.innerHTML;
                let author = info.querySelectorAll('var');// All Vars
                let authorContent = author[1].innerHTML;
                let category = author[3].innerHTML;
                if (inputRegValue.test(nameContent) || inputRegValue.test(authorContent) || inputRegValue.test(category)) {
                    info.classList.add('show');
                    info.classList.remove('hide');
                    counter++;
                }
                else {
                    info.classList.add('hide');
                    info.classList.remove('show');
                }
                showEl(counter);
            }
        )
    }
    if(listSelected === 'Please select option'){
        alert('Please select option!');
    }
}

}
// let re = /Th+e/;
// let str = "abbbcfee The foo fum";
// const regex = new RegExp(re);
// console.log(regex.test(str));

let allDetails = document.querySelectorAll('details');
for (let i = 0; i < allDetails.length; i++) {
    allDetails[i].open = true;
}
// console.log(allDetails);
// node
array = [];
info = {}
img = {}
let allArticles = document.getElementsByTagName('article');
for (let i = 0; i < allArticles.length; i++) {
    let name = allArticles[i].innerText;
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
    img[i] = {'src': oneImg[0].currentSrc, 'alt': oneImg[0].alt}
    console.log(img);
    console.log(name);
    console.log(info);
    array[i] = {'id': i+1,'name': name,'info': info, 'img': img[i]}
}
console.log(array);
console.log(img);