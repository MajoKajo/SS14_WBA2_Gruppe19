var tabelleninhalt = '';

$(document).ready(function(){
	var pubSub = new Faye.Client('/faye');

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

	//Bewerten wba2 mat1
	$('#btnBewertungWba2Mat1').on('click', bewertungHinzufuegenWba2Mat1);

	//Bewerten cga mat1
	$('#btnBewertungCgaMat1').on('click', bewertungHinzufuegenCgaMat1);

	//beim ersten seitenladen wba2 bewertungen
	ladeBewertungWba2Mat1();	

	//beim ersten seitenladen Cga bewertungen
	ladeBewertungCgaMat1();

	//lade home topic
	function ladeHome(event){
		event.preventDefault();
		window.location.href="/home";
	};

	//funktion fuer ticker 
	function tickerAktualisieren(message){

		tabelleninhalt += '<tr>';
		tabelleninhalt += '<td><a href="'+ message.hyperlink + '">' + message.material + '</a></td>';
		tabelleninhalt += '</tr>';

		$('#Ticker table tbody').html(tabelleninhalt);
	};


	//username in sessionStorage
	function storageInputUsername(event){
		event.preventDefault();
		var uservalue = $('form#formLogin input#inputAddUsr').val();
		if(uservalue == ''){
			alert("Es muss ein Username eingegeben werden.");
		}
		else{
		window.sessionStorage.setItem("username", uservalue);
		window.location.href='/home';
		}
	};

	//wba2 material1 abo
	function storageInputSubWba2Mat1(event){
		event.preventDefault();
		if(window.sessionStorage.getItem("SubWba2Mat1") == "ja"){
			alert("Sie haben dieses Material bereits abonniert.");
		}
		else{
		window.sessionStorage.setItem("SubWba2Mat1", "ja");
		window.location.href='/home/wba2/material1';
		alert("Lernmaterial wurde abonniert.");
		}
	};

	//wba2 material1 deabo
	function deleteInputSubWba2Mat1(event){
		event.preventDefault();
		if(window.sessionStorage.getItem("SubWba2Mat1") != "ja"){
			alert("Um deabonnieren zu können müssen sie zunächst das Lernmaterial abonnieren")
		}
		else{
		window.sessionStorage.removeItem("SubWba2Mat1");
		window.location.href='/home/wba2/material1';
		alert("Lernmaterial wurde deabonniert.");
		}
	};

	//cga material1 abo
	function storageInputSubCgaMat1(event){
		event.preventDefault();
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
	function deleteInputSubCgaMat1(event){
		event.preventDefault();
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
	function clearStorage(event){
		event.preventDefault();
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

	//ajax get auf alle bewertungen wba2 mat1
	function ladeBewertungWba2Mat1(event){
		$.ajax({
			type: 'GET',
			url: '/wba2/material1/getbewertung',
			contentType: 'application/json'
		}).done(function(data){
			summeRechnenWba2Mat1(data);
		}).fail(function(e){
			alert('Fehler beim holen der Daten (' + JSON.stringify(e) + ')');
		});
	};

	//ajax get auf alle bewertungen cga mat1
	function ladeBewertungCgaMat1(event){
		$.ajax({
			type: 'GET',
			url: '/cga/material1/getbewertung',
			contentType: 'application/json'
		}).done(function(data){
			summeRechnenCgaMat1(data);
		}).fail(function(e){
			alert('Fehler beim holen der Daten (' + JSON.stringify(e) + ')');
		});
	};

	//anzahl + durchshnitt bewertungen
	function summeRechnenWba2Mat1(data){
		var rechnen = data;
		var post = '';
		var summe = 0;
		var anzahl = rechnen.length;
		for(i=0; i<anzahl; i++){
			summe += Number(rechnen[i].bewertung);
		};
		post += '<tr>';
		post += '<td>' + anzahl + '</td>';
		post += '<td>' + summe/anzahl + '</td>';
		post += '<tr>';

		$('#BewertungWba2Mat1 div table tbody').html(post);
	};

	//anzahl + durchshnitt bewertungen cga
	function summeRechnenCgaMat1(data){
		var rechnen = data;
		var post = '';
		var summe = 0;
		var anzahl = rechnen.length;
		for(i=0; i<anzahl; i++){
			summe += Number(rechnen[i].bewertung);
		};
		post += '<tr>';
		post += '<td>' + anzahl + '</td>';
		post += '<td>' + summe/anzahl + '</td>';
		post += '<tr>';

		$('#BewertungCgaMat1 div table tbody').html(post);
	};

	//ajax post fuer bewertung wba2 mat1
	function bewertungHinzufuegenWba2Mat1(event){
		event.preventDefault();

		var neueBewertung = {
			'bewertung': $('#BewertungWba2Mat1 div form#formBewertung input#inputBewertung').val(),
		};

		var bewertungsWert = $('#BewertungWba2Mat1 div form#formBewertung input#inputBewertung').val();

		var frage = isNaN(bewertungsWert);

		if(window.sessionStorage.getItem("wba2Mat1Kommentiert") == "ja"){
			alert("Sie dürfen jedes Material nur einmal bewerten.")
			$('#BewertungWba2Mat1 div form#formBewertung input#inputBewertung').val('');
		}
		else{
			if(bewertungsWert == ''){
				alert('Das Input-Feld darf nicht leer sein!');
				$('#BewertungWba2Mat1 div form#formBewertung input#inputBewertung').val('');
			}
			else{
				if(frage == true){
					alert("Sie müssen eine Zahl eingeben!");
					$('#BewertungWba2Mat1 div form#formBewertung input#inputBewertung').val('');
				}
				else{
					if(bewertungsWert < 1 || bewertungsWert > 10){
						alert("Es sind nur Zahlen von 1 bis 10 erlaubt.");
						$('#BewertungWba2Mat1 div form#formBewertung input#inputBewertung').val('');
					}
					else{

						//AJAX zum post an /wba2/material1/addbewertung
						$.ajax({
							type: 'POST',
							url: '/wba2/material1/addbewertung',
							data: JSON.stringify(neueBewertung),
							contentType: 'application/json'
						}).done(function(){
							$('#BewertungWba2Mat1 div form#formBewertung input#inputBewertung').val('');
							window.sessionStorage.setItem("wba2Mat1Kommentiert", "ja");
							ladeBewertungWba2Mat1();
						}).fail(function(e){
							alert("Fehler beim POST");
						});
					}	
				}
			}
		}
	};

	//ajax post fuer bewertung cga mat1
	function bewertungHinzufuegenCgaMat1(event){
		event.preventDefault();

		var neueBewertung = {
			'bewertung': $('#BewertungCgaMat1 div form#formBewertung input#inputBewertung').val(),
		};

		var bewertungsWert = $('#BewertungCgaMat1 div form#formBewertung input#inputBewertung').val();

		var frage = isNaN(bewertungsWert);

		if(window.sessionStorage.getItem("cgaMat1Kommentiert") == "ja"){
			alert("Sie dürfen jedes Material nur einmal bewerten.")
			$('#BewertungCgaMat1 div form#formBewertung input#inputBewertung').val('');
		}
		else{
			if(bewertungsWert == ''){
				alert('Das Input-Feld darf nicht leer sein!');
				$('#BewertungCgaMat1 div form#formBewertung input#inputBewertung').val('');
			}
			else{
				if(frage == true){
					alert("Sie müssen eine Zahl eingeben!");
					$('#BewertungCgaMat1 div form#formBewertung input#inputBewertung').val('');
				}
				else{
					if(bewertungsWert < 1 || bewertungsWert > 10){
						alert("Es sind nur Zahlen von 1 bis 10 erlaubt.");
						$('#BewertungCgaMat1 div form#formBewertung input#inputBewertung').val('');
					}
					else{

						//AJAX zum post an /wba2/material1/addkommentar
						$.ajax({
							type: 'POST',
							url: '/cga/material1/addbewertung',
							data: JSON.stringify(neueBewertung),
							contentType: 'application/json'
						}).done(function(){
							$('#BewertungCgaMat1 div form#formBewertung input#inputBewertung').val('');
							window.sessionStorage.setItem("cgaMat1Kommentiert", "ja");
							ladeBewertungCgaMat1();
						}).fail(function(e){
							alert("Fehler beim POST");
						});
					}	
				}
			}
		}
	};	
});

