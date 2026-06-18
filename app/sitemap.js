const URL = "https://zeeshan.dev";

export default function sitemap() {
  const routes = ["", "/about", "/contact", "/projects"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  return routes;
}
