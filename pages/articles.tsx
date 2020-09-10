import Head from 'next/head'
import fetch from 'isomorphic-fetch'
import Article, { ArticleProps } from '../components/Article'

export interface ArticlesProps {
    posts: ArticleProps[] | undefined;
}



export default function articles({ posts }: ArticlesProps) {
    return (
        <>
            <Head>
                <title>Post pages || behasun.com</title>
            </Head>

            <div className="article__list">
                {
                    posts?.slice(0, 9).map(post => <Article key={post.id} titr={post.titr} thumbnail={post.thumbnail} id={post.id} />)
                }
            </div>

        </>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://www.behasun.org/NetForm/Service/news/all')
    const posts = await res.json();
    const result = posts.result;
    return {

        props: {
           posts : result
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every second
        //revalidate: 1, // In seconds
    }
}