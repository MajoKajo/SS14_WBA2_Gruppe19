$(document).ready(function(){
	var pubSub = new Faye.Client('/faye'); 

	$('#aboCheckboxWBA2').click(function() {
		if($('#aboCheckboxWBA2').prop('checked')  == true){
			pubSub.subscribe('/wba2/material1/addkommentar',tickerAktualisieren);
		}
		else {
			pubSub.unsubscribe('/wba2/material1/addkommentar');
		}
	});

	$('#aboCheckboxCGA').click(function() {
		if($('#aboCheckboxCGA').prop('checked')  == true){
			pubSub.subscribe('/cga/material1/addkommentar',tickerAktualisieren);
		}
		else {
			pubSub.unsubscribe('/cga/material1/addkommentar');
		}
	});
	

	function tickerAktualisieren(message){
		var tabelleninhalt = '';

		tabelleninhalt += '<tr>';
		tabelleninhalt += '<td>' + message.material + '</td>';
		tabelleninhalt += '</tr>';

		$('#Ticker table tbody').html(tabelleninhalt);
	};
});