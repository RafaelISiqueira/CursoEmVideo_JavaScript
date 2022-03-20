let amigo = {nome: 'José',
sexo: 'M',
Peso: 85.4,
engordar(p) {
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.Peso}Kg`)