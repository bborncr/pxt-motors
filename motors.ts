//% color=190 icon="\uf1b9" block="Motors"
namespace motors {

   //% block="Motor forward"
   //% blockGap=8
   export function forward(): void {
       pins.A2.digitalWrite(true);
   }
}
