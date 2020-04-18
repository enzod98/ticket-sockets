// Comando para establecer la conexión

var socket = io();

var lblTicket = [$('#lblTicket1'), $('#lblTicket2'), $('#lblTicket3'), $('#lblTicket4')]
var lblEscritorio = [$('#lblEscritorio1'), $('#lblEscritorio2'), $('#lblEscritorio3'), $('#lblEscritorio4')]


socket.on('connect', function() {
    console.log('Conectado al servidor');
})
socket.on('disconnect', function() {
    console.log('Desconectado del servidor');
});

socket.on('estadoActual', (data) => {
    console.log(data);
    actualizaHTML(data.ultimosCuatro);
})


socket.on('ultimosCuatro', (ultimosCuatro) => {
    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    actualizaHTML(ultimosCuatro);

})


function actualizaHTML(ultimosCuatro) {
    for (var i = 0; i < ultimosCuatro.length; i++) {
        lblTicket[i].text('Ticket ' + ultimosCuatro[i].numero);
        lblEscritorio[i].text('Escritorio ' + ultimosCuatro[i].escritorio);
    }
}