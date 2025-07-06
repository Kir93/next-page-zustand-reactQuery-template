import { GetServerSideProps } from 'next';
import { getServerSideSitemapLegacy } from 'next-sitemap';

/*
 * Boilerplate code for dynamic sitemap generation.
 * This page is not actually used, but demonstrates how to generate dynamic sitemaps.
 */
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const posts: { id: number }[] = [];
  const newsSitemaps = posts.map((id) => ({
    loc: `${process.env.NEXT_PUBLIC_DOMAIN_URL || 'http://localhost:3000/'}${id.toString()}`,
    lastmod: new Date().toISOString()
  }));

  const fields = [...newsSitemaps];

  return getServerSideSitemapLegacy(ctx, fields);
};

export default function Site() {}
