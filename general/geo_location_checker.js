// if ($response.statusCode != 200) {
//     $done(Null);
//   }

// let countryFlagJsonUrl = "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/by-code.json"
//  $task.fetch({url: countryFlagJsonUrl}).then(response => {
//      var countryFlag = countryFlagJsonUrl
//  }, reason => {
//      $done({"title":"Get Country Flag Failed","message":"Network Error"});
//  });

var country_flag = {"AC":"🇦🇨","AD":"🇦🇩","AE":"🇦🇪","AF":"🇦🇫","AG":"🇦🇬","AI":"🇦🇮","AL":"🇦🇱","AM":"🇦🇲","AO":"🇦🇴","AQ":"🇦🇶","AR":"🇦🇷","AS":"🇦🇸","AT":"🇦🇹","AU":"🇦🇺","AW":"🇦🇼","AX":"🇦🇽","AZ":"🇦🇿","BA":"🇧🇦","BB":"🇧🇧","BD":"🇧🇩","BE":"🇧🇪","BF":"🇧🇫","BG":"🇧🇬","BH":"🇧🇭","BI":"🇧🇮","BJ":"🇧🇯","BL":"🇧🇱","BM":"🇧🇲","BN":"🇧🇳","BO":"🇧🇴","BQ":"🇧🇶","BR":"🇧🇷","BS":"🇧🇸","BT":"🇧🇹","BV":"🇧🇻","BW":"🇧🇼","BY":"🇧🇾","BZ":"🇧🇿","CA":"🇨🇦","CC":"🇨🇨","CD":"🇨🇩","CF":"🇨🇫","CG":"🇨🇬","CH":"🇨🇭","CI":"🇨🇮","CK":"🇨🇰","CL":"🇨🇱","CM":"🇨🇲","CN":"🇨🇳","CO":"🇨🇴","CP":"🇨🇵","CR":"🇨🇷","CU":"🇨🇺","CV":"🇨🇻","CW":"🇨🇼","CX":"🇨🇽","CY":"🇨🇾","CZ":"🇨🇿","DE":"🇩🇪","DG":"🇩🇬","DJ":"🇩🇯","DK":"🇩🇰","DM":"🇩🇲","DO":"🇩🇴","DZ":"🇩🇿","EA":"🇪🇦","EC":"🇪🇨","EE":"🇪🇪","EG":"🇪🇬","EH":"🇪🇭","ER":"🇪🇷","ES":"🇪🇸","ET":"🇪🇹","EU":"🇪🇺","FI":"🇫🇮","FJ":"🇫🇯","FK":"🇫🇰","FM":"🇫🇲","FO":"🇫🇴","FR":"🇫🇷","GA":"🇬🇦","GB":"🇬🇧","GD":"🇬🇩","GE":"🇬🇪","GF":"🇬🇫","GG":"🇬🇬","GH":"🇬🇭","GI":"🇬🇮","GL":"🇬🇱","GM":"🇬🇲","GN":"🇬🇳","GP":"🇬🇵","GQ":"🇬🇶","GR":"🇬🇷","GS":"🇬🇸","GT":"🇬🇹","GU":"🇬🇺","GW":"🇬🇼","GY":"🇬🇾","HK":"🇭🇰","HM":"🇭🇲","HN":"🇭🇳","HR":"🇭🇷","HT":"🇭🇹","HU":"🇭🇺","IC":"🇮🇨","ID":"🇮🇩","IE":"🇮🇪","IL":"🇮🇱","IM":"🇮🇲","IN":"🇮🇳","IO":"🇮🇴","IQ":"🇮🇶","IR":"🇮🇷","IS":"🇮🇸","IT":"🇮🇹","JE":"🇯🇪","JM":"🇯🇲","JO":"🇯🇴","JP":"🇯🇵","KE":"🇰🇪","KG":"🇰🇬","KH":"🇰🇭","KI":"🇰🇮","KM":"🇰🇲","KN":"🇰🇳","KP":"🇰🇵","KR":"🇰🇷","KW":"🇰🇼","KY":"🇰🇾","KZ":"🇰🇿","LA":"🇱🇦","LB":"🇱🇧","LC":"🇱🇨","LI":"🇱🇮","LK":"🇱🇰","LR":"🇱🇷","LS":"🇱🇸","LT":"🇱🇹","LU":"🇱🇺","LV":"🇱🇻","LY":"🇱🇾","MA":"🇲🇦","MC":"🇲🇨","MD":"🇲🇩","ME":"🇲🇪","MF":"🇲🇫","MG":"🇲🇬","MH":"🇲🇭","MK":"🇲🇰","ML":"🇲🇱","MM":"🇲🇲","MN":"🇲🇳","MO":"🇲🇴","MP":"🇲🇵","MQ":"🇲🇶","MR":"🇲🇷","MS":"🇲🇸","MT":"🇲🇹","MU":"🇲🇺","MV":"🇲🇻","MW":"🇲🇼","MX":"🇲🇽","MY":"🇲🇾","MZ":"🇲🇿","NA":"🇳🇦","NC":"🇳🇨","NE":"🇳🇪","NF":"🇳🇫","NG":"🇳🇬","NI":"🇳🇮","NL":"🇳🇱","NO":"🇳🇴","NP":"🇳🇵","NR":"🇳🇷","NU":"🇳🇺","NZ":"🇳🇿","OM":"🇴🇲","PA":"🇵🇦","PE":"🇵🇪","PF":"🇵🇫","PG":"🇵🇬","PH":"🇵🇭","PK":"🇵🇰","PL":"🇵🇱","PM":"🇵🇲","PN":"🇵🇳","PR":"🇵🇷","PS":"🇵🇸","PT":"🇵🇹","PW":"🇵🇼","PY":"🇵🇾","QA":"🇶🇦","RE":"🇷🇪","RO":"🇷🇴","RS":"🇷🇸","RU":"🇷🇺","RW":"🇷🇼","SA":"🇸🇦","SB":"🇸🇧","SC":"🇸🇨","SD":"🇸🇩","SE":"🇸🇪","SG":"🇸🇬","SH":"🇸🇭","SI":"🇸🇮","SJ":"🇸🇯","SK":"🇸🇰","SL":"🇸🇱","SM":"🇸🇲","SN":"🇸🇳","SO":"🇸🇴","SR":"🇸🇷","SS":"🇸🇸","ST":"🇸🇹","SV":"🇸🇻","SX":"🇸🇽","SY":"🇸🇾","SZ":"🇸🇿","TA":"🇹🇦","TC":"🇹🇨","TD":"🇹🇩","TF":"🇹🇫","TG":"🇹🇬","TH":"🇹🇭","TJ":"🇹🇯","TK":"🇹🇰","TL":"🇹🇱","TM":"🇹🇲","TN":"🇹🇳","TO":"🇹🇴","TR":"🇹🇷","TT":"🇹🇹","TV":"🇹🇻","TW":"🇹🇼","TZ":"🇹🇿","UA":"🇺🇦","UG":"🇺🇬","UM":"🇺🇲","UN":"🇺🇳","US":"🇺🇸","UY":"🇺🇾","UZ":"🇺🇿","VA":"🇻🇦","VC":"🇻🇨","VE":"🇻🇪","VG":"🇻🇬","VI":"🇻🇮","VN":"🇻🇳","VU":"🇻🇺","WF":"🇼🇫","WS":"🇼🇸","XK":"🇽🇰","YE":"🇾🇪","YT":"🇾🇹","ZA":"🇿🇦","ZM":"🇿🇲","ZW":"🇿🇼","ENGLAND":"🏴󠁧󠁢󠁥󠁮󠁧󠁿","SCOTLAND":"🏴󠁧󠁢󠁳󠁣󠁴󠁿","WALES":"🏴󠁧󠁢󠁷󠁬󠁳󠁿"};


function ifExsit(object) {
    if(typeof(object) == "undefined" || object == null|| object == "")
        return false;
    return true;
}

function ifExsitOrReturn(object, instead) {
    return (ifExsit(object) ? object: instead)
}

function getCountryflag(country_code) {
    return ((country_flag[country_code]==undefined) ? "🌍":country_flag[country_code]);
}

function getCity(object) {
    if(ifExsit(object['city'])) return object['city'];
    if(ifExsit(object['regionName'])) return object['regionName'];
    if(ifExsit(object['country'])) return object['country'];
    return "Earth";
}

var body = $response.body;
var data = JSON.parse(body);
var title = getCountryflag(data['countryCode']) + ' ' + getCity(data);
var subtitle = ifExsitOrReturn(data["as"], 'Unkonwn ISP');
var ip = data['query'];
var description = data['country'] + ' - ' + data['city'] + '\n' + data['timezone'] + '\n' + data['isp'];
  

$done({title, subtitle, ip, description});
