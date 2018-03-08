import { Shape } from './shapes/Shape';
import { Vendor } from './Vendor';

export class Slot {

    private shape: Shape;
    private vender: Vendor;
    private label: string = 'n/a';

    constructor(shape: Shape){
        this.shape = shape;
        this.validate();
    }

    private validate(): void {
        if(!this.shape){ throw new Error('shape is not set or null');}
    }

    public setShape(shape): void {
        this.shape = shape;
    }

    public setVendor(vendor: Vendor): void {
        this.vender = vendor;
    }
}