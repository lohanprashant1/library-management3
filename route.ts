import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  const articles = await db.newsArticle.findMany({
    where: { active: true },
    orderBy: { date: "desc" },
  });

  return NextResponse.json({
    news: articles.map((a) => ({
      id: a.id,
      title: a.title,
      date: a.date,
      category: a.category,
      excerpt: a.excerpt,
      content: a.content,
    })),
    total: articles.length,
  });
}
