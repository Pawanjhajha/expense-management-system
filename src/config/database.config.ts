import { registerAs } from "@nestjs/config";

export const DATABASE_CONFIG=registerAs("DATABASE",()=>{
    return{
        USER:process.env["DATABASE_URL"],
        PASSWORD:process.env["DATABASE_PASSWORD"],
        HOST:process.env["DATABASE_URL"],
        NAME:process.env["DATABASE_NAME"],
        PORT:process.env["DATABASE_PORT"],

       

        get url(){
          
            return `${this.HOST}:${this.PORT}/${this.NAME}`
        },

        isLocal(){
            return process.env["DATABASE_URL"]?.includes("localhost")
        }
    }
})