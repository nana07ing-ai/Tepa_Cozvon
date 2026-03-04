let angry = 0;


document.addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('contextmenu', (e) => e.preventDefault());



function checkNumber() {
    // 1. Берем значение и превращаем в число
    const val = (document.getElementById('myInput').value);

    // 2. Условие (например, проверяем, что число больше 10)
    if (val == "Friend") {
        window.location.assign("menu.html");
    } else {
        angry += 1;
        document.getElementsByClassName('imga')[0].src = "./images/Tépa-zloy_1.jpg";
        document.querySelector('button').onclick = checkpass;
        document.getElementsByClassName('message')[0].id = 'message_view';
        setTimeout(() => {
            document.getElementsByClassName('message')[0].id = '';
        }, 2000);
    }
}
function checkpass() {
    const val = (document.getElementById('myInput').value);

    if (val == "Friend") {
        window.location.assign('menu.html');
    }
    else {
        document.getElementsByClassName('imga')[0].src = "./images/Tépa-zloy_2.jpg"
        angry += 1;
        document.querySelector('button').onclick = checkangry;
        document.getElementsByClassName('message')[0].id = 'message_view';
        setTimeout(() => {
            document.getElementsByClassName('message')[0].id = '';
        }, 2000);
    }
}
function checkangry() {
    const val = (document.getElementById('myInput').value);

    if (val == "Friend") {
        window.location.assign('menu.html');
    }
    else {
        document.getElementsByClassName('imga')[0].src = "./images/Tépa-zloy_READY.jpg";
        angry += 1;
        document.querySelector('button').onclick = checkready;
        document.getElementsByClassName('message')[0].id = 'message_view';
        setTimeout(() => {
            document.getElementsByClassName('message')[0].id = '';
        }, 2000);
    }
}
function checkready() {
    const val = (document.getElementById('myInput').value);

    if (val == "Friend") {
        window.location.assign('menu.html');
    }
    else {
        if (angry == 3) {
        document.getElementsByClassName('ble')[0].id = "tepa_blen";
        document.getElementsByClassName('message')[0].id = 'message_view';
        setTimeout(() => {
            document.getElementsByClassName('message')[0].id = '';
        }, 2000);
        }
    }
}