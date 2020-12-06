

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

    if (shExpMatch(url, "*dropbox*")
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

        // for o365
        // Optimize Required
        || shExpMatch(url, "*stephenzone.sharepoint.com*")
        || shExpMatch(url, "*stephenzone-my.sharepoint.com*")
        || isInNet(host,"13.107.136.0","255.255.252.0") // 13.107.136.0/22
        || isInNet(host,"40.108.128.0","255.255.128.0") // 40.108.128.0/17
        || isInNet(host,"52.104.0.0","255.252.0.0") // 52.104.0.0/14
        || isInNet(host,"104.146.128.0","255.255.128.0") //104.146.128.0/17
        || isInNet(host,"150.171.40.0","255.255.252.0") //150.171.40.0/22
      

        // || isInNet(host,"0000","0000")

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

        // for Microsoft 365 Common and Office Online
        || shExpMatch(url, "*ajax.aspnetcdn.com*")
        || shExpMatch(url, "*r3.res.outlook.com*")
        || shExpMatch(url, "*spoprod-a.akamaihd.net*")
        || shExpMatch(url, "*api.microsoftstream.com*")
        || shExpMatch(url, "*notification.api.microsoftstream.com*")
        || shExpMatch(url, "*amp.azure.net*")
        || shExpMatch(url, "*api.microsoftstream.com*")
        || shExpMatch(url, "*s0.assets-yammer.com*")
        || shExpMatch(url, "*vortex.data.microsoft.com*")
        || shExpMatch(url, "*web.microsoftstream.com*")
        || shExpMatch(url, "*amsglob0cdnstream13.azureedge.net*")
        || shExpMatch(url, "*amsglob0cdnstream14.azureedge.net*")
        || shExpMatch(url, "*nps.onyx.azure.net*")
        || shExpMatch(url, "*azureedge.net*")
        || shExpMatch(url, "*media.azure.net*")
        || shExpMatch(url, "*streaming.mediaservices.windows.net*")
        || shExpMatch(url, "*keydelivery.mediaservices.windows.net*")
        || shExpMatch(url, "*online.office.com*")
        || shExpMatch(url, "*broadcast.officeapps.live.com*")
        || shExpMatch(url, "*excel.officeapps.live.com*")
        || shExpMatch(url, "*onenote.officeapps.live.com*")
        || shExpMatch(url, "*powerpoint.officeapps.live.com*")
        || shExpMatch(url, "*rtc.officeapps.live.com*")
        || shExpMatch(url, "*shared.officeapps.live.com*")
        || shExpMatch(url, "*view.officeapps.live.com*")
        || shExpMatch(url, "*visio.officeapps.live.com*")
        || shExpMatch(url, "*word-edit.officeapps.live.com*")
        || shExpMatch(url, "*office.live.com*")
        || isInNet(host,"13.107.6.171","255.255.255.255") // 13.107.6.171/32
        || isInNet(host,"13.107.140.6","255.255.255.255") // 13.107.140.6/32
        || isInNet(host,"52.108.0.0","255.252.0.0") // 52.108.0.0/14
        || isInNet(host,"52.238.106.116","255.255.255.255") // 52.238.106.116/32
        || isInNet(host,"52.244.37.168","255.255.255.255") // 52.244.37.168/32
        || isInNet(host,"52.244.203.72","255.255.255.255") // 52.244.203.72/32
        || isInNet(host,"52.244.207.172","255.255.255.255") // 52.244.207.172/32
        || isInNet(host,"52.244.223.198","255.255.255.255") // 52.244.223.198/32
        || isInNet(host,"52.247.150.191","255.255.255.255") // 52.247.150.191/32
        || shExpMatch(url, "*cdn.office.net*")
        || shExpMatch(url, "*contentstorage.osi.office.net*")
        || shExpMatch(url, "*onenote.com*")
        || shExpMatch(url, "*microsoft.com*")
        || shExpMatch(url, "*msecnd.net*")
        || shExpMatch(url, "*office.net*")
        || shExpMatch(url, "*cdn.onenote.net*")
        || shExpMatch(url, "*ad.atdmt.com*")
        || shExpMatch(url, "*s.ytimg.com*")
        || shExpMatch(url, "*www.youtube.com*") // why?
        || shExpMatch(url, "*ajax.aspnetcdn.com*")
        || shExpMatch(url, "*apis.live.net*")
        || shExpMatch(url, "*cdn.optimizely.com*")
        || shExpMatch(url, "*officeapps.live.com*")
        || shExpMatch(url, "*www.onedrive.com*")
        || shExpMatch(url, "*msftidentity.com*")
        || shExpMatch(url, "*msidentity.com*")
        || shExpMatch(url, "*account.activedirectory.windowsazure.com*")
        || shExpMatch(url, "*accounts.accesscontrol.windows.net*")
        || shExpMatch(url, "*adminwebservice.microsoftonline.com*")
        || shExpMatch(url, "*api.passwordreset.microsoftonline.com*")
        || shExpMatch(url, "*autologon.microsoftazuread-sso.com*")
        || shExpMatch(url, "*becws.microsoftonline.com*")
        || shExpMatch(url, "*clientconfig.microsoftonline-p.net*")
        || shExpMatch(url, "*companymanager.microsoftonline.com*")
        || shExpMatch(url, "*device.login.microsoftonline.com*")
        || shExpMatch(url, "*graph.microsoft.com*")
        || shExpMatch(url, "*graph.windows.net*")
        || shExpMatch(url, "*login.microsoft.com*")
        || shExpMatch(url, "*login.microsoftonline.com*")
        || shExpMatch(url, "*login.microsoftonline-p.com*")
        || shExpMatch(url, "*login.windows.net*")
        || shExpMatch(url, "*logincert.microsoftonline.com*")
        || shExpMatch(url, "*loginex.microsoftonline.com*")
        || shExpMatch(url, "*login-us.microsoftonline.com*")
        || shExpMatch(url, "*nexus.microsoftonline-p.com*")
        || shExpMatch(url, "*passwordreset.microsoftonline.com*")
        || shExpMatch(url, "*provisioningapi.microsoftonline.com*")
        || shExpMatch(url, "*hip.live.com*")
        || shExpMatch(url, "*microsoftonline.com*")
        || shExpMatch(url, "*microsoftonline-p.com*")
        || shExpMatch(url, "*msauth.net*")
        || shExpMatch(url, "*msauthimages.net*")
        || shExpMatch(url, "*msecnd.net*")
        || shExpMatch(url, "*msftauth.net*")
        || shExpMatch(url, "*msftauthimages.net*")
        || shExpMatch(url, "*phonefactor.net*")
        || shExpMatch(url, "*enterpriseregistration.windows.net*")
        || shExpMatch(url, "*management.azure.com*")
        || shExpMatch(url, "*policykeyservice.dc.ad.msft.net*")
        || shExpMatch(url, "*manage.office.com*")
        || shExpMatch(url, "*protection.office.com*")
        || shExpMatch(url, "*manage.office.com*")
        || shExpMatch(url, "*protection.office.com*")
        || shExpMatch(url, "*portal.cloudappsecurity.com*")
        || shExpMatch(url, "*account.office.net*")
        || shExpMatch(url, "*admin.microsoft.com*")
        || shExpMatch(url, "*home.office.com*")
        || shExpMatch(url, "*portal.office.com*")
        || shExpMatch(url, "*www.office.com*")
        || shExpMatch(url, "*suite.office.net*")
        || shExpMatch(url, "*blob.core.windows.net*")
        || shExpMatch(url, "*helpshift.com*")
        || shExpMatch(url, "*localytics.com*")
        || shExpMatch(url, "*analytics.localytics.com*")
        || shExpMatch(url, "*api.localytics.com*")
        || shExpMatch(url, "*connect.facebook.net*")
        || shExpMatch(url, "*firstpartyapps.oaspapps.com*")
        || shExpMatch(url, "*outlook.uservoice.com*")
        || shExpMatch(url, "*prod.firstpartyapps.oaspapps.com.akadns.net*")
        || shExpMatch(url, "*rink.hockeyapp.net*")
        || shExpMatch(url, "*sdk.hockeyapp.net*")
        || shExpMatch(url, "*telemetryservice.firstpartyapps.oaspapps.com*")
        || shExpMatch(url, "*web.localytics.com*")
        || shExpMatch(url, "*webanalytics.localytics.com*")
        || shExpMatch(url, "*wus-firstpartyapps.oaspapps.com*")
        || shExpMatch(url, "*aria.microsoft.com*")
        || shExpMatch(url, "*events.data.microsoft.com*")
        || shExpMatch(url, "*o365weve.com*")
        || shExpMatch(url, "*amp.azure.net*")
        || shExpMatch(url, "*appsforoffice.microsoft.com*")
        || shExpMatch(url, "*assets.onestore.ms*")
        || shExpMatch(url, "*auth.gfx.ms*")
        || shExpMatch(url, "*c1.microsoft.com*")
        || shExpMatch(url, "*contentstorage.osi.office.net*")
        || shExpMatch(url, "*dgps.support.microsoft.com*")
        || shExpMatch(url, "*docs.microsoft.com*")
        || shExpMatch(url, "*msdn.microsoft.com*")
        || shExpMatch(url, "*platform.linkedin.com*")
        || shExpMatch(url, "*prod.msocdn.com*")
        || shExpMatch(url, "*shellprod.msocdn.com*")
        || shExpMatch(url, "*support.content.office.net*")
        || shExpMatch(url, "*support.microsoft.com*")
        || shExpMatch(url, "*technet.microsoft.com*")
        || shExpMatch(url, "*videocontent.osi.office.net*")
        || shExpMatch(url, "*videoplayercdn.osi.office.net*")
        || shExpMatch(url, "*office365.com*")
        || shExpMatch(url, "*cloudapp.net*")
        || shExpMatch(url, "*aadrm.com*")
        || shExpMatch(url, "*azurerms.com*")
        || shExpMatch(url, "*informationprotection.azure.com*")
        || shExpMatch(url, "*ecn.dev.virtualearth.net*")
        || shExpMatch(url, "*informationprotection.hosting.portal.azure.net*")
        || shExpMatch(url, "*testconnectivity.microsoft.com*")
        || shExpMatch(url, "*hockeyapp.net*")
        || shExpMatch(url, "*sharepointonline.com*")
        || shExpMatch(url, "*cdn.forms.office.net*")
        || shExpMatch(url, "*dc.applicationinsights.microsoft.com*")
        || shExpMatch(url, "*dc.services.visualstudio.com*")
        || shExpMatch(url, "*forms.microsoft.com*")
        || shExpMatch(url, "*mem.gfx.ms*")
        || shExpMatch(url, "*office365servicehealthcommunications.cloudapp.net*")
        || shExpMatch(url, "*osiprod-cus-daffodil-signalr-00.service.signalr.net*")
        || shExpMatch(url, "*osiprod-neu-daffodil-signalr-00.service.signalr.net*")
        || shExpMatch(url, "*osiprod-weu-daffodil-signalr-00.service.signalr.net*")
        || shExpMatch(url, "*osiprod-wus-daffodil-signalr-00.service.signalr.net*")
        || shExpMatch(url, "*signup.microsoft.com*")
        || shExpMatch(url, "*staffhub.ms*")
        || shExpMatch(url, "*staffhub.uservoice.com*")
        || shExpMatch(url, "*staffhubweb.azureedge.net*")
        || shExpMatch(url, "*watson.telemetry.microsoft.com*")
        || shExpMatch(url, "*nexus.officeapps.live.com*")
        || shExpMatch(url, "*nexusrules.officeapps.live.com*")
        || shExpMatch(url, "*portal.microsoftonline.com*")
        || shExpMatch(url, "*microsoft.com*")
        || shExpMatch(url, "*msocdn.com*")
        || shExpMatch(url, "*office.net*")
        || shExpMatch(url, "*onmicrosoft.com*")
        || shExpMatch(url, "*o15.officeredir.microsoft.com*")
        || shExpMatch(url, "*ocsredir.officeapps.live.com*")
        || shExpMatch(url, "*officepreviewredir.microsoft.com*")
        || shExpMatch(url, "*officeredir.microsoft.com*")
        || shExpMatch(url, "*r.office.microsoft.com*")
        || shExpMatch(url, "*ocws.officeapps.live.com*")
        || shExpMatch(url, "*odc.officeapps.live.com*")
        || shExpMatch(url, "*roaming.officeapps.live.com*")
        || shExpMatch(url, "*activation.sls.microsoft.com*")
        || shExpMatch(url, "*crl.microsoft.com *")
        || shExpMatch(url, "*ols.officeapps.live.com*")
        || shExpMatch(url, "*office15client.microsoft.com*")
        || shExpMatch(url, "*officeclient.microsoft.com*")
        || shExpMatch(url, "*ocsa.officeapps.live.com*")
        || shExpMatch(url, "*insertmedia.bing.office.net*")
        || shExpMatch(url, "*go.microsoft.com*")
        || shExpMatch(url, "*support.office.com*")
        || shExpMatch(url, "*mrodevicemgr.officeapps.live.com*")
        || shExpMatch(url, "*ajax.aspnetcdn.com*")
        || shExpMatch(url, "*cdn.odc.officeapps.live.com*")
        || shExpMatch(url, "*officecdn.microsoft.com*")
        || shExpMatch(url, "*officecdn.microsoft.com.edgesuite.net*")
        || shExpMatch(url, "*virtualearth.net*")
        || shExpMatch(url, "*ajax.microsoft.com*")
        || shExpMatch(url, "*c.bing.net*")
        || shExpMatch(url, "*excelbingmap.firstpartyapps.oaspapps.com*")
        || shExpMatch(url, "*excelcs.officeapps.live.com*")
        || shExpMatch(url, "*ocos-office365-s2s.msedge.net*")
        || shExpMatch(url, "*omextemplates.content.office.net*")
        || shExpMatch(url, "*peoplegraph.firstpartyapps.oaspapps.com*")
		|| shExpMatch(url, "*pptcs.officeapps.live.com*")
        || shExpMatch(url, "*tse1.mm.bing.net*")
        || shExpMatch(url, "*uci.officeapps.live.com*")
        || shExpMatch(url, "*watson.microsoft.com*")
        || shExpMatch(url, "*wikipedia.firstpartyapps.oaspapps.com*")
        || shExpMatch(url, "*wordcs.officeapps.live.com*")
        || shExpMatch(url, "*www.bing.com*")
        || shExpMatch(url, "*acompli.net*")
        || shExpMatch(url, "*outlookmobile.com*")
        || shExpMatch(url, "*manage.microsoft.com*")
        || shExpMatch(url, "*api.office.com*")
        || shExpMatch(url, "*go.microsoft.com*")
        || shExpMatch(url, "*login.windows-ppe.net*")
        || shExpMatch(url, "*secure.aadcdn.microsoftonline-p.com*")
        || shExpMatch(url, "*vortex.data.microsoft.com*")
        || shExpMatch(url, "*account.live.com*")
        || shExpMatch(url, "*apis.live.net*")
        || shExpMatch(url, "*auth.gfx.ms*")
        || shExpMatch(url, "*login.live.com*")
        || shExpMatch(url, "*accounts.google.com*")
        || shExpMatch(url, "*mail.google.com*")
        || shExpMatch(url, "*www.googleapis.com*")
        || shExpMatch(url, "*bit.ly*")
        || shExpMatch(url, "*www.acompli.com*")
        || shExpMatch(url, "*play.google.com*")
        || shExpMatch(url, "*appex.bing.com*")
        || shExpMatch(url, "*appex-rf.msn.com*")
        || shExpMatch(url, "*itunes.apple.com*")
        || shExpMatch(url, "*c.bing.com*")
        || shExpMatch(url, "*c.live.com*")
        || shExpMatch(url, "*cl2.apple.com*")
        || shExpMatch(url, "*d.docs.live.net*")
        || shExpMatch(url, "*directory.services.live.com*")
		|| shExpMatch(url, "*docs.live.net*")
        || shExpMatch(url, "*en-us.appex-rf.msn.com*")
        || shExpMatch(url, "*foodanddrink.services.appex.bing.com*")
        || shExpMatch(url, "*odcsm.officeapps.live.com*")
        || shExpMatch(url, "*office.microsoft.com*")
        || shExpMatch(url, "*partnerservices.getmicrosoftkey.com*")
        || shExpMatch(url, "*roaming.officeapps.live.com*")
        || shExpMatch(url, "*sas.office.microsoft.com*")
        || shExpMatch(url, "*signup.live.com*")
        || shExpMatch(url, "*view.atdmt.com*")
        || shExpMatch(url, "*watson.telemetry.microsoft.com*")
        || shExpMatch(url, "*weather.tile.appex.bing.com*")
        || shExpMatch(url, "*account.live.com*")
        || shExpMatch(url, "*auth.gfx.ms*")
        || shExpMatch(url, "*c.bing.com*")
        || shExpMatch(url, "*c.live.com*")
        || shExpMatch(url, "*cl2.apple.com*")
        || shExpMatch(url, "*directory.services.live.com*")
        || shExpMatch(url, "*docs.live.net*")
        || shExpMatch(url, "*en-us.appex-rf.msn.com*")
        || shExpMatch(url, "*foodanddrink.services.appex.bing.com*")
        || shExpMatch(url, "*go.microsoft.com*")
        || shExpMatch(url, "*login.live.com*")
        || shExpMatch(url, "*office.microsoft.com*")
        || shExpMatch(url, "*p100-sandbox.itunes.apple.com*")
		|| shExpMatch(url, "*partnerservices.getmicrosoftkey.com*")
        || shExpMatch(url, "*roaming.officeapps.live.com*")
        || shExpMatch(url, "*sas.office.microsoft.com*")
        || shExpMatch(url, "*signup.live.com*")
        || shExpMatch(url, "*view.atdmt.com*")
        || shExpMatch(url, "*watson.telemetry.microsoft.com*")
        || shExpMatch(url, "*weather.tile.appex.bing.com*")
        || shExpMatch(url, "*yammer.com*")
        || shExpMatch(url, "*yammerusercontent.com*")
        || shExpMatch(url, "*assets-yammer.com*")
        || shExpMatch(url, "*ajax.aspnetcdn.com*")
        || shExpMatch(url, "*www.outlook.com*")
        || shExpMatch(url, "*eus-www.sway-cdn.com*")
        || shExpMatch(url, "*eus-www.sway-extensions.com*")
        || shExpMatch(url, "*wus-www.sway-cdn.com*")
        || shExpMatch(url, "*wus-www.sway-extensions.com*")
        || shExpMatch(url, "*www.google-analytics.com*")
        || shExpMatch(url, "*entrust.net*")
        || shExpMatch(url, "*geotrust.com*")
        || shExpMatch(url, "*omniroot.com*")
        || shExpMatch(url, "*public-trust.com*")
        || shExpMatch(url, "*symcb.com*")
        || shExpMatch(url, "*symcd.com*")
        || shExpMatch(url, "*verisign.com*")
        || shExpMatch(url, "*verisign.net*")
		|| shExpMatch(url, "*apps.identrust.com*")
        || shExpMatch(url, "*cacerts.digicert.com*")
        || shExpMatch(url, "*cert.int-x3.letsencrypt.org*")
        || shExpMatch(url, "*crl.globalsign.com*")
        || shExpMatch(url, "*crl.globalsign.net*")
        || shExpMatch(url, "*crl.identrust.com*")
        || shExpMatch(url, "*crl.microsoft.com*")
        || shExpMatch(url, "*crl3.digicert.com*")
        || shExpMatch(url, "*crl4.digicert.com*")
        || shExpMatch(url, "*isrg.trustid.ocsp.identrust.com*")
        || shExpMatch(url, "*mscrl.microsoft.com*")
        || shExpMatch(url, "*ocsp.digicert.com*")
        || shExpMatch(url, "*ocsp.globalsign.com*")
        || shExpMatch(url, "*ocsp.int-x3.letsencrypt.org*")
        || shExpMatch(url, "*ocsp.msocsp.com*")
        || shExpMatch(url, "*ocsp2.globalsign.com*")
        || shExpMatch(url, "*ocspx.digicert.com*")
        || shExpMatch(url, "*secure.globalsign.com*")
        || shExpMatch(url, "*www.digicert.com*")
        || shExpMatch(url, "*www.microsoft.com*")
        || shExpMatch(url, "*officespeech.platform.bing.com*")
        || shExpMatch(url, "*config.office.net*")
        || shExpMatch(url, "*manage.microsoft.com*")
        || shExpMatch(url, "*lpcres.delve.office.com*")
        || shExpMatch(url, "*office.com*")
		|| shExpMatch(url, "*cdnprod.myanalytics.microsoft.com*")
        || shExpMatch(url, "*myanalytics.microsoft.com*")
        || shExpMatch(url, "*myanalytics-gcc.microsoft.com*")
        || shExpMatch(url, "*workplaceanalytics.cdn.office.net*")
        || shExpMatch(url, "*workplaceanalytics.office.com*")
        || shExpMatch(url, "*officeconfig.msocdn.com*")
        || shExpMatch(url, "*microsoftusercontent.com*")
        || shExpMatch(url, "*azure-apim.net*")
        || shExpMatch(url, "*flow.microsoft.com*")
        || shExpMatch(url, "*powerapps.com*")
        || shExpMatch(url, "*activity.windows.com*")



        || isInNet(host,"20.190.128.0","255.255.192.0") // 20.190.128.0/18
        || isInNet(host,"40.126.0.0","255.255.192.0") // 40.126.0.0/18
        || isInNet(host,"13.80.125.22","255.255.255.255") // 13.80.125.22/32
        || isInNet(host,"13.91.91.243","255.255.255.255") // 13.91.91.243/32
        || isInNet(host,"13.107.6.156","255.255.255.254") // 13.107.6.156/31
        || isInNet(host,"13.107.7.190","255.255.255.254") // 13.107.7.190/31
        || isInNet(host,"13.107.9.156","255.255.255.254") // 13.107.9.156/31
        || isInNet(host,"40.81.156.154","255.255.255.255") // 40.81.156.154/32
        || isInNet(host,"40.90.218.198","255.255.255.255") // 40.90.218.198/32
        || isInNet(host,"52.108.0.0","255.252.0.0") // 52.108.0.0/14
        || isInNet(host,"52.174.56.180","255.255.255.255") // 52.174.56.180/32
        || isInNet(host,"52.183.75.62","255.255.255.255") // 52.183.75.62/32
        || isInNet(host,"52.184.165.82","255.255.255.255") // 52.184.165.82/32
        || isInNet(host,"104.42.230.91","255.255.255.255") // 104.42.230.91/32
        || isInNet(host,"157.55.145.0","255.255.255.128") // 157.55.145.0/25
        || isInNet(host,"157.55.155.0","255.255.255.128") // 157.55.155.0/25
        || isInNet(host,"157.55.227.192","255.255.255.192") // 157.55.227.192/26
        || isInNet(host,"13.80.125.22","255.255.255.255") // 13.80.125.22/32
        || isInNet(host,"13.91.91.243","255.255.255.255") // 13.91.91.243/32
        || isInNet(host,"13.107.6.156","255.255.255.254") // 13.107.6.156/31
        || isInNet(host,"13.107.7.190","255.255.255.254") // 13.107.7.190/31
        || isInNet(host,"13.107.9.156","255.255.255.254") // 13.107.9.156/31
        || isInNet(host,"40.81.156.154","255.255.255.255") // 40.81.156.154/32
        || isInNet(host,"40.90.218.198","255.255.255.255") // 40.90.218.198/32
        || isInNet(host,"52.108.0.0","255.252.0.0") // 52.108.0.0/14
        || isInNet(host,"52.174.56.180","255.255.255.255") // 52.174.56.180/32
        || isInNet(host,"52.183.75.62","255.255.255.255") // 52.183.75.62/32
        || isInNet(host,"52.184.165.82","255.255.255.255") // 52.184.165.82/32
        || isInNet(host,"104.42.230.91","255.255.255.255") // 104.42.230.91/32
        || isInNet(host,"157.55.145.0","255.255.255.128") // 157.55.145.0/25
        || isInNet(host,"157.55.155.0","255.255.255.128") // 157.55.155.0/25
        || isInNet(host,"157.55.227.192","255.255.255.192") // 157.55.227.192/26
        || isInNet(host,"13.107.6.171","255.255.255.255") // 13.107.6.171/32
        || isInNet(host,"13.107.140.6","255.255.255.255") // 13.107.140.6/32
        || isInNet(host,"52.108.0.0","255.252.0.0") // 52.108.0.0/14
        || isInNet(host,"52.238.106.116","255.255.255.255") // 52.238.106.116/32
        || isInNet(host,"52.244.37.168","255.255.255.255") // 52.244.37.168/32
        || isInNet(host,"52.244.203.72","255.255.255.255") // 52.244.203.72/32
        || isInNet(host,"52.244.207.172","255.255.255.255") // 52.244.207.172/32
        || isInNet(host,"52.244.223.198","255.255.255.255") // 52.244.223.198/32
        || isInNet(host,"52.247.150.191","255.255.255.255") // 52.247.150.191/32

        // || isInNet(host,"ipipip","mask") // 
        // || isInNet(host,"ipipip","mask") // 
        // || isInNet(host,"ipipip","mask") // 


        // || shExpMatch(url, "*test*")
        // || shExpMatch(url, "*test*")
        // || shExpMatch(url, "*test*")
        // || shExpMatch(url, "*test*")
        // || shExpMatch(url, "*test*")
        // || shExpMatch(url, "*test*")
        //end for o365


        || shExpMatch(url, "*anaconda*")
        || shExpMatch(url, "*toomics.com*")
        // || shExpMatch(url, "*keywords*")
        // || shExpMatch(url, "*keywords*")
        // || isInNet(host,"0000","0000")
        || shExpMatch(url, "*google*")
    ) {
        return local_ssr; direct;
    }



    //默认直连
    // return renzhecloud_proxy; renzhecloud_socks; local_ssr; direct;
    return direct;

}

