import styles from "./styles.module.scss";

interface Props {
  message: string;
}

export default function Home({ message }: Props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Rendered on the server: ```{message}```. And deployed from github</h1>
    </div>
  );
}
