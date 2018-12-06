//% color=190 icon="\uf1b9" block="Motors"
namespace motors {

    export class Motor {
        spdPin: DigitalPin;
        dirPin: DigitalPin;
        speed: number;

        /**
         * Set the directional pin where the motor is connected, defaults to P0.
         */
        setDirPin(dirPin: DigitalPin): void {
            this.dirPin = dirPin;
            pins.digitalWritePin(this.dirPin, 0);
            // don't yield to avoid races on initialization
        }

        /**
         * Set the speed pin where the motor is connected, defaults to P0.
         */
        setSpdPin(spdPin: DigitalPin): void {
            this.spdPin = spdPin;
            pins.digitalWritePin(this.spdPin, 0);
            // don't yield to avoid races on initialization
        }

    }

    /**
     * Create a new Motor driver
     * @param spdPin is the speed pin
     * @param dirPin is the direction pin
     */
    //% blockId="motor_create" block="Create motor on speed pin %spdPin|and direction pin %dirPin"
    //% blockSetVariable=motor
    export function create(spdPin: DigitalPin, dirPin: DigitalPin): Motor {
        let motor = new Motor();
        motor.setDirPin(dirPin);
        motor.setSpdPin(spdPin);
        return motor;
    }
 
}
