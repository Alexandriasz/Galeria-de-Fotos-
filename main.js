$(document).ready(function() {
   
   $('header button').click(function(){
      $('form').slideDown()
   })

   $('form').on('submit', function(e){
      e.preventDefault()
      const enderecoDaNovaImg = $('#endereco-img-nova').val()
      const novoItem = $('<li style="display: none"></li>')
      $(`<img src="${enderecoDaNovaImg}" />`).appendTo(novoItem)
      $(`
         <div class="overlay-link-img">
            <a href="${enderecoDaNovaImg}" title="Ver imagem em tamanho real" target="_blank">
               Ver imagem em tamanho real
            </a>
         </div>`).appendTo(novoItem)
         $(novoItem).appendTo('ul')
         $(novoItem).fadeIn(1000)
         $('#endereco-img-nova').val(' ')
   })

   $('#btn-cancelar').click(function(){
      $('form').slideUp()
   })
})

const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;

// Configuração do Multer para o upload de imagens
const storage = multer.diskStorage({
  destination: 'uploads/', // Diretório onde as imagens serão salvas
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Nome do arquivo salvo
  }
});

const upload = multer({ storage: storage });

// Rota para o formulário de upload
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Rota para lidar com o upload de imagens
app.post('/upload', upload.single('imagem'), (req, res) => {
  res.send('Imagem enviada com sucesso!');
});

app.listen(port, function () {
      console.log(Servidor, rodando, em, http) //localhost:${port});
   });