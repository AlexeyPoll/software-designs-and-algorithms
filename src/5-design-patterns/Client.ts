import { DoNotLeaveDecorator, ReturnReceiptRequestedDecorator } from "./Enhancer";
import { ShipmentFactory } from "./ShipmentFactory";

let shipment = ShipmentFactory.createShipment({
    weight: 1000, 
    fromAddress: 'Braniborska 48', 
    fromZipCode: '155000', 
    toAddress: 'Korrzenewskogo 1', 
    toZipCode: '111000'
});

// shipment = new FragileShipmentD ecorator(shipment);
shipment = new DoNotLeaveDecorator(shipment);
shipment = new ReturnReceiptRequestedDecorator(shipment);

console.log(shipment.ship());