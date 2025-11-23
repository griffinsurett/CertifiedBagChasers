export function setSecurityHeaders(response: Response, pathname: string): void {
  if (pathname === '/~partytown/partytown-sandbox-sw.html') {
    // Partytown sandbox worker headers
    response.headers.set('Content-Security-Policy',
      "default-src 'none'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; worker-src 'self' blob:; style-src 'self' 'unsafe-inline'; connect-src 'self'; frame-ancestors *;"
    );
    response.headers.set('X-Content-Type-Options', 'nosniff');
  } else if (pathname.startsWith('/~partytown/')) {
    // Partytown files headers
    response.headers.set('Content-Security-Policy',
      "default-src 'none'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; worker-src 'self' blob:; style-src 'self' 'unsafe-inline';"
    );
    response.headers.set('Cross-Origin-Embedder-Policy', 'unsafe-none');
    response.headers.set('Cross-Origin-Opener-Policy', 'unsafe-none');
    response.headers.set('Cross-Origin-Resource-Policy', 'cross-origin');
  } else {
    // Default headers for all other pages
    response.headers.set('Content-Security-Policy',
      "default-src 'none'; script-src 'self' 'unsafe-inline' translate.google.com translate.googleapis.com translate-pa.googleapis.com; worker-src 'self' blob:; child-src 'self' blob:; style-src 'self' 'unsafe-inline' translate.googleapis.com www.gstatic.com; img-src 'self' data: translate.google.com translate.googleapis.com fonts.gstatic.com www.gstatic.com; font-src 'self' data: fonts.gstatic.com; connect-src 'self' translate.googleapis.com translate-pa.googleapis.com; frame-src 'self' translate.google.com translate.googleapis.com; manifest-src 'self'; media-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests; block-all-mixed-content;"
    );
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-XSS-Protection', '1; mode=block');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    response.headers.set('Permissions-Policy',
      'accelerometer=(), ambient-light-sensor=(), autoplay=(), battery=(), camera=(), display-capture=(), document-domain=(), encrypted-media=(), fullscreen=(self), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), sync-xhr=(), usb=(), web-share=(), xr-spatial-tracking=()'
    );
    response.headers.set('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
    response.headers.set('Cross-Origin-Resource-Policy', 'same-origin');
    response.headers.set('Cross-Origin-Embedder-Policy', 'unsafe-none');
    response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  }
}
