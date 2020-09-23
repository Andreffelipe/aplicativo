// class TimerController{



// var cron: void;

// //Inicia o temporizador
// function start() {
//     cron = setInterval(() => { timer(); }, 1000);
// }

// //Para o temporizador mas não limpa as variáveis
// function pause() {
//     clearInterval(cron);
// }

// //Para o temporizador e limpa as variáveis
// function stop() {
//     clearInterval(cron);
// }

// //Faz a contagem do tempo e exibição
// function timer() {
//     ss++; //Incrementa +1 na variável ss

//     if (ss == 59) { //Verifica se deu 59 segundos
//         ss = 0; //Volta os segundos para 0
//         mm++; //Adiciona +1 na variável mm

//         if (mm == 59) { //Verifica se deu 59 minutos
//             mm = 0;//Volta os minutos para 0
//             hh++;//Adiciona +1 na variável hora
//         }
//     }

//     //Cria uma variável com o valor tratado HH:MM:SS
//     var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    
// }
