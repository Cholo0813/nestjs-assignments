import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('fibonacci/:number')
 fibonacci(@Param('number', ParseIntPipe)number: number){
  const sequence = [];
  var num1 = 0, num2 =1;


  for(let i = 0; i < number; i++){
    sequence.push(num1);
    [num1, num2] = [num2, num1 + num2];

  }return sequence;
 }
 @Get('prime/:number')
 primeChecker(@Param('number', ParseIntPipe)number: number){
  if(number <= 1) return false;
  if(number == 2 || number == 3) return true;
  if(number % 2 == 0) return false;

  for (let i = 3; i * i <= number; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
 }
 
}
