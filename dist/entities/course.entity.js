var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, BaseEntity } from "typeorm";
import { Authors } from "./authors.entity.js";
let Course = class Course extends BaseEntity {
    id;
    title;
    oldPrice;
    newPrice;
    category;
    level;
    author;
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Course.prototype, "id", void 0);
__decorate([
    Column({ nullable: false }),
    __metadata("design:type", String)
], Course.prototype, "title", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Course.prototype, "oldPrice", void 0);
__decorate([
    Column({ nullable: false }),
    __metadata("design:type", String)
], Course.prototype, "newPrice", void 0);
__decorate([
    Column({ nullable: false }),
    __metadata("design:type", String)
], Course.prototype, "category", void 0);
__decorate([
    Column({ nullable: false }),
    __metadata("design:type", String)
], Course.prototype, "level", void 0);
__decorate([
    ManyToOne(() => Authors, author => author.courses, {
        onDelete: "CASCADE",
    }),
    JoinColumn({ name: "author_id" }),
    __metadata("design:type", Object)
], Course.prototype, "author", void 0);
Course = __decorate([
    Entity("course")
], Course);
export { Course };
