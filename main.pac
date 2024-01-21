function FindProxyForURL(url, host) {

    // use proxy for specific domains
    if (shExpMatch(host, "*.goguardian.*")||shExpMatch(host, "goguardian.*.*")||shExpMatch(host, "*.goguardian.*.*")||shExpMatch(host, "goguardian.pusher.com")||shExpMatch(host, "*goguardian.*.*")){
        return "PROXY 0.0.0.0:8080";
		}
		else{
    // by default use no proxy
    return "DIRECT";
		}
}
