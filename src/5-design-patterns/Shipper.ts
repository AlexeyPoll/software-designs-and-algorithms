import { Letter, Package, Shipment } from "./Shipment";

export interface Shipper {
    getCost(shipment: Shipment): number;
}

export class AirEastShipper implements Shipper {
    getCost(shipment: Shipment): number {
        if (shipment instanceof Letter) return 0.39 * shipment.getWeight();
        if (shipment instanceof Package) return 0.25 * shipment.getWeight();

        return 0.25 * shipment.getWeight() + 10;
    }
}

export class PacificParcelShipper implements Shipper {
    getCost(shipment: Shipment): number {
        if (shipment instanceof Letter) return 0.51 * shipment.getWeight();
        if (shipment instanceof Package) return 0.19 * shipment.getWeight();

        return 0.21 * shipment.getWeight();
    }
}

export class ChicagoSprintShipper implements Shipper {
    getCost(shipment: Shipment): number {
        if (shipment instanceof Letter) return 0.42 * shipment.getWeight();
        if (shipment instanceof Package) return 0.20 * shipment.getWeight();

        return 0;
    }
}