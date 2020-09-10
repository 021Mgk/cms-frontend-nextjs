import fetch from 'isomorphic-fetch'
import Article, { ArticleProps } from '../../components/Article'
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';

export type PostInterface = ArticleProps;

// export interface PostInterface {
//   id: number;
//   thumbnail: string;
//   titr: string;
// }

export default function singleArticle({ id, thumbnail, titr }: PostInterface) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>loading falback step  ...</div>
  }
  return (
    <>
      <div className="article__list">
        <Article titr={titr} thumbnail={thumbnail} id={id} />
      </div>
    </>
  )
}





export const getStaticProps: GetStaticProps<PostInterface> = async (ctx) => {
  const id = ctx.params?.id as string;
  const res = await fetch(`https://www.behasun.org/NetForm/Service/news/id?id=${id}`)
  const posts = await res.json();
  const post = posts.result[0];
  return { props: post }
}



export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {

  const res = await fetch("https://www.behasun.org/NetForm/Service/news/all");
  const posts = await res.json();

  const paths = posts.result.map((post: PostInterface) => ({
    params: { id: post.id?.toString() }
  }))

  console.log("pathhhh " , paths)
  // const paths = [{ params: { id: "1605" } },
  // { params: { id: "1606" } }]

  return { fallback: false, paths }

}