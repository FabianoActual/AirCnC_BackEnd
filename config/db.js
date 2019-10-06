if(process.env.NODE_ENV=="production"){
    module.exports = {mongoURI:"mongodb+srv://fabiano:fabiano@cluster0-kyvo9.mongodb.net/aircnc?retryWrites=true&w=majority"}
}else{
   // module.exports = {mongoURI:"mongodb://localhost/blogapp"}
    module.exports = {mongoURI:"mongodb+srv://fabiano:fabiano@cluster0-kyvo9.mongodb.net/aircnc?retryWrites=true&w=majority"}
}