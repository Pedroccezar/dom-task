const add_botton = document.getElementById("botaoadd")
const exit_botton = document.getElementById("botaosaida")
const add_overlay = document.getElementById("overlay")
const cancel_botton = document.getElementById("botaocancelar")
const empty_list = document.getElementById("listavazia")

add_botton.addEventListener("click", () => {
    add_overlay.showModal();
})

exit_botton.addEventListener("click", () => {
    add_overlay.close();
})

cancel_botton.addEventListener("click", () => {
    add_overlay.close();
})