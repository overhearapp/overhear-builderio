import { builder } from '@builder.io/react'
import BuilderPage from '@/components/BuilderPage'
import { notFound } from 'next/navigation'

interface PageProps {
  params: {
    slug: string[]
  }
}

export default async function Page({ params }: PageProps) {
  const urlPath = '/' + (params.slug?.join('/') || '')
  
  const page = await builder
    .get('page', {
      url: urlPath,
    })
    .toPromise()

  if (!page) {
    return notFound()
  }

  return <BuilderPage model="page" content={page} />
}

export async function generateStaticParams() {
  const pages = await builder.getAll('page', {
    options: { noTargeting: true },
  })

  return pages.map((page) => ({
    slug: page.data?.url?.replace('/', '').split('/').filter(Boolean) || [],
  }))
}
