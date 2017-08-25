

function readBrowserProperties() {
    InstallTrigger;
    safari;
    isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    isFirefox = typeof InstallTrigger !== 'undefined';
    isSafari = /constructor/i.test(window.HTMLElement) || (function (p) {
        return p.toString() === "[object SafariRemoteNotification]";
    })(!window['safari'] || safari.pushNotification);
    isIE = /*@cc_on!@*/false || !!document.documentMode;
    isEdge = !isIE && !!window.StyleMedia;
    isChrome = !!window.chrome && !!window.chrome.webstore;
    isBlink = (isChrome || isOpera) && !!window.CSS;

    console.log("isOpera", isOpera);
    console.log("isFirefox", isFirefox);
    console.log("isSafari", isSafari);
    console.log("isIE", isIE);
    console.log("isEdge", isEdge);
    console.log("isChrome", isChrome);
    console.log("isBlink", isBlink);
}
