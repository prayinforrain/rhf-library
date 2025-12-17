import BookList from "@/components/book/BookList";
import Button from "@/components/ui/Button";
import { getBooks } from "@/services/book";
import { BookRecord } from "@/types/book";
import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import Link from "next/link";

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  & > h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export default function Home() {
  const { data: books } = useQuery<BookRecord[]>({
    queryKey: ["books"],
    queryFn: () => getBooks(),
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
        <Header>
          <h1>독서 기록</h1>
          <Link href="/new">
            <Button>새 책 추가</Button>
          </Link>
        </Header>
        <BookList books={books} />
      </div>
    </>
  );
}
