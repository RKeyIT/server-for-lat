import express from 'express'
import mongoose, {mongo} from 'mongoose'
import router from "./router.js";
import fileUpload from 'express-fileupload'

const LOCAL_ADDRESS = 'http://localhost:3005/'
const PORT = 3005;
const DB_URL = `mongodb+srv://rkeydevelop:rkeydevelop@cluster0.swvahbj.mongodb.net/?retryWrites=true&w=majority`

const app = express();
mongoose.set("strictQuery", false);

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log(`Server is running on ${LOCAL_ADDRESS} address`))
    } catch (e) {
        console.log(e)
    }
}
startApp()