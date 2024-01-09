function res(){
    let curel = document.getElementById("cur").value
    let resel = document.getElementById("res").value
    let resl = document.getElementById("vol")
    resl.textContent = curel * resel
}
function current_cal(){
    let volel = document.getElementById("voltage").value
    let resistacneel = document.getElementById("resistance").value
    let currentel = document.getElementById("current")
    currentel.textContent = volel / resistacneel
}
function res_cal(){
    let voltage1el = document.getElementById("voltage1").value
    let currentel1 = document.getElementById("current1").value
    let resistance1el = document.getElementById("resistance1")
    resistance1el.textContent = voltage1el / currentel1
}