import styles from './styles.module.css';
import Casas from '../../assets/casinhas.jpg';

export const Home = () => {
    return(
        <>
            <div className={styles.container}>
                <div className={styles.texto}>
                    <h2>VIELAS</h2>
                    <p>
                    Um banco de imagens pensado para mostrar a diversidade das periferias de São Paulo.
                    Nascido nas quebradas e fomentado
                    por quem vive e pensa nelas.
                    </p>
                </div>

                <div className={styles.carrosel}>
                    <img  src={Casas} alt="" />
                </div>
            </div>
        </>
    );
};
