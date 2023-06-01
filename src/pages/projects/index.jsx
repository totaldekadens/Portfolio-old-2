import Head from 'next/head'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { formatDate } from '@/lib/formatDate'
import { getAllArticles } from '@/lib/getAllArticles'
import Image from 'next/image'
import Link from 'next/link'

function Article({ article }) {
  return (
    <article className="flex">
      <Link href={`/projects/${article.slug}`} className="md:w-3/4">
        <Card className=" md:col-span-3">
          <Image
            src={article.image}
            className="z-20 mb-3 block rounded-lg md:hidden"
          />
          <Card.Title href={`/projects/${article.slug}`}>
            {article.title}
          </Card.Title>
          <Card.Eyebrow
            as="time"
            dateTime={article.date}
            className="md:hidden"
            decorate
          >
            {formatDate(article.date)}
          </Card.Eyebrow>

          <Card.Description>{article.description}</Card.Description>
          <div className="flex flex-wrap gap-2">
            {article.keys.map((key) => (
              <div className="z-20 mt-1 rounded-full bg-zinc-200 px-2 text-xs text-zinc-500 dark:bg-zinc-800 dark:text-zinc-500">
                {key}
              </div>
            ))}
          </div>
          <Card.Cta>Go to project</Card.Cta>
        </Card>
      </Link>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden flex-1 md:block"
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
        <title>Projects - Angelica Moberg Skoglund</title>
        <meta
          name="description"
          content="Some of my projects. Please check out my Github for more."
        />
      </Head>
      <SimpleLayout
        title="Projects"
        intro="This page is under construction. All of my projects are not here atm "
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
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
