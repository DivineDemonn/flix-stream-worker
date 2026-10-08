export default {
  async fetch(request, env) {
    // Falls back to hardcoded URL if environment variable is not defined
    const ACTIVE_RAILWAY = env?.ACTIVE_RAILWAY || "https://telegram-stream-engine-production-47a7.up.railway.app";

    const url = new URL(request.url);
    const targetUrl = new URL(url.pathname + url.search, ACTIVE_RAILWAY);

    // Forward the original request, preserving Range headers for video seeking
    return fetch(new Request(targetUrl, request));
  }
};
