//% color=190 icon="\uf1b9" block="Motors"
namespace motors {
   /**
   * @param IAPin 
   * @param IBPin 
   * @param speed Choose motor speed (-100 to 100)
   */
   //% block="Driver IA pin %IAPin| IB pin %IBPin| Choose speed %speed"
   //% speed.shadow="speedPicker"
   //% blockGap=8
   export function move(IAPin: AnalogOutPin, IBPin: AnalogOutPin, speed: number): void {
      if(speed >= 0){
         IAPin.analogWriteWrite((speed / 100) * 1023);
         IBPin.analogWrite(0);
      } else if (speed < 0){
         IAPin.analogWrite(0);
         IBPin.analogWrite(Math.abs((speed / 100) * 1023));
      }
   }
}
