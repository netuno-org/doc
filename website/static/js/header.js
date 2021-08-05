// setInterval(() => {
//     const header = document.querySelector('.fixedHeaderContainer');
//     if (document.documentElement.scrollTop > 50) {
//         header.classList.add('header-thin');
//     } else {
//         header.classList.remove('header-thin');
//     }
// }, 600);
//
// document.addEventListener('click', function (event) {
//     let menu = document.querySelector('.nav-site');
//     if (!event.target.matches('.fixedHeaderContainer')) {
//         menu.classList.remove('active');
//     } if (event.target.matches('.navSearchWrapper')) {
//         menu.classList.add('active');
//     } else  {
//         if(!event.target.closest('.toc')) {
//             if (menu.classList.contains('active')) {
//                 menu.classList.remove('active');
//             } else {
//                 menu.classList.add('active');
//             }
//         }
//     }
//
// }, false);
//
// window.addEventListener("load",function() {
//     let logo = document.querySelector('.logo').parentNode;
//     logo.setAttribute('href', 'https://www.netuno.org');
//
//     if (window.location.href.includes('/en/')) {
//         let logoLink = document.querySelector('.logo').parentElement;
//         logoLink.href = logoLink.href + 'en';
//         let navigationLinks = document.querySelectorAll('.nav-site li a');
//         navigationLinks[0].href = navigationLinks[0].href.replace('/funcionalidades/', '/en/funcionalidades/');
//         navigationLinks[0].innerHTML = 'Features';
//         navigationLinks[1].href = navigationLinks[1].href.replace('/planos/', '/en/planos/');
//         navigationLinks[1].innerHTML = 'Plans';
//         navigationLinks[2].innerHTML = 'Forum';
//         navigationLinks[3].href = navigationLinks[3].href.replace('/docs/introducao', '/en/');
//         navigationLinks[3].innerHTML = 'Account';
//         navigationLinks[4].href = navigationLinks[4].href.replace('/conta/', '/en/account/');
//         navigationLinks[4].innerHTML = 'Download';
//         navigationLinks[5].href = navigationLinks[5].href.replace('/download/', '/en/download/');
//     } else if (window.location.href.includes('/pt-PT/')) {
//         let logoLink = document.querySelector('.logo').parentElement;
//         logoLink.href = logoLink.href + 'pt-PT';
//         let navigationLinks = document.querySelectorAll('.nav-site li a');
//         navigationLinks[0].innerHTML = 'Funcionalidades';
//         navigationLinks[1].innerHTML = 'Planos';
//         navigationLinks[2].innerHTML = 'Fórum';
//         navigationLinks[4].innerHTML = 'Conta';
//     }
// });