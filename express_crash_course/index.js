const express = require('express');
const path = require('path');
const logger = require('./middleware/logger')
// const exphbs = require('express-handlebars')
const app = express();


// init middleware
// app.use(logger);

//Handlebars Middleware
// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');

// Body Parser Middleware 
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Members API routes
app.use('/api/members', require('./routes/api/members'))


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));


