import express from "express";
import { v4 as uuid4 } from "uuid";

const router = express.Router();

let users = [];

router.get("/", (req, res) => {
  console.log(users);

  res.send(users);
});
router.post("/", (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuid4() });
  res.send(`User with name ${user.firstName} add to the database `);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id != id);
  res.send(`user with the id : ${id}`);
});
export default router;
