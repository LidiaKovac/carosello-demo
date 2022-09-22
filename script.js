const avantiPagina = function() {
    const paginaCorrente = document.getElementsByClassName("active")[0] //pagina visibile al momento del click
    paginaCorrente.classList.remove("active")
    const numeroPagina = Number(paginaCorrente.id.split("-")[1])
    const prossimaPagina = document.getElementById("pag-" + (numeroPagina + 1))
    if(prossimaPagina == null) {
        document.getElementById("pag-1").classList.add("active")
    } else {
        prossimaPagina.classList.add("active")
    }
}
