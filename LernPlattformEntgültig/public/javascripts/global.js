var tabelleninhalt = '';

$(document).ready(function(){
	var pubSub = new Faye.Client('/faye');

	/*$('#aboCheckboxWBA2').click(function() {
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
	});*/

	//sub abbo wba2 mat1
	if(window.sessionStorage.getItem("SubWba2Mat1") == "ja"){
		pubSub.subscribe('/wba2/material1/addkommentar', tickerAktualisieren);
	}
	else{
		pubSub.unsubscribe('/wba2/material1/addkommentar');
	}

	//sub abbo cga mat1
	if(window.sessionStorage.getItem("SubCgaMat1") == "ja"){
		pubSub.subscribe('/cga/material1/addkommentar', tickerAktualisieren);
	}
	else{
		pubSub.unsubscribe('/cga/material1/addkommentar');
	}

	//loginbutton
	$('#btnLogin').on('click', storageInputUsername);

	//buttons wba2 mat 1
	$('#btnSubWba2').on('click', storageInputSubWba2Mat1);

	$('#btnUnsubWba2').on('click', deleteInputSubWba2Mat1);

	//buttons cga mat 1
	$('#btnSubCga').on('click', storageInputSubCgaMat1);

	$('#btnUnsubCga').on('click', deleteInputSubCgaMat1);

	//logout btn
	$('#btnLogout').on('click', clearStorage);

	//home btn
	$('#btnHome').on('click', ladeHome);

	//lade home topic
	function ladeHome(wert){
		wert.preventDefault();
		window.location.href="/home";
	};

	//funktion fuer ticker 
	function tickerAktualisieren(message){

		tabelleninhalt += '<tr>';
		tabelleninhalt += '<td><a href="'+ message.hyperlink + '">' + message.material + '</a></td>';
		tabelleninhalt += '</tr>';

		$('#Ticker table tbody').html(tabelleninhalt);
	};

	//fuellt die user daten ein
	function insertUserDaten(wert){
		

	};


	//username in sessionStorage
	function storageInputUsername(wert){
		wert.preventDefault();
		var uservalue = $('#formLogin form input#inputAddUsr').val();
		if(uservalue == ''){
			alert("Es muss ein Username eingegeben werden.");
		}
		else{
		window.sessionStorage.setItem("username", uservalue);
		window.location.href='/home';
		}
	};
	//wba2 material1 abo
	function storageInputSubWba2Mat1(wert){
		wert.preventDefault();
		if(window.sessionStorage.getItem("SubWba2Mat1") == "ja"){
			alert("Sie haben dieses Material bereits abonniert.");
		}
		else{
		window.sessionStorage.setItem("SubWba2Mat1", "ja");
		window.location.href='/home/wba2/material1';
		alert("Lernmaterial wurde aboniert.");
		}
	};
	//wba2 material1 deabo
	function deleteInputSubWba2Mat1(wert){
		wert.preventDefault();
		if(window.sessionStorage.getItem("SubWba2Mat1") != "ja"){
			alert("Um deabonieren zu können müssen sie zunächst das Lernmaterial abonnieren")
		}
		else{
		window.sessionStorage.removeItem("SubWba2Mat1");
		window.location.href='/home/wba2/material1';
		alert("Lernmaterial wurde deaboniert.");
		}
	};
	//cga material1 abo
	function storageInputSubCgaMat1(wert){
		wert.preventDefault();
		if(window.sessionStorage.getItem("SubCgaMat1") == "ja"){
			alert("Sie haben dieses Material bereits abonniert.")
		}
		else{
		window.sessionStorage.setItem("SubCgaMat1", "ja");
		window.location.href='/home/cga/material1';
		alert("Lernmaterial wurde aboniert.");
		}
	};
	//cga material1 deabo
	function deleteInputSubCgaMat1(wert){
		wert.preventDefault();
		if(window.sessionStorage.getItem("SubCgaMat1") != "ja"){
			alert("Um deabonieren zu können müssen sie zunächst das Lernmaterial abonnieren")
		}
		else{
		window.sessionStorage.removeItem("SubCgaMat1");
		window.location.href='/home/cga/material1';
		alert("Lernmaterial wurde deaboniert.");
		}
	};

	//Storage des users leeren
	function clearStorage(wert){
		wert.preventDefault();
		var answer = confirm("Wollen sie sich wirklich ausloggen?")
		if(answer){
			alert("Auf Wiedersehen!");
			window.location.href="/";
			window.sessionStorage.clear();
		}
		else{
			alert("Doch etwas vergessen?");
		}
	};
});

