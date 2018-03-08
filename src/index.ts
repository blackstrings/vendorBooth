import { Slot } from './Slot';
import { Vendor } from './Vendor';
import { Shape } from './Shape';

window.onload = function(){
    const shape = new Shape();
    const s = new Slot(shape);
    var dataBtn: HTMLElement = document.getElementById('dataBtn');
    dataBtn.addEventListener('click', function(){
        alert('clicked');
    });
}