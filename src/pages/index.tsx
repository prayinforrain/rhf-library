import BookList from "@/components/book/BookList";
import { BookRecord } from "@/types/book";
import { useQuery } from "@tanstack/react-query";
import Head from "next/head";

export default function Home() {
  const { data: books } = useQuery<BookRecord[]>({
    queryKey: ["books"],
    queryFn: () => fetch("/api/book").then((res) => res.json()),
  });

  return (
    <>
      <Head>
        <title>독서 기록</title>
        <meta name="description" content="독서 기록" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>독서 기록</h1>
        <BookList books={books} />
      </div>
    </>
  );
}
