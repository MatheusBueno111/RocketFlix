import styles from './styles.module.scss';

interface ButtonProps {
  onClick: () => void;
}

export default function Button({onClick}: ButtonProps) {
  return (
      <button onClick={onClick} className={styles.buttonContainer}> 
        <img className={styles.buttonImg} src="/assets/favico/favicon-32x32.png" alt="shuffle.png" />
        <p><strong>Encontrar filme</strong></p>  
      </button>
  );
}