import { Triangle } from "../two-dimensional/triangle.js";
import { Rectangle } from "../two-dimensional/rectangle.js";
import { Square } from "../two-dimensional/square.js";
import { Circle } from "../two-dimensional/circle.js";
import { Rhombus } from "../two-dimensional/rhombus.js";
import { Parallelogram } from "../two-dimensional/parallelogram.js";
import { Polygon } from "../two-dimensional/polygon.js";

import { Cone } from "../three-dimensional/cone.js";
import { Cylinder } from "../three-dimensional/cylinder.js";
import { Sphere } from "../three-dimensional/sphere.js";

const firstTriangle = new Triangle(5, 3, 4);
const firstRectangle = new Rectangle(5, 2);
const firstSquare = new Square(5);
const firstCircle = new Circle(7);
const firstRhombus = new Rhombus(5, 4);
const firstParallelogram = new Parallelogram(10, 12, 8);
const firstPolygon = new Polygon(3, 5);

const secondTriangle = new Triangle(5, 3, 4);

const firstCone = new Cone(3, 7);
const firstCylinder = new Cylinder(4, 6);
const firstSphere = new Sphere(6);

console.log(firstTriangle.getDefinition());
console.log(firstRectangle.getDefinition());
console.log(firstSquare.getDefinition());
console.log(firstCircle.getDefinition());
console.log(firstRhombus.getDefinition());
console.log(firstParallelogram.getDefinition());
console.log(firstPolygon.getDefinition());

console.log(firstTriangle.isCongruent(secondTriangle));
console.log(secondTriangle.isIdentical(firstTriangle));

console.log(firstCone.getDefinition());
console.log(firstCylinder.getDefinition());
console.log(firstSphere.getDefinition());
