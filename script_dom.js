const add_botton = document.getElementById("botaoadd")
const exit_botton = document.getElementById("botaosaida")
const add_overlay = document.getElementById("overlay")
const cancel_botton = document.getElementById("botaocancelar")
const empty_list = document.getElementById("listavazia")
const add_item_overley_botton = document.getElementById("botaoadditemoverlay")
const lista_preenchida = document.getElementById("filled_list")
const name_product_input = document.getElementById("nome")
const qnt_product_input = document.getElementById("quantidade")
const filled_list = document.getElementById("filled_list")

add_botton.addEventListener("click", () => {
    add_overlay.showModal();
})

exit_botton.addEventListener("click", () => {
    add_overlay.close();
})

cancel_botton.addEventListener("click", () => {
    add_overlay.close();
})

add_item_overley_botton.addEventListener("click", () => {
    empty_list.classList.add("hidden");
    const nome = name_product_input.value
    const qnt = qnt_product_input.value

    const item = document.createElement("li")
    item.classList.add("itemcard")
    item.innerHTML = `
    <span class="item_bullet"></span>
    <span class="item_nome">${nome}</span>
    ${qnt ? `<span class="item_qnt">${qnt}</span>` : ""}
`

    filled_list.appendChild(item)
    filled_list.classList.remove("hidden")

    name_product_input.value = ""
    qnt_product_input.value = ""

    add_overlay.close();
})