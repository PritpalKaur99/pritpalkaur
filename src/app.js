const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const path = require('path');
const views_path = path.join(__dirname, '/views/pages');
const public_path = path.join(__dirname, '../public');
const css = path.join(__dirname, '../node_modules/bootstrap/dist/css');
const js = path.join(__dirname, '../node_modules/bootstrap/dist/js');
app.use(express.urlencoded({extended: false}));

console.log(public_path);

// setting middlewares
app.use(express.static(public_path));
app.use('/css', express.static(css)); //now /css is route for bootstrap
app.use('/js', express.static(js)); //now /js is route for bootstrap
app.set('view engine', 'ejs');
app.set('views', views_path);


// setting routes
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/contact', (req, res) => {
    res.render('contact');
});
app.get('/projects', (req, res) => {
    res.render('projects');
});
app.get('/services', (req, res) => {
    res.render('services');
});

app.post('/message',(req,res)=>{
    res.render('index')
})
app.listen(port, () => {
    console.log('LISTENING TO SERVER');
});
