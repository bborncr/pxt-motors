//% color=190 icon="\uf1b9" block="Motors"
namespace motors {
   /**
   * @param dirPin Choose direction pin
   * @param spdPin Choose speed pin
   * @param speed Choose motor speed (0-1023)
   */
   //% block="Motor direction pin %dirPin|speed pin %spdPin| Chose speed %speed"
   //% speed.shadow="speedPicker"
   //% blockGap=8
   export function move(dirPin: DigitalPin, spdPin: AnalogOutPin, speed: number): void {
      if(speed > 0){
         dirPin.digitalWrite(true);
         spdPin.analogWrite(speed);
      } else if (speed < 0){
         dirPin.digitalWrite(false);
         spdPin.analogWrite(1023 - Math.abs(speed));
      }
   }
}
