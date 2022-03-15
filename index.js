let predHoy = document.getElementById('predHoy')
let predManana = document.getElementById('predManana')
let predTarde = document.getElementById('predTarde')
let predNoche = document.getElementById('predNoche')

let formHoy = document.getElementById('climaHoy')
let formFecha = document.getElementById('climaFecha')

let contenido1 = document.getElementById('contenido1')
let contenido2 = document.getElementById('contenido2')

let retraso1 = document.getElementById('retraso1')
let retraso2 = document.getElementById('retraso2')

let tiempo = Math.floor((Math.random())*10000)
let fechaSeleccionada = document.getElementById('fechaSeleccionada')

let arr = ['Despejado', 'Nublado', 'Lluvioso']


console.log(tiempo)


formHoy.addEventListener('submit', (event)=>{
    event.preventDefault()

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    
    setTimeout(predecirClimaHoy, tiempo, dateTime)
})

formFecha.addEventListener('submit', (event)=>{
    event.preventDefault()

    let fechaSelec = fechaSeleccionada.value
    
    setTimeout(predecirClimaFecha, tiempo, fechaSelec)
})


function predecirClimaHoy(dateTime){
    contenido1.innerHTML = 'Solicitud enviada: ' + dateTime
    predHoy.innerHTML = 'El clima de hoy es: ' + arr[Math.floor(Math.random() * arr.length)]
    retraso1.innerHTML = 'Este mensaje se retraso por: ' + (tiempo/1000) + ' segundos.'
}

function predecirClimaFecha(fechaSelec){
    contenido2.innerHTML = 'Solicitud enviada: ' + fechaSelec
    predManana.innerHTML = 'El clima de la manana de hoy es: ' + arr[Math.floor(Math.random() * arr.length)]
    predTarde.innerHTML = 'El clima de la tarde de hoy es: ' + arr[Math.floor(Math.random() * arr.length)]
    predNoche.innerHTML = 'El clima de la noche de hoy es: ' + arr[Math.floor(Math.random() * arr.length)]
    retraso2.innerHTML = 'Este mensaje se retraso por: ' + (tiempo/1000) + ' segundos.'
}