//% color=190 icon="\uf1b9" block="Motors"
namespace motors {
   /**
   * @param dirPin Choose direction pin
   * @param spdPin Choose speed pin
   * @param speed Choose motor speed (0-1023)
   */
   //% block="Motor direction pin %dirPin|speed pin %spdPin| Choose speed %speed"
   //% speed.shadow="speedPicker"
   //% blockGap=8
   export function move(dirPin: DigitalPin, spdPin: AnalogOutPin, speed: number): void {
      if(speed >= 0){
         dirPin.digitalWrite(true);
         spdPin.analogWrite(1023 - ((speed / 100) * 1023));
      } else if (speed < 0){
         dirPin.digitalWrite(false);
         spdPin.analogWrite(Math.abs((speed / 100) * 1023));
      }
   }
}
