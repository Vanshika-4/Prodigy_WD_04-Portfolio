// let menu = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menu.onclick = () => {
//     menu.classList.toggle('bx-x');
//     navbar.classList.toggle('open');
// };

// // // content script
// // chrome.runtime.sendMessage({ type: 'example' }, (response) => {
// //     if (chrome.runtime.lastError) {
// //         console.error('Error:', chrome.runtime.lastError.message);
// //     } else {
// //         console.log('Response received:', response);
// //     }
// // });

// // // Background script
// // chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
// //     console.log('Message received in background:', message);
// //     if (message.type === 'example') {
// //         sendResponse({ result: 'Success' });
// //     }
// //     return true; 
// // });

// const sc = ScrollReveal({
//     distance: '40px',
//     duration: 2500,
//     reset: true
// });

// sc.reveal('.logo', { delay: 200, origin: 'left' })
// sc.reveal('.navbar', { delay: 400, origin: 'top' })
// sc.reveal('.menu-btn', { delay: 520, origin: 'right' })
// sc.reveal('.home-text span', { delay: 600, origin: 'top' })
// sc.reveal('.home-text h1', { delay: 680, origin: 'left' })
// sc.reveal('.home-text p', { delay: 750, origin: 'right' })
// sc.reveal('.main-btn', { delay: 860, origin: 'left' })
// sc.reveal('.share', { delay: 950, origin: 'bottom' })
// sc.reveal('.home-img', { delay: 1000, origin: 'right' })

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    if (menu && navbar) {
        menu.onclick = () => {
            console.log('Menu icon clicked');
            menu.classList.toggle('bx-x');
            navbar.classList.toggle('open');
        };
    } else {
        console.error('Menu icon or navbar not found');
    }

    const sc = ScrollReveal({
        distance: '40px',
        duration: 2500,
        reset: true
    });

    sc.reveal('.logo', { delay: 200, origin: 'left' });
    // sc.reveal('.navbar', { delay: 400, origin: 'top' });
    sc.reveal('.menu-btn', { delay: 520, origin: 'right' });
    sc.reveal('.home-text span', { delay: 600, origin: 'top' });
    sc.reveal('.home-text h1', { delay: 680, origin: 'left' });
    sc.reveal('.home-text p', { delay: 750, origin: 'right' });
    sc.reveal('.main-btn', { delay: 860, origin: 'left' });
    sc.reveal('.share', { delay: 950, origin: 'bottom' });
    sc.reveal('.home-img', { delay: 1000, origin: 'right' });
});
