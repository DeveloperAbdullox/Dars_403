import { Router } from "express";
import { Authors } from "../entities/authors.entity.js";
const authorRouter = Router();
authorRouter.post("/author", async (req, res) => {
    const { fullName } = req.body;
    const author = Authors.create({ fullName });
    await Authors.save(author);
    res.status(201).send(author);
});
authorRouter.get("/author", async (req, res) => {
    const newAuthor = await Authors.find();
    res.status(200).send(newAuthor);
});
authorRouter.get("/author/:id", async (req, res) => {
    const id = Number(req.params.id);
    let newAuthor = await Authors.findOneBy({ id });
    if (!id) {
        res.status(404).send({ message: "id topilmadi" });
    }
    res.status(200).send(newAuthor);
});
authorRouter.put("/author/:id", async (req, res) => {
    const id = Number(req.params.id);
    const { fullName } = req.body;
    let newAuthor = await Authors.update({ id }, { fullName });
    const updateAuthor = await Authors.findOneBy({ id });
    res.send(updateAuthor);
});
authorRouter.delete("/author/:id", async (req, res) => {
    const id = Number(req.params.id);
    await Authors.delete({ id });
    res.status(200).send({ message: "Author o'chirildi" });
});
export default authorRouter;
