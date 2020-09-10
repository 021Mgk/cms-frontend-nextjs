import Link from "next/link";

export interface ArticleProps{
    titr?:string;
    thumbnail?:string;
    id?:number;
}


export default function Article({  titr, thumbnail, id } : ArticleProps) {
    return (
        <>
            <article className="article">
                <Link as={`/article/${id}`} href="/article/[id]">
                    <a>
                        <div className="article__image">
                            <img src={thumbnail} alt={titr} />
                        </div>
                        <div className="article__titir">
                            <h2>
                                {titr}
                            </h2>
                        </div>
                    </a>
                </Link>
            </article>
        </>
    )
}
