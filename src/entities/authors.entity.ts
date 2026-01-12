import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    BaseEntity
  } from "typeorm";
  
  import { Course } from "./course.entity.js";
  
  @Entity("authors")
  export class Authors extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ nullable: false })
    fullName: string;
  
    @OneToMany(() => Course, course => course.author)
    courses: Course[];
  }
  