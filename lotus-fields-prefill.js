var name = $.cookie('sfname');
    var email = $.cookie('sfemail');
  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};
  
jQuery(document).ready(function(){
    var urlName = getUrlParameter('sfname');
    var urlEmail = getURLParameter('sfemail');
if(name !== 'undefined'){
console.log('name = '+name);
    jQuery('[name="name"]').prop('value', name);
}else if(urlName !== 'undefined'){
console.log('urlname = '+urlName);
   jQuery('[name="name"]').prop('value', urlName);
}else{console.log('none');}


if(typeof(email) !== 'undefined'){
console.log('email = '+email);
    jQuery('[name="email"]').prop('value', email);
}else if(typeof(urlName) !== 'undefined'){
console.log('urlemail = '+urlEmail);
   jQuery('[name="email"]').prop('value', urlEmail);
}else{console.log('email none');}
  })
//<!--    ^._.^     --!>
