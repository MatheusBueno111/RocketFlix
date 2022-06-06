import styles from './styles.module.scss';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src="/assets/shuffle.svg" alt="favico.png" />
      <h1>Não sabe o que assistir? </h1>
    </header>
  );
}