import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService=app.get(ConfigService)//get configService
  const port=configService.get<number>('PORT')

  const prefix=configService.get<string>("API_PREFIX")

   if(prefix){
     app.setGlobalPrefix(prefix)
   }

  await app.listen(port || 5000);
}
bootstrap();
