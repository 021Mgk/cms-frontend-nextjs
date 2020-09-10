import Link from "next/link";

export interface ShowPostProp {
    userId: number;
    id: number;
    title: string;
    body: string;
}


export default function ShowPost({ userId, title, body, id }: ShowPostProp) {
    return (
        <>
            <article className="article">
                <Link as={`/article/${id}`} href="/article/[id]">
                    <a>
                        <div className="article__titir">
                            <h2>
                                {title}
                            </h2>
                            <p>
                                {body}
                            </p>
                        </div>
                    </a>
                </Link>
            </article>
        </>
    )
}
