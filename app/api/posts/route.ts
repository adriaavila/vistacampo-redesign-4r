import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

type Post = {
  title: string;
  description: string;
  date: string;
  slug: string;
  image?: string;
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const lang = searchParams.get('lang') || 'es'

  try {
    let postsDirectory: string
    
    if (lang === 'en') {
      postsDirectory = path.join(/* turbopackIgnore: true */ process.cwd(), 'posts', 'en')
    } else {
      postsDirectory = path.join(/* turbopackIgnore: true */ process.cwd(), 'posts')
    }

    // Check if directory exists
    if (!fs.existsSync(postsDirectory)) {
      return NextResponse.json([])
    }

    const files = fs.readdirSync(postsDirectory)
    const posts = files
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => {
        const source = fs.readFileSync(path.join(postsDirectory, file), 'utf8')
        const { data } = matter(source)
        return {
          title: data.title,
          description: data.description,
          date: data.date,
          slug: data.slug,
          image: data.image,
          draft: data.draft || false,
        }
      })
      .filter((post) => !post.draft) // Filter out draft posts
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return NextResponse.json(posts)
  } catch (error) {
    console.error('Error reading posts:', error)
    return NextResponse.json([])
  }
}
