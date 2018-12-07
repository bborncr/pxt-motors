//% color=190 icon="\uf1b9" block="Motors"
namespace motors {
   /**
   * @param dirPin Choose direction pin
   * @param spdPin Choose speed pin
   */
   //% block="Motor forward direction pin %dirPin|speed pin %spdPin"
   //% blockGap=8
   export function forward(dirPin: DigitalPin, spdPin: AnalogOutPin): void {
       dirPin.digitalWrite(true);
       spdPin.analogWrite(1023);
   }
}
