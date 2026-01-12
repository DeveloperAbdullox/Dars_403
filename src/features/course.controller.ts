import { Router } from "express";
import { Course } from "../entities/course.entity.js";
import { Authors } from "../entities/authors.entity.js";

const courseRouter = Router();

courseRouter.post("/course", async (req, res) => {
  const { title, oldPrice, newPrice, category, level, authorId } = req.body;

  const author = await Authors.findOneBy({ id: authorId });

  if (!author) {
    return res.status(404).json({ message: "Author topilmadi" });
  }

  const newCourse = Course.create({
    title,
    oldPrice,
    newPrice,
    category,
    level,
    author, 
  });

  await Course.save(newCourse);

  res.status(201).json(newCourse);
});

courseRouter.get("/course", async (req, res) => {
    const course = await Course.find()
    res.status(200).send({message: "AllCourse", course})
    
})

courseRouter.get("/course/:id", async (req, res) => {
    const id = Number(req.params.id)

    const course = await Course.findOneBy({id})

    res.status(200).send({message: "Course", course})
});

courseRouter.put("/course/:id", async (req, res) => {
    const id = Number(req.params.id)
    const {title, oldPrice, newPrice, category, level} = req.body

    await Course.update({id}, {title, oldPrice, newPrice, category, level})

    const updateCourse = await Course.findOneBy({id})

    res.status(200).send({message: "UpdateCourse", updateCourse})
});

courseRouter.delete("/course/:id", async (req, res) => {
    const id = Number(req.params.id)

    await Course.delete({id})

    res.status(200).send({message: "DeletedCourse"})
})

export default courseRouter;
