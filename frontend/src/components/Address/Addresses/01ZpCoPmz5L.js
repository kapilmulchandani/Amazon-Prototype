(function(c){var d=window.AmazonUIPageJS||window.P,b=d._namespace||d.attributeErrors,a=b?b("NavCartD12nAsset",""):d;a.guardFatal?a.guardFatal(c)(a,window):a.execute(function(){c(a,window)})})(function(c,d,b){(function(a){"undefined"!==typeof a&&a&&a.when("ewc.$","ewc.$root").register("DiBSSoundManagerLoader",function(c,b){var e=!1;b.delegate("span[data-action\x3dd12n-play-audio]","click",function(b){var f=JSON.parse(b.currentTarget.attributes.data.value).utteranceId,g=c(this);e||d.soundManager||(e=
!0,c.ajax("/gp/d12n/get-sound-manager.html",{method:"get",success:function(b){c("head").append(b);a.when("DiBSAudio").execute(function(a){a.playSoundFromId(f,g)})},error:function(){e=!1}}))})})})(d.EwcP)});