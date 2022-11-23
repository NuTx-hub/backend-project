import {PORT} from './config.js';
import app from './app.js';
app.listen(PORT, (error)=>{
   !error? console.log('Server listening on port: ' + PORT) : null;
})