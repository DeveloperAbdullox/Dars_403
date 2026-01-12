var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from "typeorm";
import { Course } from "./course.entity.js";
let Authors = class Authors extends BaseEntity {
    id;
    fullName;
    courses;
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Authors.prototype, "id", void 0);
__decorate([
    Column({ nullable: false }),
    __metadata("design:type", String)
], Authors.prototype, "fullName", void 0);
__decorate([
    OneToMany(() => Course, course => course.author),
    __metadata("design:type", Array)
], Authors.prototype, "courses", void 0);
Authors = __decorate([
    Entity("authors")
], Authors);
export { Authors };
