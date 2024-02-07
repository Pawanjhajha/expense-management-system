import { Module } from '@nestjs/common';
import {  ConfigModule, ConfigService} from '@nestjs/config';
import configuration from './config/configuration';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
 
  imports: [ConfigModule.forRoot({
    envFilePath:[".env",".local.env"],
    load:configuration,
    cache:true,
    isGlobal:true,
  }),
 // MongooseModule.forRoot(process.env.DATABASE_DSN),
MongooseModule.forRootAsync({
  imports:[ConfigModule],
useFactory:(configService:ConfigService)=>{
const envType=configService.get("NODE_ENV");

if(envType==="LOCAL"){
 
return{
   
  uri:process.env.DATABASE_DSN
}
}

   const username=configService.get("DATABASE_USER");
   const password=configService.get("DATABASE_PASSWORD");
 const DATABASE_URL=configService.get("DATABASE_URL");
 const DATABASE_PORT=configService.get("DATABASE_PORT");
 const DATABASE_NAME=configService.get("DATABASE_NAME")
 const url=`${DATABASE_URL}:${DATABASE_PORT}/${DATABASE_NAME}`

 return{
  uri:url,
 }
},
inject:[ConfigService]
 })
 
],
  controllers: [],
  providers: [],
})
export class AppModule {
 
}
