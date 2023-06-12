const redis=require("redis")
const {promisify}=require("util")
const client=redis.createClient(process.env.REDIS_URL)
client.on("connect",()=>{
    console.log("connected toRedis");
});

const getAsync=promisify(client.get).bind(client);
const setAsync=promisify(client.set).bind(client);
const expiresAsync=promisify(client.expire).bind(client);


module.exports={client,getAsync,setAsync,expiresAsync};