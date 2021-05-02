import { Triangle } from "../two-dimensional/triangle/triangle.js";
import { Rectangle } from "../two-dimensional/rectangle/rectangle.js";
import { Square } from "../two-dimensional/square/square.js";
import { Circle } from "../two-dimensional/circle/circle.js";
import { Rhombus } from "../two-dimensional/rhombus/rhombus.js";
import { Parallelogram } from "../two-dimensional/parallelogram/parallelogram.js";
import { Polygon } from "../two-dimensional/polygon/polygon.js";
import { Stadium } from "../two-dimensional/stadium/stadium.js";
import { Distance2D } from "../two-dimensional/distance-2D/distance-2D.js";
import { Annulus } from "../two-dimensional/annulus/annulus.js";
import { QuadraticFunction } from "../functions/quadratic-function/quadratic-function.js";
import { LinearFunction } from "../functions/linear-function/linear-function.js";

import { Cone } from "../three-dimensional/cone/cone.js";
import { Cylinder } from "../three-dimensional/cylinder/cylinder.js";
import { Sphere } from "../three-dimensional/sphere/sphere.js";
import { Cube } from "../three-dimensional/cube/cube.js";
import { ConicalFrustum } from "../three-dimensional/conical-frustum/conical-frustum.js";
import { Capsule } from "../three-dimensional/capsule/capsule.js";
import { Hemisphere } from "../three-dimensional/hemisphere/hemisphere.js";
import { Pyramid } from "../three-dimensional/pyramid/pyramid.js";
import { Cuboid } from "../three-dimensional/cuboid/cuboid.js";
import { Distance3D } from "../three-dimensional/distance-3D/distance-3D.js";
import { Tube } from "../three-dimensional/tube/tube.js";

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
const firstQuadraticFunction = new QuadraticFunction(-4, 4, 1);
const firstLinearFunction = new LinearFunction(4, 2);

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
console.log(firstQuadraticFunction.getDefinition());
console.log(firstLinearFunction.getDefinition());

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
