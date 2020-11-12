

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

    if (hExpMatch(url, "*ip138*")
        || shExpMatch(url, "*google*")
    ) {
        return local_ssr; direct;
    }



    //默认直连
    // return renzhecloud_proxy; renzhecloud_socks; local_ssr; direct;
    return direct;

}

