import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-fetch';
import { NextPageContext } from 'next';
import ShowPost from '../components/Posts';

export interface PostsProp {
    posts: {
        userId: number;
        id: number;
        title: string;
        body: string;
    }[];
}

export default function posts({ posts }: PostsProp) {
    const [news, setNews] = useState(posts);
    useEffect(() => {
        async function getposts() {
            const res = await fetch('https://jsonplaceholder.ir/posts')
            const postss = await res.json();
            setNews(postss);
        }

        if (news.length == 0) {
            getposts()
        }
    }, [])


    if (news.length == 0) {
        return (
            <div> Lodading .... </div>
        )
    }

    return (
        <div>
            <div className="article__list">
                {
                    news && news.slice(0, 9).map(post => <ShowPost userId={post.userId} key={post.id} title={post.title} body={post.body} id={post.id} />)
                }
            </div>
        </div>
    )
}


posts.getInitialProps = async (ctx: NextPageContext) => {
    if (!ctx.req) {
        return { posts: [] };
    }
    const res = await fetch('https://jsonplaceholder.ir/posts')
    const posts = await res.json();
    return { posts: posts }
}