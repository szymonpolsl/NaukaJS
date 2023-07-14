import { Controller, Get } from '@nestjs/common';


@Controller() //np /app - musimy dopisać w przeglarce, dla get'a też 
export class AppController {
    @Get() // jeśli dodamy coś do nawiasu to wtedy trzeba dobrze wpisać link w przeglądarce np./asdf
    getRootRoute() {
        return 'hi there!';
    }

    @Get('/bye')
    getByeThere(){
        return 'bye there!';
    }
} 