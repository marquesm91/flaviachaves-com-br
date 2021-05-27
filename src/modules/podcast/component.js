import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

function Podcast() {
  return (
    <div style={{ color: '#3e2828', margin: '1rem 2.5rem' }}>
      <h2>Podcast — Espresso com a Fono</h2>
      <div style={{ color: '#3e2828', maxWidth: 600, margin: '1rem 0' }}>
        Aqui você tem a pausa pra um cafezinho com informações, curiosidades e
        <div
          style={{ display: 'inline-block', color: '#3e2828', fontWeight: 700 }}
        >
          #tretas
        </div>{' '}
        do universo da Fonoaudiologia!
      </div>
      <h3 style={{ color: '#3e2828', margin: '3rem 0 1rem 0' }}>
        Último episódio
      </h3>
      <div
        style={{
          maxWidth: 600,
        }}
      >
        <iframe
          src="https://open.spotify.com/embed/show/4fWm9BBVIBH3BqkxCei3CC"
          width="100%"
          height="232"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
    </div>
  );
}

export default Podcast;
