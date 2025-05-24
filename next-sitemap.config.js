/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.toiture66.fr', // Remplace avec ton domaine réel
  generateRobotsTxt: true, // Génère robots.txt automatiquement
  sitemapSize: 5000, // Nombre max d'URLs par fichier sitemap
  changefreq: 'weekly', // Fréquence de mise à jour estimée
  priority: 0.7, // Priorité par défaut
  exclude: ['/admin/*'], // Exclure certaines pages si besoin
};
