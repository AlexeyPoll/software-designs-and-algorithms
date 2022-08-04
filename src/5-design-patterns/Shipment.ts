import { v4 as uuidv4 } from 'uuid';

import { AirEastShipper, ChicagoSprintShipper, PacificParcelShipper, Shipper } from './Shipper';
import IShipment from "./interfaces/IShipment";

export abstract class Shipment {
    private shipmentID: string;
    private shipment: IShipment;
    private shipper: Shipper;

    constructor(shipment: IShipment) {
        this.shipmentID = uuidv4();
        this.shipment = shipment;
        this.shipper = this.getShipper();
    }

    private getShipper(): Shipper {
        const { fromZipCode } = this.shipment;
        const index = +fromZipCode[0];
        
        if ([4, 5, 6].includes(index)) return new ChicagoSprintShipper();
        if ([7, 8, 9].includes(index)) return new PacificParcelShipper();
        return new AirEastShipper()
    }

    public getWeight(): number {
        return this.shipment.weight;
    }

    ship(): string {
        const { fromAddress, fromZipCode, toAddress, toZipCode } = this.shipment;
        return `Shipment with the ID:         ${this.shipmentID} 
        Will be picked up from:       ${fromAddress}, ${fromZipCode} 
        And shipped to:               ${toAddress}, ${toZipCode}
        Cost:                         ${this.shipper.getCost(this).toFixed(2)}`
    }
}

export class Letter extends Shipment {
    constructor(shipment: IShipment) {
        super(shipment);
    }
}

export class Package extends Shipment {
    constructor(shipment: IShipment) {
        super(shipment);
    }
}

export class Oversize extends Shipment {
    constructor(shipment: IShipment) {
        super(shipment);
    }
}