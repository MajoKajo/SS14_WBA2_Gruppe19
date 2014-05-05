var tabelleninhalt = '';

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

	$('#aboCheckboxHOME').click(function() {
		if($('#aboCheckboxHOME').prop('checked')  == true){
			pubSub.subscribe('/cga/material1/addkommentar',tickerAktualisieren);
			pubSub.subscribe('/wba2/material1/addkommentar',tickerAktualisieren);
		}
		else {
			pubSub.unsubscribe('/cga/material1/addkommentar');
			pubSub.unsubscribe('/wba2/material1/addkommentar');
		}
	});
	

	function tickerAktualisieren(message){

		tabelleninhalt += '<tr>';
		tabelleninhalt += '<td><a href="'+ message.hyperlink + '">' + message.material + '</a></td>';
		tabelleninhalt += '</tr>';

		$('#Ticker table tbody').html(tabelleninhalt);
	};
});

