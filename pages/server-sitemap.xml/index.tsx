import { GetServerSideProps } from 'next';
import { getServerSideSitemap } from 'next-sitemap';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const posts: { id: number }[] = [];
  const newsSitemaps = posts.map((id) => ({
    loc: `${process.env.NEXT_PUBLIC_DOMAIN_URL || 'http://localhost:3000/'}${id.toString()}`,
    lastmod: new Date().toISOString(),
  }));

  const fields = [...newsSitemaps];

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}
