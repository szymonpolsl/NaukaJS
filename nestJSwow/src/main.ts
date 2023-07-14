import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootsrap(){
    const app = await NestFactory.create(AppModule);

    await app.listen(3000)
}
bootsrap();