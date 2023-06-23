import VehicleBuilder from "./builders/VehicleBuilder";
import Director from "./directors/Director";
import Vehicle from "./products/Vehicle";

const builder: VehicleBuilder = new VehicleBuilder();
const director: Director = new Director(builder);
director.constructSedanCar();
const sedan: Vehicle = builder.getVehicle();
director.constructTruck();
const truck: Vehicle = builder.getVehicle();

imprimirDetalhes(sedan);
imprimirDetalhes(truck)

function imprimirDetalhes(vehicle : Vehicle){
    console.log("Construindo veículo: " + vehicle.vehicleType);
    console.log("Motor: " + vehicle.engine.power)
    console.log("Transmissão: " +vehicle.transmission)
    console.log("Assentos: " + vehicle.seats)
    console.log("Rodas: " + vehicle.wheels.length + "aro: " + vehicle.wheels[0].rim)
    
}


