from django.contrib.sitemaps import Sitemap

class HomeSitemap(Sitemap):
    changefreq = "weekly"
    priority = 1.0

    def items(self):
        return ['home']

    def location(self, item):
        return '/'
