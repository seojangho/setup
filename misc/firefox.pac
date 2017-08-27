function FindProxyForURL(url, host) {

  // url = url.toLowerCase();
  // host = host.toLowerCase();
  hostip = dnsResolve(host);
  // isHttp = (url.substring(0,5) == "http:");
  // isHttps = (url.substring(0,6) == "https:")
  // isPlain = isPlainHostName(host)

  // Bldg. 302 Cluster
  if(isInNet(hostip, "192.168.0.0", "255.255.0.0")) {
    return "SOCKS 127.0.0.1:8080";
  }

  // Amazon Cluster
  if(isInNet(hostip, "172.16.0.0", "255.240.0.0")) {
    return "SOCKS 127.0.0.1:9090";
  }

  // otherwise
  return "DIRECT";
}
