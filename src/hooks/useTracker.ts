import { useEffect, useRef } from 'react';

export function useTracker(currentPage?: string) {
  const previousPageRef = useRef<string | undefined>(currentPage);

  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://tools.cprajapati.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    
    const queryCid = urlParams.get('cid');
    let cid = queryCid || localStorage.getItem('wmit_active_cid');
    if (queryCid) {
      localStorage.setItem('wmit_active_cid', queryCid);
    }
    
    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = (overridePage?: string) => {
      if (overridePage && overridePage.toLowerCase() !== 'home') {
        return overridePage;
      }
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      if (segment && segment.split('?')[0]) {
        return segment.split('?')[0];
      }
      return overridePage || 'Home';
    };

    const sendInitPayload = (activePage?: string) => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: getPageName(activePage),
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent,
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(() => {});
    };

    const sendExitPayload = (activePage?: string) => {
      const payload = {
        cid: cid,
        session_id: sessionId,
        page_name: getPageName(activePage),
        action: 'page_change'
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(() => {});
      }
    };

    // Track initial page view
    sendInitPayload(currentPage);

    const handleLocationChange = () => {
      sendExitPayload(currentPage);
      setTimeout(() => sendInitPayload(currentPage), 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('pagehide', () => sendExitPayload(currentPage));
    
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendExitPayload(currentPage);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('pagehide', () => sendExitPayload(currentPage));
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Track SPA internal page changes
  useEffect(() => {
    if (previousPageRef.current && previousPageRef.current !== currentPage) {
      const TRACKING_ENDPOINT = 'https://tools.cprajapati.com/tracker/track.php';
      const cid = localStorage.getItem('wmit_active_cid');
      if (cid) {
        const visitorId = localStorage.getItem('wmit_visitor_id') || '';
        const sessionId = sessionStorage.getItem('wmit_session_id') || '';
        
        // Send exit for previous page
        const exitPayload = {
          cid: cid,
          session_id: sessionId,
          page_name: previousPageRef.current,
          action: 'page_change'
        };
        if (navigator.sendBeacon) {
          const blob = new Blob([JSON.stringify(exitPayload)], { type: 'application/json' });
          navigator.sendBeacon(TRACKING_ENDPOINT, blob);
        } else {
          fetch(TRACKING_ENDPOINT, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(exitPayload),
            keepalive: true
          }).catch(() => {});
        }

        // Send init for new page
        const initPayload = {
          cid: cid,
          visitor_id: visitorId,
          session_id: sessionId,
          page_name: currentPage || 'Home',
          referrer: document.referrer || '',
          device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
          browser: navigator.userAgent,
          action: 'init'
        };
        fetch(TRACKING_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(initPayload)
        }).catch(() => {});
      }
    }
    previousPageRef.current = currentPage;
  }, [currentPage]);
}
