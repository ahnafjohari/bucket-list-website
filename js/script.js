let navbar = document.querySelector('.navbar');

document.querySelector('#activity-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

// fetch('http://onboardme-beta.celcom.com.my/api/bucket-lists')
//     .then(res => console.log(res))


// const request = new XMLHttpRequest;
// request.open("GET", "http://onboardme-beta.celcom.com.my/api");
// // request.open("GET", "http://onboardme-beta.celcom.com.my/api/bucket-lists");
// request.send();
// request.onload = () => {
// }