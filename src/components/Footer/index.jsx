import styles from'./styles.module.css'
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


export const Footer = () =>  {
  return (

    <div className={styles.container}>
          <div className={styles.vielas}> 
                  <h3>VIELAS</h3>
                  </div>
        
            <div className={styles.icon}>
            <a><TiSocialFacebookCircular /></a>
            <a><FaInstagram /></a>
            <a><FaTwitter /></a>
            <a><FaWhatsapp /></a>
            <a><FaLinkedinIn /></a>
            </div>
            <div className={styles.texto1}>
                 <p>Quem Somos</p>
                 <p>Equipe</p>
                 <p>Apoie</p>
                 <p>Fale Conosco</p>
                </div>
    </div>
  )
}
