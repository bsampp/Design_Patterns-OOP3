import Engine from "../components/Engine";
import { Transmission } from "../components/Transmission";
import { VehicleTyple } from "../components/VehicleType";
import Wheel from "../components/Wheel";

export default class Vehicle{
    private _vehicleType : VehicleTyple;
    private _seats: number;
    private _engine: Engine;
    private _transmission: Transmission;
    private _wheels: Wheel[] = [];
    
    /**
     * Getter vehicleType
     * @return {VehicleTyple}
    */
   public get vehicleType(): VehicleTyple {
       return this._vehicleType;
	}
    
    /**
     * Getter seats
     * @return {number}
    */
   public get seats(): number {
       return this._seats;
	}
    
    /**
     * Getter engine
     * @return {Engine}
    */
   public get engine(): Engine {
		return this._engine;
	}
    
    /**
     * Getter transmission
     * @return {Transmission}
    */
   public get transmission(): Transmission {
        return this._transmission;
	}
    
    public get wheels(): Wheel[] {
        return this._wheels;
    }
    
    /**
     * Setter vehicleType
     * @param {VehicleTyple} value
    */
   public set vehicleType(value: VehicleTyple) {
       this._vehicleType = value;
	}
    
    /**
     * Setter seats
     * @param {number} value
    */
   public set seats(value: number) {
       this._seats = value;
	}
    
    /**
     * Setter engine
     * @param {Engine} value
    */
   public set engine(value: Engine) {
       this._engine = value;
	}
    
    /**
     * Setter transmission
     * @param {Transmission} value
    */
   public set transmission(value: Transmission) {
       this._transmission = value;
	}
    
    public set wheels(value: Wheel[]) {
        this._wheels = value;
    }
    
    public addWheel(wheel: Wheel){
        this._wheels.push(wheel);
    }
}