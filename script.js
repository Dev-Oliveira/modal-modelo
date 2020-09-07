const modalTotal = document.querySelector(".modal-total")
const botao = document.querySelector(".open")
const fechar = document.querySelector(".modal-close")

botao.addEventListener("click",function(){
    modalTotal.classList.add("ativo")
})

fechar.addEventListener("click", function(){
    modalTotal.classList.remove("ativo")
})