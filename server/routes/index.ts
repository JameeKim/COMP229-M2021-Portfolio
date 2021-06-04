import express from "express";

const router = express.Router();
export default router;

const navBarLinks = [
  {
    url: "/",
    title: "",
    id: "home",
  },
  {
    url: "/about",
    title: "About",
    id: "about",
  },
  {
    url: "/projects",
    title: "Projects",
    id: "projects",
  },
  {
    url: "/services",
    title: "Services",
    id: "services",
  },
  {
    url: "/contact",
    title: "Contact",
    id: "contact",
  },
];

for (const link of navBarLinks) {
  router.get(link.url, (req, res, next) => {
    res.render("index", { title: link.title, page: link.id, navBarLinks });
  });
}
