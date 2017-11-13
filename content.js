var t = "";
var ac="show";
function gText(e) {
    t = (document.all) ? document.selection.createRange().text : document.getSelection().toString();
    if(t!=""){
        chrome.runtime.sendMessage({ 
            action: ac, 
            selected_txt: t
        });
    }
}

document.onmouseup = gText;
if (!document.all) document.captureEvents(Event.MOUSEUP);




//var totalElements;
//var inputFields;
//var buttonElement;

// Listen message from others
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse){
//    if(request.action == "readDom"){
//
////        totalElements = $("*").length;
////        inputFields = $("input").length;
////        buttonElement = $("button").length;
//
//    }
})
