import { Slot } from "./Slot";

export class SlotManager {

    private slots: Slot[] = [];

    constructor() {

    }

    /**
     * add slots to array
     * 
     * @param {Slot} slot 
     * @memberof SlotManager
     */
    add(slot: Slot) {
        if (this.slots) {
            this.slots.push(slot);
        }
    }
}