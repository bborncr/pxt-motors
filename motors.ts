//% color=190 icon="\uf1b9" block="Motors"
namespace motors {

    export class motors {
        spdPin: AnalogPin;
        dirPin: DigitalPin;
        speed: number;

        /**
         * Set the directional pin where the motor is connected, defaults to P0.
         */
        //% parts="motors"
        setDirPin(dirPin: DigitalPin): void {
            this.dirPin = dirPin;
            pins.digitalWritePin(this.dirPin, 0);
            // don't yield to avoid races on initialization
        }

        /**
         * Set the speed pin where the motor is connected, defaults to P0.
         */
        //% parts="motors"
        setSpdPin(spdPin: AnalogPin): void {
            this.spdPin = spdPin;
            pins.analogWritePin(this.spdPin, 0);
            // don't yield to avoid races on initialization
        }

    }

    /**
     * Create a new Motor driver
     * @param spdPin is the speed pin
     * @param dirPin is the direction pin
     */
    //% blockId="motor_create" block="Create motor on speed pin %spdPin|and direction pin %dirPin"
    //% weight=90 blockGap=8
    //% parts="motor"
    //% blockSetVariable=motor
    export function create(dirPin: DigitalPin, spdPin: AnalogPin): Motor {
        let motor = new Motor();
        motor.setDirPin(dirPin);
        motor.setSpdPin(spdPin);
        return motor;
    }

     /**
     * Set motor to forward
     * @param speed is the speed
     */
    //% blockId="motor_forward" block="Set motor speed to %speed|255"
    //% parts="motor"
    //% blockSetVariable=motor
    export function forward(speed: number): Motor {
        this.motor.digitalWrite(this.dirPin, 1);
        this.motor.analogWrite(this.spdPin, this.speed);
        return motor;
    }
 
}
