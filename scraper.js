// définir les variables

		let leads = [];
	
		var anchors = document.getElementsByClassName('jpDWw-HiaYvf');
		
		let n = 0;
		
		
// identifier toutes les cartes en bas de page
		
		let b_newplaces_cards = document.querySelectorAll(".jpDWw-HiaYvf");

// place les mouchard sur les cartes en bas de page

        for(var i = 0; i < anchors.length; i++) {
            
            var anchor = anchors[i];
            
            anchor.onclick = function anchorclick() {
                
        b_name = document.querySelector(`.gm2-headline-5`).children[0].innerText;
	console.log(b_name)
	
  	b_address = document.querySelectorAll(".QSFF4-text")[0].innerText;
	console.log(b_address)
	
	b_phone = document.querySelectorAll(".QSFF4-text")[1].innerText;
	console.log(b_phone)

	
	longitex = /\@[-?\d\.]*\,([-?\d\.]*)/;
	b_longitude = longitex.exec(window.location.href)[1];
	console.log(b_longitude)
	
	latex = /\@(-?[\d\.]*)/;
	 b_latitude = latex.exec(window.location.href)[1];
	console.log(b_latitude)

	csv = '"Places";"Address";"Phone";"Longitude";"Latitude"\n';
	
	leads[leads.length] = ["\"" + b_name + "\"",
	    "\"" + b_address + "\"",
	    "\"" + b_phone + "\"",
	    "\"" + b_longitude + "\"",
	    "\"" + b_latitude + "\""];

            }
        }
        
// créer les boutons et le formulaire de recherche
        
        function create(htmlStr) {
	    var frag = document.createDocumentFragment(),
		temp = document.createElement('div');
	    temp.innerHTML = htmlStr;
	    while (temp.firstChild) {
		frag.appendChild(temp.firstChild);
	    }
	    return frag;
	}

	var fragment = create('<button id="sender" style="  background-color: #4CAF50; /* Green */ border: none;  color: white;  padding: 15px 32px;  text-align: center;  text-decoration: none;  display: inline-block;  font-size: 16px; background-color=red; z-index:10; position:fixed; left: 50%;" >Télécharger le fichier csv</button><p>...</p>');
	// You can use native DOM methods to insert the fragment:
	document.body.insertBefore(fragment, document.body.childNodes[0]);
	
	var fragment2 = create('<button id="scraper" style="  background-color: #4CAF50; /* Green */ border: none;  color: white;  padding: 15px 32px;  text-align: center;  text-decoration: none;  display: inline-block;  font-size: 16px; background-color=red; z-index:10; position:fixed; left: 20%;" >Place suivante</button><p>...</p>');
	// You can use native DOM methods to insert the fragment:
	document.body.insertBefore(fragment2, document.body.childNodes[0]);
	
	
	var sender = document.getElementById('sender');
	
	var scraper = document.getElementById('scraper');
	
	scraper.onclick = function(n) {
	
		copy();
            }
                
	function copy() {
			var anchors = document.getElementsByClassName('Dzbife');
			anchors[n].click();
			n++;

	}
	
		sender.onclick = function(n) {
	
				var csv
	
				    leads.forEach(function(row) {
					    csv += row.join(';');
					    csv += "\n";
				    });

				var hiddenElement = document.createElement('a');
				    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
				    hiddenElement.target = '_blank';
				    hiddenElement.download = `googlemaps-leads.csv`;
				    hiddenElement.click(); 
            }
                
                
                
// create a form for link request
	
	let city = "Antananarivo"

let country = "Madagascar"

let placeType = "Librairie"

let link = `https://www.google.com/maps/search/${city},+${country},+${placeType}`

    function ValidateForm() {
		var countrychoice = document.getElementById('country').value;
		var citychoice = document.getElementById('input_city').value;
		var placechoice = document.getElementById('placetype').value;
			location.href = `https://www.google.com/maps/search/${citychoice},+${countrychoice},+${placechoice}`;
			return false;
	}
	
    // Create a form synamically
    var form = document.createElement("form");
    form.style.backgroundColor = "white";
    form.style.height = "100px";
    form.style.position = "fixed";
    form.style.color = "red";
    form.setAttribute("method", "get");
    form.setAttribute("onsubmit", "return ValidateForm()");

	
    // Create an input element for country
    var CN = document.createElement("select");
    CN.setAttribute("type", "text");
    CN.setAttribute("id", "input_country");
    CN.setAttribute("name", "FullName");
    CN.setAttribute("placeholder", "Country");
    //Create array of options to be added country
	var array = ["AF|Afghanistan","AL|Albania","DZ|Algeria","AS|American Samoa","AD|Andorra","AO|Angola","AI|Anguilla","AQ|Antarctica","AG|Antigua And Barbuda","AR|Argentina","AM|Armenia","AW|Aruba","AU|Australia","AT|Austria","AZ|Azerbaijan","BS|Bahamas","BH|Bahrain","BD|Bangladesh","BB|Barbados","BY|Belarus","BE|Belgium","BZ|Belize","BJ|Benin","BM|Bermuda","BT|Bhutan","BO|Bolivia","BA|Bosnia And Herzegovina","BW|Botswana","BV|Bouvet Island","BR|Brazil","IO|British Indian Ocean Territory","BN|Brunei Darussalam","BG|Bulgaria","BF|Burkina Faso","BI|Burundi","KH|Cambodia","CM|Cameroon","CA|Canada","CV|Cape Verde","KY|Cayman Islands","CF|Central African Republic","TD|Chad","CL|Chile","CN|China","CX|Christmas Island","CC|Cocos (keeling) Islands","CO|Colombia","KM|Comoros","CG|Congo","CD|Congo, The Democratic Republic Of The","CK|Cook Islands","CR|Costa Rica","CI|Cote D'ivoire","HR|Croatia","CU|Cuba","CY|Cyprus","CZ|Czech Republic","DK|Denmark","DJ|Djibouti","DM|Dominica","DO|Dominican Republic","TP|East Timor","EC|Ecuador","EG|Egypt","SV|El Salvador","GQ|Equatorial Guinea","ER|Eritrea","EE|Estonia","ET|Ethiopia","FK|Falkland Islands (malvinas)","FO|Faroe Islands","FJ|Fiji","FI|Finland","FR|France","GF|French Guiana","PF|French Polynesia","TF|French Southern Territories","GA|Gabon","GM|Gambia","GE|Georgia","DE|Germany","GH|Ghana","GI|Gibraltar","GR|Greece","GL|Greenland","GD|Grenada","GP|Guadeloupe","GU|Guam","GT|Guatemala","GN|Guinea","GW|Guinea-bissau","GY|Guyana","HT|Haiti","HM|Heard Island And Mcdonald Islands","VA|Holy See (vatican City State)","HN|Honduras","HK|Hong Kong","HU|Hungary","IS|Iceland","IN|India","ID|Indonesia","IR|Iran, Islamic Republic Of","IQ|Iraq","IE|Ireland","IL|Israel","IT|Italy","JM|Jamaica","JP|Japan","JO|Jordan","KZ|Kazakstan","KE|Kenya","KI|Kiribati","KP|Korea, Democratic People's Republic Of","KR|Korea, Republic Of","KV|Kosovo","KW|Kuwait","KG|Kyrgyzstan","LA|Lao People's Democratic Republic","LV|Latvia","LB|Lebanon","LS|Lesotho","LR|Liberia","LY|Libyan Arab Jamahiriya","LI|Liechtenstein","LT|Lithuania","LU|Luxembourg","MO|Macau","MK|Macedonia, The Former Yugoslav Republic Of","MG|Madagascar","MW|Malawi","MY|Malaysia","MV|Maldives","ML|Mali","MT|Malta","MH|Marshall Islands","MQ|Martinique","MR|Mauritania","MU|Mauritius","YT|Mayotte","MX|Mexico","FM|Micronesia, Federated States Of","MD|Moldova, Republic Of","MC|Monaco","MN|Mongolia","MS|Montserrat","ME|Montenegro","MA|Morocco","MZ|Mozambique","MM|Myanmar","NA|Namibia","NR|Nauru","NP|Nepal","NL|Netherlands","AN|Netherlands Antilles","NC|New Caledonia","NZ|New Zealand","NI|Nicaragua","NE|Niger","NG|Nigeria","NU|Niue","NF|Norfolk Island","MP|Northern Mariana Islands","NO|Norway","OM|Oman","PK|Pakistan","PW|Palau","PS|Palestinian Territory, Occupied","PA|Panama","PG|Papua New Guinea","PY|Paraguay","PE|Peru","PH|Philippines","PN|Pitcairn","PL|Poland","PT|Portugal","PR|Puerto Rico","QA|Qatar","RE|Reunion","RO|Romania","RU|Russian Federation","RW|Rwanda","SH|Saint Helena","KN|Saint Kitts And Nevis","LC|Saint Lucia","PM|Saint Pierre And Miquelon","VC|Saint Vincent And The Grenadines","WS|Samoa","SM|San Marino","ST|Sao Tome And Principe","SA|Saudi Arabia","SN|Senegal","RS|Serbia","SC|Seychelles","SL|Sierra Leone","SG|Singapore","SK|Slovakia","SI|Slovenia","SB|Solomon Islands","SO|Somalia","ZA|South Africa","GS|South Georgia And The South Sandwich Islands","ES|Spain","LK|Sri Lanka","SD|Sudan","SR|Suriname","SJ|Svalbard And Jan Mayen","SZ|Swaziland","SE|Sweden","CH|Switzerland","SY|Syrian Arab Republic","TW|Taiwan, Province Of China","TJ|Tajikistan","TZ|Tanzania, United Republic Of","TH|Thailand","TG|Togo","TK|Tokelau","TO|Tonga","TT|Trinidad And Tobago","TN|Tunisia","TR|Turkey","TM|Turkmenistan","TC|Turks And Caicos Islands","TV|Tuvalu","UG|Uganda","UA|Ukraine","AE|United Arab Emirates","GB|United Kingdom","US|United States","UM|United States Minor Outlying Islands","UY|Uruguay","UZ|Uzbekistan","VU|Vanuatu","VE|Venezuela","VN|Viet Nam","VG|Virgin Islands, British","VI|Virgin Islands, U.s.","WF|Wallis And Futuna","EH|Western Sahara","YE|Yemen","ZM|Zambia","ZW|Zimbabwe"
];

	//Create and append select list
	var selectList = document.createElement("select");
	selectList.setAttribute("id", "country");
	selectList.setAttribute("class", "form-control");
	selectList.setAttribute("name", "country");
	form.appendChild(selectList);

	//Create and append the options
	for (var i = 0; i < array.length; i++) {
	    var option = document.createElement("option");
	    option.setAttribute("value", array[i]);
	    option.text = array[i]+' Years';
	    selectList.appendChild(option);
	}
  
     // Create an input element for city
     var CY = document.createElement("input");
     CY.setAttribute("id", "input_city");
     CY.setAttribute("type", "text");
     CY.setAttribute("name", "dob");
     CY.setAttribute("placeholder", "DOB");
  
     // Create an input element for place type
     var PT = document.createElement("select");
     PT.setAttribute("id", "input_place");
     PT.setAttribute("type", "text");
     PT.setAttribute("name", "emailID");
     PT.setAttribute("placeholder", "E-Mail ID");
     
         //Create array of options to be added country
	var array = ["librairie", "bibliothèque"];

	//Create and append select list
	var selectList2 = document.createElement("select");
	selectList2.setAttribute("id", "placetype");
	selectList2.setAttribute("class", "form-control");
	selectList2.setAttribute("name", "country");
	form.appendChild(selectList2);

	//Create and append the options
	for (var i = 0; i < array.length; i++) {
	    var option = document.createElement("option");
	    option.setAttribute("value", array[i]);
	    option.text = array[i]+' Years';
	    selectList2.appendChild(option);
	}
  
                // create a submit button
                var s = document.createElement("input");
                s.setAttribute("type", "submit");
                s.setAttribute("value", "Submit");
                  
                // Append the country input to the form
                form.appendChild(CN);  
                  
                // Append the city to the form
                form.appendChild(CY); 
                  
                // Append the placeType to the form
                form.appendChild(PT); 
                  
                // Append the submit button to the form
                form.appendChild(s); 
  
                document.getElementsByTagName("body")[0].appendChild(form);
