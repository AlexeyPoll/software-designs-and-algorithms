import IShipment from "./interfaces/IShipment";
import { Shipment } from "./Shipment";
import { AirEastShipper, Shipper } from "./Shipper";

// export class FragileShipmentDecorator extends Shipment {
//     private component: Shipment;
//     private isFragile: boolean;

//     constructor(shipment: Shipment) {
//         this.component = shipment;

//         this.isFragile = true;
//     }

//     private getShipper(): Shipper {
//         return new AirEastShipper()
//     }

//     ship(): string {
//         return `
//         ${this.component.ship()}
//         ${this.isFragile ? '**MARK FRAGILE**' : ''}
//         `
//     }
// }

export class DoNotLeaveDecorator extends Shipment {
    private doNotLeave: boolean;

    constructor(shipment: Shipment) {
        super(shipment.getInstanceData());

        this.doNotLeave = true;
    }

    ship(): string {
        return `
        ${super.ship()}
        ${this.doNotLeave ? '**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**' : ''}
        `
    }
}

export class ReturnReceiptRequestedDecorator extends Shipment {
    private isReturnReceiptRequested: boolean;

    constructor(shipment: Shipment);
    constructor(shipment: IShipment);
    constructor(shipment) {
        super(shipment);

        this.isReturnReceiptRequested = true;
    }

    ship(): string {
        return `
        ${super.ship()}
        ${this.isReturnReceiptRequested ? '**MARK RETURN RECEIPT REQUESTED**' : ''}
        `
    }
}