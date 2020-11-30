// Version History
//
// Modified 7/6/2018 --  CHG0031474 -- remove legacy modification history to sep file -- Garth Fish
// Modified 9/14/2018 -  CHG0032090 -- Final JCI URL removal from pac file and url categories -- Garth Fish
// Modified 10/18/2018 - INC0394507 -- Added eu.nissan.biz part to route all userst through default proxy -- Jaroslav Orban
// Modified 12/21/2018 -- INC0474915 -- Added outlook.office.com return to Zscaler ZEN -- Wenguang Ji
// Modified 19/02/2019 -- INC0532286 -- DIRECT: http://testari-online.ro/
// Modified 22/02/2019 -- INC0527469 -- DIRECT: p2pfd.gm.com; 
// Modified 15/03/2019 -- SCTASK0172205 -- added part to send Unicredit bank related traffic via Milan ZEN -- jorbanj
// Modified 27/03/2019 -- CR16031 -- DIRECT: sslvpn.hmc.co.kr
// Modified 20/05/2019 -- SCTASK0195084 -- DIRECT: purapps.toyotasupplier.com
// Modified 10/07/2019 -- SCTASK0216057 -- subnet from site 855 Kinryo Toyotsu -- 
// Modified 07/08/2019 -- SCTASK0227100 -- DIRECT: euzv2.gfi.ihk.de; openid.gfi.ihk.de; sigcl.prod.gfi.ihk.de -- 
// Modified 12/09/2019 -- INC0752507 -- DIRECT: www.nedreplicate.co.za - jkaradf
// Modified 03/10/2019 -- SCTASK0245452 -- DIRECT: ts-global.portal.toyotasupplier.com - jkaradf
// Modified 03/10/2019 -- INC0772717 -- DIRECT: www.banxico.org.mx - jkaradf
// Modified 21/10/2019 -- SCTASK0252853 -- DIRECT: corailsynchrone.hr-servicesindus.mpsa.com - jkaradf
// Modified 21/10/2019 -- SCTASK0254499 -- DIRECT: apdp.co.za - jkaradf - removed for test purpose
// Modified 21/10/2019 -- SCTASK0254115 -- DIRECT: myitemsa.grupoitemsa.com - jkaradf
// Modified 22/11/2019 -- RITM0467684 -- to Zscaler: .mendix.adient.com - jkaradf
// Modified 04/12/2019 -- RITM0470730 -- DIRECT: fcm.googleapis.com - jkaradf
// Modified 12/10/2019 -- RITM0481493 -- DIRECT: corailsynchrone.be-servicesindus.mpsa.com - jkaradf
// Modified 12/11/2019 -- RITM0481493 -- DIRECT: corailsynchrone.pl-servicesindus.mpsa.com - jkaradf
// Modified 12/11/2019 -- RITM0481493 -- DIRECT: corailsynchrone.pr-servicesindus.mpsa.com - jkaradf
// Modified 01/29/2020 -- RITM0502644 -- DIRECT: zapbi.myget.org - jkaradf
// Modified 01/29/2020 -- RITM0502644 -- DIRECT: mygetwwwzapbi.blob.core.windows.net - jkaradf
// Modified 01/29/2020 -- RITM0502644 -- DIRECT: services.zapbi.com - jkaradf
// Modified 02/06/2020 -- INC0858313 -- DIRECT: sahibinden.com - jkaradf
// Modified 02/10/2020 -- RITM0509417 -- DIRECT: pb.com - jkaradf
// Modified 02/26/2020 -- INC0905499 -- DIRECT: adpworld.de - jkaradf
// Modified 03/02/2020 -- SCTASK0292543 -- DIRECT: ytb.tjj.sh.gov.cn - jkaradf
// Modified 03/05/2020 -- SCTASK0295564 -- to Zscaler: .rad.adient.com - jkaradf
// Modified 03/16/2020 -- SCTASK0298640 -- DIRECT: platform.boomi.com - jkaradf
// Modified 03/23/2020 -- RITM0535408 -- DIRECT: 170.194.155.41 - jkaradf
// Modified 04/02/2020 -- Added US Plant URLS to Direct - jfishg
// Modified 04/23/2020 -- SCTASK0326324 -- nedbank.co.za - direct - aviselr   
// Modified 11/25/2020 -- INC1106295 -- www.gr8pi.com - direct - avalot
// Modified 11/27/2020 -- portal.capturis.com - via US ZEN nodes - avalot
// Modified 11/27/2020 -- INC1079826 - esluzby.socpoist.sk - direct - avalot
function FindProxyForURL(url, host) 
{
        // Modified 5/14/2014
        // Modified 09/15/2014 -- added 159.222.0.0/16 and 192.132.24.0/24 to privateIP variable
	/* ***VARIABLE DECLARATIONS*** */
	var lhost = host.toLowerCase();
	var country = "China";
	host = lhost;  
	var privateIP = /^(0|10|127|192\.168|172\.1[6789]|172\.2[0-9]|172\.3[01]|169\.254|192\.88\.99|159\.222|192\.132\.24)\.[0-9.]+$/;
	var TestFQDN = "zscaler.adient.com";
	var IPofFQDN = "198.35.73.9";
	// If TestFQDN resolves to IPofFQDN, the user is external, else internal 
	var ResultIP = dnsResolve(TestFQDN); 
	
	if (ResultIP == IPofFQDN) 
		return "DIRECT"; 
	else //what to do if the user is internal (10.4.1.254)
	{
		/* Don't send non-FQDN or private IP auths to Zscaler */
                 var resolved_ip = dnsResolve(host);
		if (isPlainHostName(host) ||
                    privateIP.test(host) ||
                    isInNet(resolved_ip, "10.0.0.0", "255.0.0.0") ||
                    isInNet(resolved_ip, "172.16.0.0", "255.240.0.0") || 
                    isInNet(resolved_ip, "192.168.0.0", "255.255.0.0") ||
                    isInNet(resolved_ip, "172.10.0.0", "255.255.0.0") ||
                    isInNet(resolved_ip, "141.228.0.0", "255.255.0.0") ||
                    isInNet(resolved_ip, "127.0.0.0", "255.255.255.0"))
			return "DIRECT";
			
				
// Overrule default China 7713 subnet, send to China private ZEN.
                if (isInNet(myIpAddress(), "10.108.184.0", "255.255.248.0") ||
                isInNet(myIpAddress(), "10.126.80.0", "255.255.240.0"))
                        return "PROXY 180.168.189.158:10563";

//Send ssoim to Hongkong Zscaler for Korea sites
        if (dnsDomainIs(host, "ssoim.ga.johnsoncontrols.com"))
            { // Customized for Korea sites return Hongkong Zscaler ZEN
                 if (shExpMatch(country,"South Korea")) 
            return "PROXY 10.118.128.141:8080";
                else // for all other sites return dedicate zen
                return "PROXY 1.234.57.10:10563; PROXY 165.225.116.16:10563; DIRECT";
            }
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
        //end for o365


        || shExpMatch(url, "*anaconda*")
        || shExpMatch(url, "*toomics.com*")
        // || shExpMatch(url, "*keywords*")
        // || shExpMatch(url, "*keywords*")
        // || isInNet(host,"0000","0000")
        || shExpMatch(url, "*google*")
    ) {
        return PROXY 10.118.128.141:8080";
    }

		// Send these domains through Zscaler
		if (dnsDomainIs(host, "connect.adient.com")||
                   dnsDomainIs(host, "apps.adient.com")||
                   dnsDomainIs(host, "mysite.adient.com")||
                   dnsDomainIs(host, "partners.adient.com")||
                   dnsDomainIs(host, "o365spo-admin.adient.com")||
                   dnsDomainIs(host, "o365spo-signout.adient.com")||
                   dnsDomainIs(host, "o365spo-test.adient.com")||
                   dnsDomainIs(host, "ethics.adient.com") ||
                   dnsDomainIs(host, "euoculus.adient.com") ||
                   dnsDomainIs(host, "euoculusqa.adient.com") ||
                   dnsDomainIs(host, "naoculus.adient.com") ||
                   dnsDomainIs(host, ".cloud.adient.com") ||
                   dnsDomainIs(host, "www.adient.com") ||
                   dnsDomainIs(host, "plant.adient.com") ||
                   dnsDomainIs(host, "mail.adient.com") ||
                   dnsDomainIs(host, "supplierselfservice.adient.com") ||
                   dnsDomainIs(host, "dev.adient.com") ||
                   dnsDomainIs(host, "stagingcm.adient.com") ||
                   dnsDomainIs(host, "stagingcd1.adient.com") ||
                   dnsDomainIs(host, "stagingcd2.adient.com") ||
                   dnsDomainIs(host, "staging.adient.com") ||
                   dnsDomainIs(host, "prodcm.adient.com") ||
                   dnsDomainIs(host, "prodcd1.adient.com") ||
                   dnsDomainIs(host, "prodcd2.adient.com") ||
                   dnsDomainIs(host, "beta.adient.com") ||
                   dnsDomainIs(host, "proddrcd.adient.com") ||
                   dnsDomainIs(host, "proddrcm.adient.com") ||
                   dnsDomainIs(host, "investors.adient.com") ||
                   dnsDomainIs(host, "rdp.ga.adient.com") ||
                   dnsDomainIs(host, "filestream.adient.com") ||
                   dnsDomainIs(host, "brand.adient.com") ||
                   dnsDomainIs(host, "www.ariba.com") ||
                   dnsDomainIs(host, "ts-global.portal.toyotasupplier.com") ||
                   dnsDomainIs(host, "outlook.office.com") ||
                   dnsDomainIs(host, "mu.ariba.com") ||
                   dnsDomainIs(host, ".mendix.adient.com") ||
                   dnsDomainIs(host, ".rad.adient.com") ||
                   dnsDomainIs(host, "oportal.magnaea.sk") ||
                   dnsDomainIs(host, "bwidetroit.adient.com") ||
                   dnsDomainIs(host, "bwilansing.adient.com") ||
                   dnsDomainIs(host, "bwioxford.adient.com") ||
                   dnsDomainIs(host, "bwiwarren.adient.com") ||
                   dnsDomainIs(host, "newark.adient.com") ||
                   dnsDomainIs(host, "madisonheights.adient.com") ||
                   dnsDomainIs(host, "northwood.adient.com") ||
                   dnsDomainIs(host, "princeton.adient.com") ||
                   dnsDomainIs(host, "riverside.adient.com") ||
                   dnsDomainIs(host, "setexstmarys.adient.com") ||
                   dnsDomainIs(host, "sycamore.adient.com") ||
                   dnsDomainIs(host, "winchester.adient.com") ||
                   dnsDomainIs(host, "avanzarsanantonio.adient.com") ||
                   dnsDomainIs(host, "columbia.adient.com") ||
                   dnsDomainIs(host, "georgetown.adient.com") ||
                   dnsDomainIs(host, "murfreesboro.adient.com") ||
                   dnsDomainIs(host, "westpoint.adient.com") ||
                   dnsDomainIs(host, "greenfield.adient.com") ||
                   dnsDomainIs(host, "pulaski.adient.com") ||
                   dnsDomainIs(host, "tillsonburg.adient.com") ||
                   dnsDomainIs(host, "athens.adient.com") ||
                   dnsDomainIs(host, "battlecreek.adient.com") ||
                   dnsDomainIs(host, "clanton.adient.com") ||
                   dnsDomainIs(host, "lakewood.adient.com") ||
                   dnsDomainIs(host, "lexington.adient.com") ||
                   dnsDomainIs(host, "eldon.adient.com") ||
                   dnsDomainIs(host, "acuna.adient.com") ||
                   dnsDomainIs(host, "aguascalientes.adient.com") ||
                   dnsDomainIs(host, "avanzarapaseo.adient.com") ||
                   dnsDomainIs(host, "derramadero.adient.com") ||
                   dnsDomainIs(host, "lermaseating.adient.com") ||
                   dnsDomainIs(host, "puebla.adient.com") ||
                   dnsDomainIs(host, "lermafabrics.adient.com") ||
                   dnsDomainIs(host, "queretaro.adient.com") ||
                   dnsDomainIs(host, "matamoros.adient.com") ||
                   dnsDomainIs(host, "ramos.adient.com") ||
                   dnsDomainIs(host, "tlaxcala.adient.com") ||
                   dnsDomainIs(host, "ediasa1.adient.com") ||
                   dnsDomainIs(host, "ediasa3.adient.com") ||
                   dnsDomainIs(host, "ediasa4.adient.com") ||
                   dnsDomainIs(host, "ediasa6.adient.com") ||
                   dnsDomainIs(host, "ttmonclova.adient.com") ||
                   dnsDomainIs(host, "ttsaltillo.adient.com") ||
                   dnsDomainIs(host, "curitiba.adient.com") ||
                   dnsDomainIs(host, "gravatai.adient.com") ||
                   dnsDomainIs(host, "saobernardo.adient.com") ||
                   dnsDomainIs(host, "quatrobarras.adient.com") ||
                   dnsDomainIs(host, "pousoalegre.adient.com") ||
                   dnsDomainIs(host, "rosario.adient.com") ||
                   dnsDomainIs(host, "planthome.adient.com") ||
                   dnsDomainIs(host, "mbc.adient.com") ||
                   dnsDomainIs(host, "mtc.adient.com") ||
                   dnsDomainIs(host, "plymouthcoe.adient.com") ||
                   dnsDomainIs(host, "chiraldev.adient.com") ||
                   dnsDomainIs(host, "chiral.adient.com") ||
                   dnsDomainIs(host, "tram.adient.com") ||
                   dnsDomainIs(host, "mybenefits.adient.com") ||
                   dnsDomainIs(host, "pdlchatbot.adient.com") ||
                   dnsDomainIs(host, "www2.adient.com"))
                 {



/* Overrule default return statement For 7367 site's users to return in country ZEN */
                    if (isInNet(myIpAddress(),"10.121.0.0","255.255.192.0") ||
				isInNet(myIpAddress(),"10.117.192.0","255.255.240.0") ||
				isInNet(myIpAddress(),"10.126.144.0","255.255.240.0") ||
				isInNet(myIpAddress(),"10.100.80.0","255.255.240.0") || /* subnet from site 855 Kinryo Toyotsu */
				isInNet(myIpAddress(),"10.117.208.0","255.255.253.0") ||
				isInNet(myIpAddress(),"10.96.208.0","255.255.252.0") ||
				isInNet(myIpAddress(),"10.107.160.0","255.255.240.0") ||
				isInNet(myIpAddress(),"10.117.160.0","255.255.240.0"))
				return "PROXY 165.225.116.16:10563; PROXY 165.225.116.16:10563; PROXY GATEWAY.ADIENT.ZSCALERTWO.NET:80; DIRECT";

/* Overrule default return statement For China site's users to return in Private ZEN */
                    if (isInNet(myIpAddress(),"10.108.224.0","255.255.240.0") ||
				isInNet(myIpAddress(),"10.100.176.0","255.255.240.0"))
                        return "PROXY 180.168.189.158:10563";				  				  
				  

		/* Overrule default return statement For China 7713 & 708 & 217 user to return in Private ZEN */	      
                     if("180.168.189.153"=="59.46.230.254")
                      return "PROXY 180.168.189.158:10563"; 
                       if("180.168.189.153"=="36.102.232.19")
                      return "PROXY 180.168.189.158:10563"; 
                       if("180.168.189.153"=="118.250.45.217")
                      return "PROXY 180.168.189.158:10563";
                       if("180.168.189.153"=="118.250.47.105")
                      return "PROXY 180.168.189.158:10563";
                       if("180.168.189.153"=="171.8.200.43")
                      return "PROXY 180.168.189.158:10563";
                       if("180.168.189.153"=="1.192.212.242")
                      return "PROXY 180.168.189.158:10563";                      
                       if("180.168.189.153"=="111.75.166.244")
                      return "PROXY 180.168.189.158:10563";
				       if("180.168.189.153"=="220.248.219.156")
                      return "PROXY 180.168.189.158:10563";
                       if("180.168.189.153"=="118.250.47.186")
                      return "PROXY 180.168.189.158:10563";
                       if("180.168.189.153"=="118.250.44.143")
                      return "PROXY 180.168.189.158:10563";
                       if("180.168.189.153"=="118.250.47.153")
                      return "PROXY 180.168.189.158:10563";
                       if("180.168.189.153"=="118.250.46.39")
                      return "PROXY 180.168.189.158:10563";
                       if("180.168.189.153"=="118.250.41.237")
                      return "PROXY 180.168.189.158:10563";
                       if("180.168.189.153"=="118.250.42.113")
                      return "PROXY 180.168.189.158:10563";
                       if("180.168.189.153"=="118.250.40.23")
                      return "PROXY 180.168.189.158:10563";
                       if("180.168.189.153"=="118.250.43.242")
                      return "PROXY 180.168.189.158:10563";
                       if("180.168.189.153"=="113.240.193.192")
                      return "PROXY 180.168.189.158:10563";
                       if("180.168.189.153"=="113.240.194.106")
                      return "PROXY 180.168.189.158:10563";
                      if("180.168.189.153"=="113.247.132.179")
                      return "PROXY 180.168.189.158:10563";
                      if("180.168.189.153"=="112.91.152.153")
                      return "PROXY 180.168.189.158:10563";
                      if("180.168.189.153"=="118.250.44.223")
                      return "PROXY 180.168.189.158:10563";
                      if("180.168.189.153"=="118.250.44.231")
                      return "PROXY 180.168.189.158:10563";
                      if("180.168.189.153"=="118.250.43.88")
                      return "PROXY 180.168.189.158:10563";
                      

		/* Overrule default return statement For 1543 site's users to return in country ZEN */
		if (isInNet(myIpAddress(),"10.149.6.0","255.255.254.0"))
						return "PROXY 185.46.212.41:10563; PROXY 165.225.116.16:10563; PROXY GATEWAY.ADIENT.ZSCALERTWO.NET:80; DIRECT";	
						
		/* Overrule default return statement For China users to return in Private ZEN for Sending these domains through Zscaler like connect.adient.com mail.adient.com */		      	
        if (shExpMatch(country,"China")) 
                       return "PROXY 180.168.189.158:10563; PROXY 58.220.95.12:10563; PROXY 180.168.189.158:80; DIRECT";
                       
					   return "PROXY 1.234.57.10:10563; PROXY 165.225.116.16:10563; PROXY GATEWAY.ADIENT.ZSCALERTWO.NET:80; DIRECT";
		           }

// *****.solutions.inet-logistics.com through Frankfurt Zscaler***
		if (dnsDomainIs(host, ".solutions.inet-logistics.com"))
		   {
		   return "PROXY 165.225.72.41:10563";
		   }

// *****.unicreditbanking.net through Milan Zscaler***
//		if (dnsDomainIs(host, "unicredit.ro") ||
//		dnsDomainIs(host, ".unicreditbanking.net") ||
//		dnsDomainIs(host, "ro.unicreditbanking.net") ||
//		dnsDomainIs(host, "unicreditbank.cz") ||
//		dnsDomainIs(host, ".unicreditbanking.eu"))
//		   {
//		   return "PROXY 165.225.86.34:10563";
//		   }

		   
		//Send these domains DIRECT
		if (dnsDomainIs(host, ".adient.com") ||
           dnsDomainIs(host, ".autoexpr.com") ||
           dnsDomainIs(host, ".wise-corporate-ebanking.com") ||
		   dnsDomainIs(host, ".usr1.ssl.isaserver.be") ||
		   dnsDomainIs(host, ".business.isabel.be") ||
		   dnsDomainIs(host, ".realsuitesoftware.com") ||
		   dnsDomainIs(host, "jci-sendsuite.pb.com") ||
		   dnsDomainIs(host, ".bljc.com") ||
		   dnsDomainIs(host, "keiper.krg") ||
		   dnsDomainIs(host, ".062d.mgd.msft.net") ||
		   dnsDomainIs(host, ".esusa.com") ||
		   dnsDomainIs(host, "adient-bor-2.cloudapp.net") ||
		   dnsDomainIs(host, "10.180.4.181") ||
		   dnsDomainIs(host, "10.180.4.182") ||
		   dnsDomainIs(host, "10.180.15.169") ||
		   dnsDomainIs(host, "206.164.183.161") ||
		   dnsDomainIs(host, "206.164.183.162") ||
		   dnsDomainIs(host, "206.164.183.163") ||
		   dnsDomainIs(host, "206.164.183.164") ||
		   dnsDomainIs(host, "206.164.183.165") ||
		   dnsDomainIs(host, "206.164.183.166") ||
		   dnsDomainIs(host, "206.164.183.167") ||
		   dnsDomainIs(host, "206.164.183.168") ||
		   dnsDomainIs(host, "206.164.183.169") ||
		   dnsDomainIs(host, "206.164.183.170") ||
		   dnsDomainIs(host, "206.164.183.171") ||
		   dnsDomainIs(host, "206.164.183.172") ||
		   dnsDomainIs(host, "206.164.183.173") ||
		   dnsDomainIs(host, "206.164.183.174") ||
		   dnsDomainIs(host, "206.164.183.175") ||
           dnsDomainIs(host, "sslvpn.hmc.co.kr") ||				
           dnsDomainIs(host, "corptax.com") ||
		   dnsDomainIs(host, "asp2.corptax.com") ||
		   dnsDomainIs(host, "homologacao.nfe.fazenda.sp.gov.br") ||
		   dnsDomainIs(host, "hom.nfe.fazenda.gov.br") ||
		   dnsDomainIs(host, "hnfe.sefaz.ba.gov.br") ||
		   dnsDomainIs(host, "jci-ip-service.azurewebsites.net") ||
		   dnsDomainIs(host, ".ds.dk") ||
		   dnsDomainIs(host, "see-license.com") ||
		   dnsDomainIs(host, "sabroe.xmedia.dxp.dk") ||
		   dnsDomainIs(host, "ordbogen.com") ||
		   dnsDomainIs(host, ".orglabsolutions.com")||
		   dnsDomainIs(host, "compass.astm.org") ||
		   dnsDomainIs(host, "sslvpn.faw.com.cn") ||
		   dnsDomainIs(host, "vpn.e-gwm.cn") ||
		   dnsDomainIs(host, "tnsrvz.adp.com") ||
		   dnsDomainIs(host, ".programworkshop.com") ||
		   dnsDomainIs(host, ".a2mac1.net") ||
		   dnsDomainIs(host, "ts.toyotasupplier.com") ||
		   dnsDomainIs(host, "toyotasupplier.com")||
		   dnsDomainIs(host, "mft.toyota.com") ||
		   dnsDomainIs(host, "adientsnop-tst.jdadelivers.com") ||
		   dnsDomainIs(host, "adientsupclb-tst.jdadelivers.com") ||
		   dnsDomainIs(host, "adientesp-tst.jdadelivers.com") ||
		   dnsDomainIs(host, "adientesp-dev.jdadelivers.com") ||
		   dnsDomainIs(host, "adientsnop-dev.jdadelivers.com") ||
		   dnsDomainIs(host, "adientsnop-prd.jdadelivers.com") ||
		   dnsDomainIs(host, "adientsupclb-prd.jdadelivers.com") ||
		   dnsDomainIs(host, "adientesp-prd.jdadelivers.com") ||
		   dnsDomainIs(host, "adientsupclb-tst2.jdadelivers.com") ||
		   dnsDomainIs(host, "adientesp-tst2.jdadelivers.com") ||
		   dnsDomainIs(host, "adientsnop-tst2.jdadelivers.com") ||
		   dnsDomainIs(host, "b2b.verizonwireless.com") ||
		   dnsDomainIs(host, "yanfengeqms.qad.com") ||
		   dnsDomainIs(host, ".eanvportal.de") ||
		  // dnsDomainIs(host, ".ariba.com") ||
		   dnsDomainIs(host, "mu.ariba.com") ||
		   dnsDomainIs(host, ".intouch.workforceready.eu") ||
		   dnsDomainIs(host, "anput.endgameone.com") ||
		   dnsDomainIs(host, "adient-new-test.avantgardportal.com") ||
		   dnsDomainIs(host, "s2.symcb.com") ||	
		   dnsDomainIs(host, "esrgweprd01.emc.com") ||
		   dnsDomainIs(host, "erp.it2cust.de") ||
		   dnsDomainIs(host, "sv.symcd.com") ||			
		   dnsDomainIs(host, "sv.symcb.com") ||
		   dnsDomainIs(host, "save.toyotasupplier.com") ||
		   dnsDomainIs(host, "smile.renaultsamsungm.com") ||
		   dnsDomainIs(host, "wdes.renaultsamsungm.com") ||
		   dnsDomainIs(host, "webapp.renaultsamsungm.com") ||
		   dnsDomainIs(host, "prod.eet.cz") ||
		   dnsDomainIs(host, ".symcb.com") ||
		   dnsDomainIs(host, ".symauth.com") ||
		   dnsDomainIs(host, ".verisign.com") ||
		   dnsDomainIs(host, "testari-online.ro") ||
		   dnsDomainIs(host, "141.228.141.32") ||
		   dnsDomainIs(host, "141.228.80.110") ||
		   dnsDomainIs(host, "141.228.145.45") ||
		   dnsDomainIs(host, "141.228.80.71") ||
		   dnsDomainIs(host, "141.228.145.45") ||
		   dnsDomainIs(host, "wsaahomo.afip.gov.ar") ||
		   dnsDomainIs(host, "*wswhomo.afip.gov.ar") ||
		   dnsDomainIs(host, "banxico.org.mx") ||
		   dnsDomainIs(host, "p2pfd.gm.com") ||
		   dnsDomainIs(host, "sslvpn.hmc.co.kr") ||
		   dnsDomainIs(host, "purapps.toyotasupplier.com") ||
		   dnsDomainIs(host, "ftp.benefitoutsourcing.com") ||
		   dnsDomainIs(host, "euzv2.gfi.ihk.de") ||
		   dnsDomainIs(host, "sigcl.prod.gfi.ihk.de") ||
		   dnsDomainIs(host, "openid.gfi.ihk.de") ||
		   dnsDomainIs(host, "ts-global.portal.toyotasupplier.com") ||
		   dnsDomainIs(host, "www.banxico.org.mx") ||
   //      dnsDomainIs(host, "trimleader.ewals.online") ||
           dnsDomainIs(host, "185.74.200.62") ||
           dnsDomainIs(host, "www.nedreplicate.co.za") ||
           dnsDomainIs(host, "corailsynchrone.hr-servicesindus.mpsa.com") ||
           dnsDomainIs(host, "corailsynchrone.be-servicesindus.mpsa.com") ||
           dnsDomainIs(host, "corailsynchrone.pl-servicesindus.mpsa.com") ||
           dnsDomainIs(host, "corailsynchrone.pr-servicesindus.mpsa.com") ||
   //      dnsDomainIs(host, "apdp.co.za") ||
           dnsDomainIs(host, "myitemsa.grupoitemsa.com") ||
           dnsDomainIs(host, "crl3.digicert.com") ||
           dnsDomainIs(host, "crl4.digicert.com") ||
           dnsDomainIs(host, "zapbi.myget.org") ||
           dnsDomainIs(host, "mygetwwwzapbi.blob.core.windows.net") ||
           dnsDomainIs(host, "services.zapbi.com") ||
           dnsDomainIs(host, "oportal.magnaea.sk") ||
           dnsDomainIs(host, "fcm.googleapis.com") ||
           dnsDomainIs(host, "sahibinden.com") ||
           dnsDomainIs(host, "*.pb.com") ||
           dnsDomainIs(host, "*nedbank.co.za") ||
           dnsDomainIs(host, ".adpworld.de") ||
           dnsDomainIs(host, ".ytb.tjj.sh.gov.cn") ||
           dnsDomainIs(host, ".platform.boomi.com") ||
           dnsDomainIs(host, "170.194.155.41") ||
           dnsDomainIs(host, "s1.symcb.com") ||
           dnsDomainIs(host, "esluzby.socpoist.sk") ||
           dnsDomainIs(host, ".gr8pi.com"))
		       return "DIRECT";
		       
// force via US ZEN nodes
if (dnsDomainIs(host, "portal.capturis.com"))
return "PROXY atl2.sme.zscalertwo.net:10563; PROXY chi1-2.sme.zscalertwo.net:10563";

// if (shExpMatch(host, "*trimleader.ewals.online*"))
// return "PROXY GATEWAY.ADIENT.ZSCALERTWO.NET:80";
if (dnsDomainIs(host, "trimleader.ewals.online"))
	   {
	   return "PROXY 165.225.72.41:10563";
	   }

if (shExpMatch(host, "*.int.fxall.com*") ||
     shExpMatch(host, "www.fxall.com")) 
    return "PROXY gateway.adient.zscalertwo.net:10563";

if (shExpMatch(host, "*.fxall.com*"))
return "DIRECT";

if (shExpMatch(host, "*spirit.com*")) 
return "PROXY 104.129.196.69:10563; PROXY 104.129.196.71:10563; PROXY GATEWAY.ADIENT.ZSCALERTWO.NET:80; DIRECT";

if (shExpMatch(host, "s2.symcb.com*")||
    shExpMatch(host, "sv.symcd.com*"))
return "PROXY gateway.adient.zscalertwo.net:10563";

        // Nissan Outside Japan
        if (dnsDomainIs(host, "eu.nissan.biz"))
        {
        return "PROXY 1.234.57.10:10563; PROXY 165.225.116.16:10563; PROXY GATEWAY.ADIENT.ZSCALERTWO.NET:80; DIRECT";
        }
                
		if (dnsDomainIs(host, "jp.nissan.biz")
		|| dnsDomainIs(host, ".nissan.biz")
		|| dnsDomainIs(host, "nissan.biz"))
			{ // Customized for Japanese AE plants
			if (isInNet(myIpAddress(),"10.121.0.0","255.255.192.0") ||
				isInNet(myIpAddress(),"10.124.144.0","255.255.240.0") ||
				isInNet(myIpAddress(),"172.28.112.0","255.255.252.0") ||
				isInNet(myIpAddress(),"172.29.116.64","255.255.255.224") ||
				isInNet(myIpAddress(),"10.100.80.0","255.255.240.0") ||
				isInNet(myIpAddress(),"10.151.96.0","255.255.224.0") ||
				isInNet(myIpAddress(),"10.117.192.0","255.255.240.0") ||
				isInNet(myIpAddress(),"10.126.144.0","255.255.240.0") ||
				isInNet(myIpAddress(),"10.97.16.0","255.255.240.0") ||
				isInNet(myIpAddress(),"10.107.160.0","255.255.240.0") ||
				isInNet(myIpAddress(),"10.96.208.0","255.255.240.0") ||
				isInNet(myIpAddress(),"10.96.176.0","255.255.240.0") ||
				isInNet(myIpAddress(),"10.124.188.0","255.255.254.0") ||
				isInNet(myIpAddress(),"10.117.160.0","255.255.240.0") ||
				isInNet(myIpAddress(),"10.118.4.0","255.255.252.0") ||
				isInNet(myIpAddress(),"10.118.132.0","255.255.252.0") ||
				isInNet(myIpAddress(),"10.114.32.0","255.255.252.0") ||
				isInNet(myIpAddress(),"10.99.224.0","255.255.248.0") ||
				isInNet(myIpAddress(),"10.114.36. 0","255.255.252.0") ||
				isInNet(myIpAddress(),"10.118.192.0","255.255.192.0"))
			{return "PROXY 198.36.74.30:8080";}
				else // for all other sites return proxy
				{return "PROXY 165.225.116.16:10563; DIRECT";}
			}
			
			
		// Sites sent to 7367 AE JP Yokohama JNX extranet
		if (dnsDomainIs(host, ".jdc")
		   || dnsDomainIs(host, ".nna")
		   || dnsDomainIs(host, ".edc")
		   || dnsDomainIs(host, ".adc")
		   || dnsDomainIs(host, "yp23.ts-csp.jnx.ne.jp")
		   || dnsDomainIs(host, "www.jnx.nissan.co.jp")
		   || dnsDomainIs(host, "protoedi.jnx.nissan.co.jp")
		   || dnsDomainIs(host, "anpsweb1.jnx.nissan.co.jp")
		   || dnsDomainIs(host, "xo.jnx.ne.jp")
		   || dnsDomainIs(host, ".renault")
		   || dnsDomainIs(host, "jp.nissan.biz")
		   || dnsDomainIs(host, "impact.jnx.honda.co.jp")
		   || dnsDomainIs(host, "www.jnx.honda.co.jp")
		   || dnsDomainIs(host, "www.jnx.honda.co.jp")
		   || dnsDomainIs(host, "biz.jnx.honda.co.jp")
		   || dnsDomainIs(host, "hmn05.jnx.honda.co.jp")
		   || dnsDomainIs(host, "diex02.d-cruise.tns.ne.jp")
		   || dnsDomainIs(host, "at.auth.toyota.co.jp")
		   || dnsDomainIs(host, "tmc.auth.toyota.co.jp")
		   || dnsDomainIs(host, "www.at.toyota.co.jp")
		   || dnsDomainIs(host, "ts-home.stnd.toyota.co.jp")
		   || dnsDomainIs(host, "ts-home2.stnd.toyota.co.jp")
		   || dnsDomainIs(host, "rwp1.adm.toyota.co.jp")
		   || dnsDomainIs(host, "tmc1.nhost.toyota.co.jp")
		   || dnsDomainIs(host, "warp.toyota.co.jp")
		   || dnsDomainIs(host, "warpgk1.toyota.co.jp")
		   || dnsDomainIs(host, "tdl3.mx.toyota.co.jp")
		   || dnsDomainIs(host, "warpsi.toyota.co.jp")
		   || dnsDomainIs(host, "warpgksi.toyota.co.jp")
		   || dnsDomainIs(host, "p-auth01.u-diex.jp")
		   || dnsDomainIs(host, "p-auth02.u-diex.jp")
		   || dnsDomainIs(host, "www.u-diex.jp")
		   || dnsDomainIs(host, "wwwp.u-diex.jp")
		   || dnsDomainIs(host, "www.ad.u-diex.jp")
		   || dnsDomainIs(host, "www.global.u-diex.jp")
		   || dnsDomainIs(host, "smsgkp1.mx.toyota.co.jp")
		   || dnsDomainIs(host, "www.snet-sv.subaru-fhi.co.jp")
		   || dnsDomainIs(host, "ieftp.edi.niandc.ne.jp")
		   || dnsDomainIs(host, ".cai-site.net")
		   || dnsDomainIs(host, "jnx.aivec.com")
		   || dnsDomainIs(host, "jnx.honda.co.jp")
		   || dnsDomainIs(host, ".nss.mazda.co.jp")
		   || dnsDomainIs(host, "ud-plaza.udtrucks.jp")
		   || dnsDomainIs(host, "mailbox.jp.toyota-edc.com")
		   || dnsDomainIs(host, "needswebj.snet.suzuki.co.jp")
		   || dnsDomainIs(host, "anpsweb2.jnx.nissan.co.jp")
		   || dnsDomainIs(host, "tec.toyota.co.jp")
		   || dnsDomainIs(host, "*.tec.toyota.co.jp")
		   || dnsDomainIs(host, "stage-v.snet.suzuki.co.jp")
		   || dnsDomainIs(host, "jp.nissan.biz")
		   || dnsDomainIs(host, ".jnx.amigo-edi.com")
		   || dnsDomainIs(host, ".jnxo.jp")
		   || dnsDomainIs(host, "doc-atsp.kitora.toyota.co.jp")
		   || dnsDomainIs(host, "aportal.auth.toyota.co.jp")
		   || dnsDomainIs(host, "d-cruise.tns.ne.jp")
		   || dnsDomainIs(host, ".jnx.nissan.co.jp"))
		      	return "PROXY 198.36.74.30:8080";
		      	
/* Overrule default return statement For 7367 site's users to return in country ZEN */
  if (isInNet(myIpAddress(),"10.121.0.0","255.255.192.0") ||
				isInNet(myIpAddress(),"10.117.192.0","255.255.240.0") ||
				isInNet(myIpAddress(),"10.126.144.0","255.255.240.0") ||
				isInNet(myIpAddress(),"10.117.208.0","255.255.253.0") ||
				isInNet(myIpAddress(),"10.96.208.0","255.255.252.0") ||
				isInNet(myIpAddress(),"10.107.160.0","255.255.240.0") ||
				isInNet(myIpAddress(),"10.117.160.0","255.255.240.0"))
			    return "PROXY 165.225.116.16:10563; PROXY 165.225.116.16:10563; PROXY GATEWAY.ADIENT.ZSCALERTWO.NET:80; DIRECT";


/* Overrule default return statement For 1543 site's users to return in country ZEN */
  if (isInNet(myIpAddress(),"10.149.6.0","255.255.254.0"))
				       return "PROXY 185.46.212.41:10563; PROXY 165.225.116.16:10563; PROXY GATEWAY.ADIENT.ZSCALERTWO.NET:80; DIRECT";		      	

/* Overrule default return statement For 683 site's users to return in country ZEN */
  if (isInNet(myIpAddress(),"10.160.208.0","255.255.240.0"))
				       return "PROXY ams2.sme.zscalertwo.net:10563; PROXY 165.225.116.16:10563; PROXY GATEWAY.ADIENT.ZSCALERTWO.NET:80; DIRECT";		      	
					   
/* Overrule default return statement For China site's users to return in Private ZEN */
                    if (isInNet(myIpAddress(),"10.108.224.0","255.255.240.0") ||
				isInNet(myIpAddress(),"10.100.176.0","255.255.240.0"))
                        return "PROXY 180.168.189.158:10563";				  				  
				  
		/* Overrule default return statement For China JV users to return in Private ZEN */	      
                     if("180.168.189.153"=="59.46.230.254")
                      return "PROXY 180.168.189.158:10563"; 
                       if("180.168.189.153"=="36.102.232.19")
                      return "PROXY 180.168.189.158:10563"; 
                       if("180.168.189.153"=="118.250.45.217")
                      return "PROXY 180.168.189.158:10563";
                       if("180.168.189.153"=="118.250.47.105")
                      return "PROXY 180.168.189.158:10563";
                       if("180.168.189.153"=="171.8.200.43")
                      return "PROXY 180.168.189.158:10563";
                       if("180.168.189.153"=="1.192.212.242")
                      return "PROXY 180.168.189.158:10563";   
                       if("180.168.189.153"=="111.75.166.244")
                      return "PROXY 180.168.189.158:10563";
                       if("180.168.189.153"=="220.248.219.156")
                      return "PROXY 180.168.189.158:10563";
                       if("180.168.189.153"=="118.250.47.186")
                      return "PROXY 180.168.189.158:10563";
                       if("180.168.189.153"=="118.250.44.143")
                      return "PROXY 180.168.189.158:10563";
                       if("180.168.189.153"=="118.250.47.153")
                      return "PROXY 180.168.189.158:10563";
                       if("180.168.189.153"=="118.250.46.39")
                      return "PROXY 180.168.189.158:10563";
                       if("180.168.189.153"=="118.250.41.237")
                      return "PROXY 180.168.189.158:10563";
                       if("180.168.189.153"=="118.250.42.113")
                      return "PROXY 180.168.189.158:10563";
                       if("180.168.189.153"=="118.250.40.23")
                      return "PROXY 180.168.189.158:10563";
                       if("180.168.189.153"=="118.250.43.242")
                      return "PROXY 180.168.189.158:10563";
                       if("180.168.189.153"=="113.240.193.192")
                      return "PROXY 180.168.189.158:10563";
                       if("180.168.189.153"=="113.240.194.106")
                      return "PROXY 180.168.189.158:10563";
                      if("180.168.189.153"=="113.247.132.179")
                      return "PROXY 180.168.189.158:10563";
                      if("180.168.189.153"=="112.91.152.153")
                      return "PROXY 180.168.189.158:10563";
                      if("180.168.189.153"=="118.250.44.223")
                      return "PROXY 180.168.189.158:10563";
                      if("180.168.189.153"=="118.250.44.231")
                      return "PROXY 180.168.189.158:10563";
                      if("180.168.189.153"=="118.250.43.88")
                      return "PROXY 180.168.189.158:10563";
                      
                      

/* Overrule default return statement For China user to return in Private ZEN */		      	
  if (shExpMatch(country,"China")) 
                       return "PROXY 180.168.189.158:10563; PROXY 58.220.95.12:10563; PROXY 180.168.189.158:80; DIRECT";
                       
/* Overrule default return statement For German user to return in country ZEN */
  if (shExpMatch(country,"Germany")) 
                       return "PROXY 165.225.116.16:10563; PROXY 165.225.116.16:10563; PROXY GATEWAY.ADIENT.ZSCALERTWO.NET:80; DIRECT";
                       
/* Overrule default return statement For Korea user to return in Seoul III public ZEN */	

if (shExpMatch(country,"Korea, Republic of"))  
      return "PROXY sel3.sme.zscalertwo.net:10563; PROXY tyo4.sme.zscalertwo.net:10563; PROXY sel3.sme.zscalertwo.net:80; PROXY tyo4.sme.zscalertwo.net:80; DIRECT";
      
   /* Overrule default return statement For Japan users to return to Tokyo ZEN */		      	
  if (shExpMatch(country,"Japan")) 
      return "PROXY 165.225.110.15:10563; PROXY 165.225.110.15:80; DIRECT";

					   
		/* Default Traffic Forwarding. Forwarding to ZEN on Dedicated Port 10563 */
        return "PROXY 1.234.57.10:10563; PROXY 165.225.116.16:10563; PROXY GATEWAY.ADIENT.ZSCALERTWO.NET:80; DIRECT";
}
}