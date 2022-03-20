function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verificar os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade <=3) {
                //BB
                img.setAttribute('src', 'foto-bb-m.png')
            } else if (idade < 7) {
                //criança
                img.setAttribute('src', 'foto-criança-m.png')
            } else if (idade < 40) {
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else {
                // idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade <=10) {
                //BB
                img.setAttribute('src', 'foto-bb-f.png')
            } else if (idade < 13) {
                //criança
                img.setAttribute('src', 'foto-criança-f.png')
            } else if (idade < 40) {
                //jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else {
                // idoso  
                img.setAttribute('src', 'foto-idoso-f.png')
            }        
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}
