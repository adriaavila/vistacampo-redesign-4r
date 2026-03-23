import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { searchParams } = new URL(request.url)
  const lang = searchParams.get('lang') || 'es'
  const { slug } = await params

  try {
    let postsDirectory: string
    
    if (lang === 'en') {
      postsDirectory = path.join(/* turbopackIgnore: true */ process.cwd(), 'posts', 'en')
    } else {
      postsDirectory = path.join(/* turbopackIgnore: true */ process.cwd(), 'posts')
    }

    // Check if directory exists
    if (!fs.existsSync(postsDirectory)) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }

    const files = fs.readdirSync(postsDirectory)
    const postFile = files.find(file => file.endsWith('.mdx') && file.includes(slug))

    if (!postFile) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }

    const source = fs.readFileSync(path.join(postsDirectory, postFile), 'utf8')
    const { data, content } = matter(source)

    // Check if post is a draft
    if (data.draft === true) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }

    const post = {
      title: data.title,
      description: data.description,
      date: data.date,
      slug: data.slug,
      image: data.image,
      content: content,
    }

    return NextResponse.json(post)
  } catch (error) {
    console.error('Error reading post:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
