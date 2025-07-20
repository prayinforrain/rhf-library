import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Radio from "@/components/ui/Radio/Radio";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>독서 기록</title>
        <meta name="description" content="독서 기록" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div>독서 기록</div>
        <Input placeholder="테스트" />
        <Input placeholder="테스트" disabled />
        <Button>테스트</Button>
        <Button disabled>테스트</Button>
        <Radio label="테스트" name="test" />
        <Radio label="테스트2" name="test" />
        <Radio label="테스트3" name="test" disabled />
      </div>
    </>
  );
}
