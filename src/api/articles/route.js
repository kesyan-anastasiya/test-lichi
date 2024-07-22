const Article = require('../../../models/Article');

export async function POST(req) {
  const { title, content } = await req.json();

  try {
    const newArticle = await Article.create({
      title,
      content,
    });

    return new Response(JSON.stringify(newArticle), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to create article' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}