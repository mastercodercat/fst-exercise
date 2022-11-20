const axios = require("axios");
const router = require("express").Router();
const config = require("./config");

axios.defaults.baseURL = config.dbUrl;

router.get("/", (req, res) => {
  axios
    .get("/todos")
    .then((response) => {
      res.status(response.status).json(response.data);
    })
    .catch((err) => {
      res.status(400).json({ error: err });
    });
});

router.post("/", (req, res) => {
  const { todo } = req.body;

  axios
    .post("/todos", { title: todo, userId: config.userId })
    .then((response) => {
      res.status(response.status).json(response.data);
    })
    .catch((err) => {
      res.status(400).json({ error: err });
    });
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { todo } = req.body;

  axios
    .patch(`/todos/${id}`, { title: todo })
    .then((todo) => {
      res.json({
        todo,
      });
    })
    .catch((err) => {
      res.status(400).json({ error: err });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  axios
    .delete(`/todos/${id}`)
    .then(() => {
      res.status(302).json({
        message: "Successfully deleted todo",
      });
    })
    .catch((err) => {
      res.status(400).json({ error: err });
    });
});

module.exports = router;
