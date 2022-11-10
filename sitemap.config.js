const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL || 'http://localhost:3000/';
module.exports = {
  siteUrl,
  exclude: ['/404'],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: ['/404'],
      },
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [`${siteUrl}server-sitemap.xml`],
  },
};
