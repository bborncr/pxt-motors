//% color=190 icon="\uf1b9" block="Motors"
namespace motors {

   //%blockId=motor_forward block="Motor forward"
   //%blockGap=8
   export function forward(): void {
       pins.digitalWrite(DigitalPin.PA01, HIGH);
       pins.analogWrite(AnalogPin.PA02, 1023);
   }
}
