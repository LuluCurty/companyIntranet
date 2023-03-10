setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min =time.getMinutes();
    let day = time.getDate();
    let month = time.getMonth();
    let year = time.getFullYear();
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    day = day < 10 ? '0' + day: day;
    month = month +1
    if (month < 10) { month = '0'+month } 
    let currentTime = `${hour}:${min}<br><span id="clock-date">${day}/${month}/${year}</span>`
    document.getElementById("clock").innerHTML = currentTime;
    const message = {
        inicial: 'Olá, seja bem vindo!',
        bomDia: 'Bom dia!',
        almoco: 'Bom almoço!',
        boaTarde: 'Boa tarde!',
        end: 'Acabou o expediente!'
    }
    let text = document.getElementById('mensagem').innerHTML

    if(hour >= 6 && hour < 12){
        text = message['bomDia']
    } 
    else if( hour >= 12 && hour < 13){
        text = message['almoco']
    }
    else if(hour >= 13 && hour <= 17 ){
        if (hour === 17 && min >= 44) {
            text = message['end']
        }
        else{
            text = message['boaTarde']
        }
    }
    else if( hour >= 17){
        if (hour == 17 && min >= 44) {
            text = message['end']            
        }
        else if (hour > 17 || hour < 7){
            text = message['end']
        }
    }
    document.getElementById('mensagem').innerHTML = text
}
showTime();