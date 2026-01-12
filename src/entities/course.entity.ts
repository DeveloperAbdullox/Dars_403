import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    BaseEntity,
    Relation
  } from "typeorm";
  
  import { Authors } from "./authors.entity.js";
  
  @Entity("course")
  export class Course extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ nullable: false })
    title: string;
  
    @Column()
    oldPrice: string;
  
    @Column({ nullable: false })
    newPrice: string;
  
    @Column({ nullable: false })
    category: string;
  
    @Column({ nullable: false })
    level: string;
  
    @ManyToOne(() => Authors, author => author.courses, {
      onDelete: "CASCADE",
    })
    @JoinColumn({ name: "author_id" })
    author: Relation<Authors>; 
  }
  