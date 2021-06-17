import Home from "components/home";

interface Props {
  data: Data;
}

type Data = {
  message: string;
};

function HomePage({ data }: Props) {
  return <Home message={data.message} />;
}

export async function getServerSideProps() {
  const res = await fetch(`https://uapf-fe.free.beeceptor.com/ssr-test`);
  const data: Data = await res.json();
  return { props: { data } };
}

export default HomePage;
