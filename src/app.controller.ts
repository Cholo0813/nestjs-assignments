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

 
}
