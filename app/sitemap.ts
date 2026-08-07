/* import { getBlogPosts } from 'app/creatives/utils' */

export const baseUrl = 'https://kendru.xyz'

export default async function sitemap() {
  const creatives = getBlogPosts().map((post) => ({
    url: `${baseUrl}/creatives/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  const routes = ['/projects', '/creatives', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes, ...creatives]
}
