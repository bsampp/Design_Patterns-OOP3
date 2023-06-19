import ITransportFactory from "../transport/interfaces/ITransportFactory";
import IAircraft from "../vehicles/aerial/interfaces/IAircraft";
import ILandVehicle from "../vehicles/land/interfaces/ILandVehicles";
import Vehicle from "../vehicles/consts/Vehicle";

export default class Client {
  private landVehicle: ILandVehicle;
  private aircraft: IAircraft;

  constructor(factory: ITransportFactory, type: string) {
    if (type === Vehicle.TERRESTRE) {
      this.landVehicle = factory.createTransportVehicle();
    } else if (type === Vehicle.AEREO) {
      this.aircraft = factory.createTransportAircraft();
    } else if (type === Vehicle.AMBOS) {
      this.landVehicle = factory.createTransportVehicle();
      this.aircraft = factory.createTransportAircraft();
    }
  }

  startRoute(): void {
    if (this.landVehicle) {
      this.landVehicle.startRoute();
    }
    if (this.aircraft) {
      this.aircraft.startRoute();
    }
  }
}
