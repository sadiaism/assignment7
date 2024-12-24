 // /** @type {import('next').NextConfig} */
//const nextConfig = {};

//export default nextConfig;

export default {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"fakestoreapi.com",
                port:"",
                pathname:"/img/**",
            }
        ]
    }
}
