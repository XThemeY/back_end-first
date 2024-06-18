import 'dotenv.config'
 
export const SETTINGS = {   
    PORT: process.env.PORT ?? 8080,
    PATH: {
        VIDEOS: '/videos',
    },
}