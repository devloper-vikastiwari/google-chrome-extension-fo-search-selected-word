chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action == "show") {
        window.open('https://www.google.co.in/search?q=define+'+request.selected_txt);
        
        // equest dectanioty api
//        var xhttp = new XMLHttpRequest();
//        xhttp.onreadystatechange = function() {
//            if (this.readyState == 4 && this.status == 200) {
//                alert(this.responseText);
//            }else{
//                alert(this.status);
//            }
//        };
//        xhttp.open("GET", "192.168.1.13/mart9/api/search-controller.php?action=search&search_query="+request.selected_txt, true);
        
        
//        xhttp.setRequestHeader("Accept": "application/json");
//        xhttp.send('app_id=b5129bce&app_key=a02ff75c1ec278c92319195098798737');
        
        
//        xhttp.setRequestHeader({
//          "Accept": "application/json",
//          "app_id": "b5129bce",
//          "app_key": "a02ff75c1ec278c92319195098798737"
//        });
    
//        xhttp.setRequestHeader("Accept": "application/json");
//        xhttp.setRequestHeader("app_id": "b5129bce");
//        xhttp.setRequestHeader("app_key": "a02ff75c1ec278c92319195098798737");
        
//        xhttp.send();
        
//        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//            chrome.pageAction.show(tabs[0].id);
//        });
    }
});