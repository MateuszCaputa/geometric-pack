import { Triangle } from "../two-dimensional/triangle.js";
import { Rectangle } from "../two-dimensional/rectangle.js";
import { Square } from "../two-dimensional/square.js";
import { Circle } from "../two-dimensional/circle.js";
import { Rhombus } from "../two-dimensional/rhombus.js";
import { Parallelogram } from "../two-dimensional/parallelogram.js";
import { Polygon } from "../two-dimensional/polygon.js";
import { Stadium } from "../two-dimensional/stadium.js";
import { Distance2D } from "../two-dimensional/distance-2D.js";
import { Annulus } from "../two-dimensional/annulus.js";

import { Cone } from "../three-dimensional/cone.js";
import { Cylinder } from "../three-dimensional/cylinder.js";
import { Sphere } from "../three-dimensional/sphere.js";
import { Cube } from "../three-dimensional/cube.js";
import { ConicalFrustum } from "../three-dimensional/conical_frustum.js";
import { Capsule } from "../three-dimensional/capsule.js";
import { Hemisphere } from "../three-dimensional/hemisphere.js";
import { Pyramid } from "../three-dimensional/pyramid.js";
import { Cuboid } from "../three-dimensional/cuboid.js";
import { Distance3D } from "../three-dimensional/distance-3D.js";
import { Tube } from "../three-dimensional/tube.js";

const firstTriangle = new Triangle(5, 3, 4);
const firstRectangle = new Rectangle(5, 2);
const firstSquare = new Square(5);
const firstCircle = new Circle(7);
const firstRhombus = new Rhombus(5, 4);
const firstParallelogram = new Parallelogram(10, 12, 8);
const firstPolygon = new Polygon(3, 5);
const firstStadium = new Stadium(4, 2);
const firstDistance2D = new Distance2D(-7, -4, 17, 6.5);
const firstAnnulus = new Annulus(3, 1);

const secondTriangle = new Triangle(5, 3, 4);

const firstCone = new Cone(3, 7);
const firstCylinder = new Cylinder(4, 6);
const firstSphere = new Sphere(6);
const firstCube = new Cube(5);
const firstConicalFrustum = new ConicalFrustum(3, 4, 5);
const firstCapsule = new Capsule(5, 4);
const firstHemisphere = new Hemisphere(9);
const firstPyramid = new Pyramid(3, 8);
const firstCuboid = new Cuboid(5, 2, 3);
const firstDistance3D = new Distance3D(7, 4, 3, 17, 6, 2);
const firstTube = new Tube(3, 2, 4);

console.log(firstTriangle.getDefinition());

console.log(firstTriangle.isCongruent(secondTriangle));
console.log(secondTriangle.isIdentical(firstTriangle));

console.log(firstRectangle.getDefinition());
console.log(firstSquare.getDefinition());
console.log(firstCircle.getDefinition());
console.log(firstRhombus.getDefinition());
console.log(firstParallelogram.getDefinition());
console.log(firstPolygon.getDefinition());
console.log(firstStadium.getDefinition());
console.log(firstDistance2D.getDefinition());
console.log(firstAnnulus.getDefinition());

console.log(firstCone.getDefinition());
console.log(firstCylinder.getDefinition());
console.log(firstSphere.getDefinition());
console.log(firstCube.getDefinition());
console.log(firstConicalFrustum.getDefinition());
console.log(firstCapsule.getDefinition());
console.log(firstHemisphere.getDefinition());
console.log(firstPyramid.getDefinition());
console.log(firstCuboid.getDefinition());
console.log(firstDistance3D.getDefinition());
console.log(firstTube.getDefinition());
