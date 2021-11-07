import { Triangle } from "./two-dimensional/triangle/triangle";
import { Rectangle } from "./two-dimensional/rectangle/rectangle";
import { Square } from "./two-dimensional/square/square";
import { Circle } from "./two-dimensional/circle/circle";
import { Rhombus } from "./two-dimensional/rhombus/rhombus";
import { Parallelogram } from "./two-dimensional/parallelogram/parallelogram";
import { Polygon } from "./two-dimensional/polygon/polygon";
import { Stadium } from "./two-dimensional/stadium/stadium";
import { Distance2d } from "./two-dimensional/distance-2d/distance-2d";
import { Annulus } from "./two-dimensional/annulus/annulus";
import { QuadraticFunction } from "./functions/quadratic-function/quadratic-function";
import { LinearFunction } from "./functions/linear-function/linear-function";

import { Cone } from "./three-dimensional/cone/cone";
import { Cylinder } from "./three-dimensional/cylinder/cylinder";
import { Sphere } from "./three-dimensional/sphere/sphere";
import { Cube } from "./three-dimensional/cube/cube";
import { ConicalFrustum } from "./three-dimensional/conical-frustum/conical-frustum";
import { Capsule } from "./three-dimensional/capsule/capsule";
import { Hemisphere } from "./three-dimensional/hemisphere/hemisphere";
import { Pyramid } from "./three-dimensional/pyramid/pyramid";
import { Cuboid } from "./three-dimensional/cuboid/cuboid";
import { Distance3d } from "./three-dimensional/distance-3d/distance-3d";
import { Tube } from "./three-dimensional/tube/tube";

const firstTriangle = new Triangle(5, 3, 4);
const firstRectangle = new Rectangle(5, 2);
const firstSquare = new Square(5);
const firstCircle = new Circle(7);
const firstRhombus = new Rhombus(5, 4);
const firstParallelogram = new Parallelogram(10, 12, 8);
const firstPolygon = new Polygon(3, 5);
const firstStadium = new Stadium(4, 2);
const firstDistance2d = new Distance2d(-7, -4, 17, 6.5);
const firstAnnulus = new Annulus(3, 1);
const firstQuadraticFunction = new QuadraticFunction(-4, 4, 1);
const firstLinearFunction = new LinearFunction(4, 2);

const secondTriangle = new Triangle(10, 6, 8);

const firstCone = new Cone(3, 7);
const firstCylinder = new Cylinder(4, 6);
const firstSphere = new Sphere(6);
const firstCube = new Cube(5);
const firstConicalFrustum = new ConicalFrustum(3, 4, 5);
const firstCapsule = new Capsule(5, 4);
const firstHemisphere = new Hemisphere(9);
const firstPyramid = new Pyramid(3, 8);
const firstCuboid = new Cuboid(5, 2, 3);
const firstDistance3d = new Distance3d(7, 4, 3, 17, 6, 2);
const firstTube = new Tube(3, 2, 4);

console.log("Triangle:", firstTriangle.getDefinition());

console.log("isCongruent:", firstTriangle.isCongruent(secondTriangle));
console.log("isSimilar:", secondTriangle.isSimilar(firstTriangle));

console.log("Rectangle:", firstRectangle.getDefinition());
console.log("Square:", firstSquare.getDefinition());
console.log("Circle:", firstCircle.getDefinition());
console.log("Rhombus:", firstRhombus.getDefinition());
console.log("Parallelogram:", firstParallelogram.getDefinition());
console.log("Polygon:", firstPolygon.getDefinition());
console.log("Stadium:", firstStadium.getDefinition());
console.log("Distance2d:", firstDistance2d.getDefinition());
console.log("Annulus:", firstAnnulus.getDefinition());
console.log("QuadraticFunction:", firstQuadraticFunction.getDefinition());
console.log("LinearFunction:", firstLinearFunction.getDefinition());

console.log("Cone:", firstCone.getDefinition());
console.log("Cylinder:", firstCylinder.getDefinition());
console.log("Sphere:", firstSphere.getDefinition());
console.log("Cube:", firstCube.getDefinition());
console.log("ConicalFrustum:", firstConicalFrustum.getDefinition());
console.log("Capsule:", firstCapsule.getDefinition());
console.log("Hemisphere:", firstHemisphere.getDefinition());
console.log("Pyramid:", firstPyramid.getDefinition());
console.log("Cuboid:", firstCuboid.getDefinition());
console.log("Distance3d:", firstDistance3d.getDefinition());
console.log("Tube:", firstTube.getDefinition());
