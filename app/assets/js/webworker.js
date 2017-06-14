const webWorkerGet = (APIurl) => {
  const Httpreq = new XMLHttpRequest();
  Httpreq.withCredentials = true;
  if ( !Httpreq ) {
    console.error( 'Giving up. Cannot create an XMLHTTP instance.' );
    return false;
  }

  Httpreq.onreadystatechange = function() {
    if (Httpreq.readyState === 4 && Httpreq.status === 200) {
      const response = Httpreq.responseText;
      self.onMessage = postMessage( response );
    }
  };
  Httpreq.open('GET', APIurl, false);
  Httpreq.send(null);
  return true;
};

self.addEventListener( 'message', ( event ) => {
  setInterval(() => {
    webWorkerGet(event.data.url);
  }, event.data.interval);
});