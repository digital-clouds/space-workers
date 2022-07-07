export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    const key = url.pathname.slice(1)

    // if (request.method == 'PUT') {...}

    if (request.method == 'GET') {
      const value = await env.R2_SPACET.get(key)

      if (value === null) {
        return new Response('Object Not Found', { status: 404 })
      }

      return new Response(value.body)
    }
  },
}
