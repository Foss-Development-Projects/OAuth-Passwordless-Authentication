import * as dotenv from 'dotenv'
dotenv.config()

const server = () => {
	console.log(`Server Running On ${process.env.HOST}:${process.env.PORT}`)
}

export default server;