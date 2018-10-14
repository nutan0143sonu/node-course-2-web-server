const express=require('express');
//const hbs=require('hbs');//in this we can not create layout
const hbs=require('express-handlebars');
//const hbs2=require('hbs');
const fs=require('fs');

var app=express();
const PORT = process.env.PORT || 3000;//for defining port
//hbs2.registerPartials(__dirname + '/views/partials')

app.engine('hbs', hbs({extname:'.hbs', defaultLayout: 'layout'}));
app.set('view engine','hbs');

//here is how to register midllewaare
//third argument is next it is used to express is going to done
/*app.use((req,res,next)=>{
  var now = new Date().toString();
  var log=`${now}: ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile('server.log',log + '\n')
  next();//if middlew are cannot run next will no mention or handler does not un any method without next.

});*/
//when we use app.use here which is defined first are run  first
//here we did'nt use next so all page run only this method mean handler will handle this one not pass control to another method
//app.use((req,res,next)=>{
  //res.render('maintanence.hbs');
  //next();
//});

//it is express middle ware
app.use(express.static(__dirname + '/public'));

/*hbs.registerHelper('getCurrentYear', ()=>{
  return new Date().getFullYear()
});
hbs.registerHelper('screanIt', (text)=>{
  return text.toUpperCase()
});*/
//.g et we used to register handler and it is setup for http request
//in this we provide two argument 
//1. is url '/' is root of the app
//2.is function which said that what to send bact to the person
app.get('/',(req, res)=>{
  //res.send('<h1>Hello Express!</h1>');
  res.render('home.hbs',{
    PageTitle:'Home Page',
    
  	name:" Welcom Nutan",
  	likes:[
  	'Cycling',
  	'Byking'
  	]
  });
});
app.get('/home',(req, res)=>{
  //res.send('<h1>Hello Express!</h1>');
  res.render('home.hbs',{
    PageTitle:'Home Page',
    
    name:" Welcom Nutan",
    likes:[
    'Cycling',
    'Byking'
    ]
  });
});

app.get('/about',(req,res)=>{
	res.render('about.hbs',{
    PageTitle:'About Page'
    
  });
});

app.get('/bad', (req,res)=>{
   res.send({
   	errorMessage:'Unable to handle request'
   });
});
//for listening we use app.listen
//app.listen is used to bind the application to poart to on machine
app.listen(PORT,()=>{
	console.log('Server is up on port 3000');
});