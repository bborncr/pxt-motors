//% color=190 icon="\uf1b9" block="Motors"
namespace motors {

    export class motors {
        spdPin: DigitalPin;
        dirPin: DigitalPin;

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
    //% blockId="motor_create" block="Motor with speed pin %spdPin|and direction pin %dirPin"
    //% weight=90 blockGap=8
    //% parts="motor"
    //% trackArgs=0,1
    //% blockSetVariable=motor
    export function create(dirPin: DigitalPin, spdPin: DigitalPin): Motor {
        let motor = new Motor();
        motor.setDirPin(dirPin);
        motor.setSpdPin(spdPin);
        return motor;
    }
 
}
