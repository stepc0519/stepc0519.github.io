

function FindProxyForURL(url, host) {
    // ... https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_(PAC)_file#shExpMatch(str,%20shexp)
    var direct = "DIRECT";
    var local_ssr = "PROXY 127.0.0.1:1080";

    // var LocalIPAddress=myIpAddress();
    // // // 如果IP地址在10.28.28.0/24说明在家
    // // if (isInNet(LocalIPAddress,"10.28.28.0","255.255.255.0")){
    //     //载入家里的配置
    //     if (shExpMatch(url,"*ip138*")||
    // 		shExpMatch(url,"*telegram*")||
    // 		shExpMatch(url,"*f-droid*")||
    // 		shExpMatch(url,"*onedrive*")||
    // 		shExpMatch(url,"*icedropper*")||
    // 		shExpMatch(url,"*reddit*")||
    // 		shExpMatch(url,"*pmi*")||
    // 		shExpMatch(url,"*renzhe*")||
    // 		shExpMatch(url,"*wireguard*")||
    // 		shExpMatch(url,"*youtube*")||
    // 		shExpMatch(url,"*wikipedia*")||
    // 		//shExpMatch(url,"**")||
    //         shExpMatch(url,"*google*")){
    //         return renzhecloud_proxy;
    //     }
    //     // else{
    //     //     return direct;
    //     // }
    // // }

    if (shExpMatch(url, "*ip138*")
        || shExpMatch(url, "*microsoftonline*")
        || shExpMatch(url, "*dropbox*")
        || shExpMatch(url, "*mit.edu*")
        || shExpMatch(url, "*telegram*")
        || shExpMatch(url, "*f-droid.org*")
        || shExpMatch(url, "*onedrive.live.com*")
        || shExpMatch(url, "*ubuntu*")
        || shExpMatch(url, "*geforce*")
        || shExpMatch(url, "*icedropper*")
        || shExpMatch(url, "*nvidia*")
        || shExpMatch(url, "*apple*")
        || shExpMatch(url, "*reddit*")
        || shExpMatch(url, "*jetbrains*")
        || shExpMatch(url, "*hyperskill*")
        || shExpMatch(url, "*pmi*")
        || shExpMatch(url, "*google*")
        || shExpMatch(url, "*renzhe*")
        || shExpMatch(url, "*avg*")
        || shExpMatch(url, "*digitalocean*")
        || shExpMatch(url, "*wireguard*")
        || shExpMatch(url, "*youtube*")
        || shExpMatch(url, "*wikipedia*")
        || shExpMatch(url, "*onedrive*")
        || shExpMatch(url, "*github*")
        || shExpMatch(url, "*android.com*")
        || shExpMatch(url, "*stephenzone.sharepoint.com*")
        || shExpMatch(url, "*stephenzone-my.sharepoint.com*")
        || shExpMatch(url, "*storage.live.com*")
        || shExpMatch(url, "*ssw.live.com*")
        || shExpMatch(url, "*log.optimizely.com*")
        || shExpMatch(url, "*search.production.apac.trafficmanager.net*")
        || shExpMatch(url, "*search.production.emea.trafficmanager.net*")
        || shExpMatch(url, "*search.production.us.trafficmanager.net*")
        || shExpMatch(url, "*wns.windows.com*")
        || shExpMatch(url, "*admin.onedrive.com*")
        || shExpMatch(url, "*officeclient.microsoft.com*")
        || shExpMatch(url, "*g.live.com*")
        || shExpMatch(url, "*oneclient.sfx.ms*")
        || shExpMatch(url, "*sharepointonline.com*")
        || shExpMatch(url, "*cdn.sharepointonline.com*")
        || shExpMatch(url, "*privatecdn.sharepointonline.com*")
        || shExpMatch(url, "*publiccdn.sharepointonline.com*")
        || shExpMatch(url, "*spoprod-a.akamaihd.net*")
        || shExpMatch(url, "*static.sharepointonline.com*")
        || shExpMatch(url, "*prod.msocdn.com*")
        || shExpMatch(url, "*watson.telemetry.microsoft.com*")
        || shExpMatch(url, "*svc.ms*")
        || shExpMatch(url, "*stephenzone-files.sharepoint.com*")
        || shExpMatch(url, "*stephenzone-myfiles.sharepoint.com*")
        || shExpMatch(url, "*anaconda*")
        || shExpMatch(url, "*toomics.com*")
        // || shExpMatch(url, "*keywords*")
        // || shExpMatch(url, "*keywords*")

        || shExpMatch(url, "*google*")
    ) {
        return local_ssr; direct;
    }



    //默认直连
    // return renzhecloud_proxy; renzhecloud_socks; local_ssr; direct;
    return direct;

}

