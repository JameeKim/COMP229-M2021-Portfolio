import express from "express";

const router = express.Router();
export default router;

const navBarLinks = [
  {
    url: "/",
    title: "Home",
    id: "home",
  },
  {
    url: "/about",
    title: "About Me",
    id: "about",
  },
  {
    url: "/projects",
    title: "My Projects",
    id: "projects",
  },
  {
    url: "/services",
    title: "Services",
    id: "services",
  },
  {
    url: "/contact",
    title: "Contact Me",
    id: "contact",
  },
];

for (const link of navBarLinks) {
  router.get(link.url, (req, res, next) => {
    res.render("index", { title: link.title, page: link.id, navBarLinks });
  });
}
