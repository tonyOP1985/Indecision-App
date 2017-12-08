const express = require('express')
const ejs = require('ejs')

const app = express()

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})