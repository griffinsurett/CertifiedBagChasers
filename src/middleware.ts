import { defineMiddleware } from 'astro:middleware';
import { setSecurityHeaders } from './utils/securityHeaders';

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  setSecurityHeaders(response, context.url.pathname);
  return response;
});
