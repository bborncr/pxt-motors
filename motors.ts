//% color=190 icon="\uf1b9" block="Motors"
namespace motors {
   /**
   * @param pin Choose pin number
   */
   //% block="Motor forward pin %pin"
   //% blockGap=8
   export function forward(pin: DigitalPin): void {
       pins.A2.digitalWrite(true);
   }
}
