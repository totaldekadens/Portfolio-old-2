import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { formatDate } from '@/lib/formatDate'
import { getAllArticles } from '@/lib/getAllArticles'

const list = [
  {
    author: 'Angelica Moberg Skoglund',
    date: '2023-05-16',
    title: 'Best Master Thesis in the class',
    description:
      'Angelica och Jacob har inte bara utvecklat en webbutik för smink med ett innovativt koncept utan en hel E-handelsplattform med ett egenutvecklat backend. Nästan 20 000 kodrader i bland annat Next.js och Mantine.dev resulterade i en utbyggnadsbar webbproduktion och en väldigt bra grund att stå på. Teknologierna tillsammans med MongoDB har tillämpats på bästa möjliga sätt. Angelica och Jacob demonstrerar förmågan att gå från idé till färdig produkt på kort tid.',
  },
  {
    author: 'Angelica Moberg Skoglund',
    date: '2023-05-16',
    title:
      'Graduated in Web development with focus on E-commerce at Medieinstitutet AB Göteborg',
    description: 'With VG in all courses',
  },
]

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title>{article.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export default function ArticlesIndex({ articles }) {
  return (
    <>
      <Head>
        <title>Merits - Angelica Moberg Skoglund</title>
        <meta name="description" content="Some of my merits." />
      </Head>
      <SimpleLayout
        title="Check out my merits"
        intro="This page is not fully updated."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {list.map((article, i) => (
              <Article key={i} article={article} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}
