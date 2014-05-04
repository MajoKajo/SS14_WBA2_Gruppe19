$(document).ready(function(){

	var pubSub = new Faye.Client('/faye'); 


	pubSub.subscribe('/kommentar', function(message){
		tickerAktualisieren();
	});

	function tickerAktualisieren(){

		var tabelleninhalt = '';

		$.getJSON('/kommentar', function(penis){

			tabelleninhalt += '<tr>';
			tabelleninhalt += '<td>' + penis.material + '</td>';
			tabelleninhalt += '</tr>';

			$('#Ticker table tbody').html(tabelleninhalt);
		});
	};
});