import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './styles.module.scss';

function Banner() {
  return (
    <>
      <div className={styles.bannerContainer}>
        {/* <p>Flávia Chaves</p>
        <p>Fonoaudióloga</p> */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#d7c1c1"
          fill-opacity="1"
          d="M0,128L34.3,144C68.6,160,137,192,206,176C274.3,160,343,96,411,58.7C480,21,549,11,617,37.3C685.7,64,754,128,823,176C891.4,224,960,256,1029,261.3C1097.1,267,1166,245,1234,229.3C1302.9,213,1371,203,1406,197.3L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg> */}
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
        <path
          fill="#d7c1c1"
          fill-opacity="1"
          d="M0,128L80,117.3C160,107,320,85,480,96C640,107,800,149,960,149.3C1120,149,1280,107,1360,85.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}

export default Banner;
