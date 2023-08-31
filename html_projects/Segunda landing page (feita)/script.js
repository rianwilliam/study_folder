let menu = document.getElementById('div_dropdown_on');

let bar_dropdown = document.getElementById('image_menu_dropdown')
let close_menu = document.getElementById('close_menu_dropdown')

close_menu.style.transform = 'scale(0)';

let interruptor = 0;

function open_menu() {
    close_menu.classList.add('x_on');
    bar_dropdown.classList.add('bar_off');

    if(interruptor == 0) {
        menu.style.transition = 'all 400ms ease-in-out';
        menu.style.transform = 'scale(1)';
        menu.style.visibility = 'visible';
        interruptor = 1;
    }
    else{
        menu.style.transform = 'scale(0)';
        menu.style.visibility = 'hidden';

        close_menu.style.transition = 'all 400ms ease-in-out';
        close_menu.classList.remove('x_on');

        bar_dropdown.style.transition = 'all 400ms ease-in-out';
        bar_dropdown.classList.remove('bar_off');
        interruptor = 0;
    }
}
