const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">


<url>
  <loc>https://vuongnq.netlify.app/</loc>
  <lastmod>2023-11-12T23:56:10+00:00</lastmod>
  <priority>1.00</priority>
</url>
<url>
  <loc>https://vuongnq.netlify.app/nft</loc>
  <lastmod>2023-11-12T23:56:10+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://vuongnq.netlify.app/about</loc>
  <lastmod>2023-11-12T23:56:10+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://vuongnq.netlify.app/resume</loc>
  <lastmod>2023-11-12T23:56:10+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://vuongnq.netlify.app/contact</loc>
  <lastmod>2023-11-12T23:56:10+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://vuongnq.netlify.app/assets/Vuong%20Quoc%20Nguyen%20-%20Senior%20Frontend%20Dev%20-%20Merrylands%20Sydney.pdf</loc>
  <lastmod>2023-11-12T23:56:10+00:00</lastmod>
  <priority>0.80</priority>
</url>


</urlset>
`;

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {

  res.setHeader('Content-Type', 'text/xml');
  res.write(xml);
  res.end();

  return { props: {} };
}

export default SiteMap;