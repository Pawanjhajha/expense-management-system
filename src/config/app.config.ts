export const APP_CONFIG=()=>{
    return{
        APP_NAME:process.env["APP_NAME"],
        APP_URL:process.env["APP_URL"],
        APP_EMAIL:{
            SUPPORT:process.env["SUPPORT_EMAIL"]
        },
        APP_PORT:process.env["PORT"],
        APP_ENV:process.env["NODE_ENV"],
        API_PREFIX:process.env["API_PREFIX"] || "/api/v1",
    }
}