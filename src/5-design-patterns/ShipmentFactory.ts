import { Letter, Oversize, Package, Shipment } from "./Shipment";
import IShipment from "./interfaces/IShipment";

export class ShipmentFactory {
    public static createShipment(shipment: IShipment): Shipment {
        if (shipment.weight <= 15) return new Letter(shipment);
        if (shipment.weight <= 160) return new Package(shipment);
        return new Oversize(shipment);
    }
}