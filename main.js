const countdown = () => {
    const destinationDate = new Date("24 Sep, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = destinationDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector('.days').textContent = textDay;
    document.querySelector('.hours').textContent = textHour;
    document.querySelector('.minutes').textContent = textMinute;
    document.querySelector('.seconds').textContent = textSecond;
}

setInterval(countdown, 1000);

const modal = document.querySelector('.modal-wrapper');
const button = document.querySelector('#openModal');
const close = document.querySelector('.close');

function openAndCloseModal() {
    button.addEventListener('click', () => {
        modal.classList.remove('invisible');
    });
    
    close.addEventListener('click', () => {
        modal.classList.add('invisible');
    });   
}

openAndCloseModal();