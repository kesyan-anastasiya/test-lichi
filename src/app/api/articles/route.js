const {Article} = require('../../../../db/models');

export async function POST(req) {
  const { title, description } = await req.json();

  try {
    const newArticle = await Article.create({
      title,
      description,
    });

    return new Response(JSON.stringify(newArticle), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Failed to create article' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}