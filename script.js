function toggleMode() {
    const html = document.documentElement
   html.classList.toggle('light')

   // pegar a tag img
    const img = document.querySelector("#profile img")
    // substituir a image
    if(html.classList.contains('light')) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './images/avatar-light.png')
    } else {
    //se tiver sem light mode, adicionar a imagem normal
    img.setAttribute('src', './images/avatar.png')
    }
    

   

    
}
