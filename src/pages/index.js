import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from 'components/layout';
import SEO from 'components/seo';

import Header from 'modules/header';
import Banner from 'modules/banner';
import Podcast from 'modules/podcast';

const IndexPage = () => (
  <Layout>
    <SEO title="Início" />
    <Header />
    <Banner />
    <Podcast />
    {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={['AUTO', 'WEBP', 'AVIF']}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
  </Layout>
);

export default IndexPage;
