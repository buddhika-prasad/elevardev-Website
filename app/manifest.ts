import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'elevardev - Scalable Digital Products',
    short_name: 'elevardev',
    description: 'Custom software development, web applications, mobile apps, and SaaS products. Serving clients globally from Sri Lanka.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#6366f1',
    // Icons will be added when icon files are created
    // icons: [
    //   {
    //     src: '/icon-192.png',
    //     sizes: '192x192',
    //     type: 'image/png',
    //   },
    //   {
    //     src: '/icon-512.png',
    //     sizes: '512x512',
    //     type: 'image/png',
    //   },
    // ],
  }
}

