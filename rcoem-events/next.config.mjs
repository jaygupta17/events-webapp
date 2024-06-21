
/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:"utfs.io"
            }
        ]
    },
   experimental:{
    serverActions :{
        allowedOrigins: ["localhost:3000" , "https://ideal-halibut-5gqjrg4p67x937rxj-3000.app.github.dev"]
    }
   }
};

export default nextConfig;
