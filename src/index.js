export default {
  async fetch(request, env, ctx) {
    // Danh sách users tạm thời (thay cho database)
    const users = [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ];

    // Xử lý yêu cầu GET cho /api/users
    const { method, url } = request;
    const { pathname } = new URL(url);

    if (method === 'GET' && pathname === '/api/users') {
      return new Response(JSON.stringify(users), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*' // Cho phép CORS nếu cần
        }
      });
    }

    // Trả về lỗi nếu route hoặc method không khớp
    return new Response('Not Found', { status: 404 });
  }
};