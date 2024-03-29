# Geometric pack

Geometric calculator created with TypeScript

The package supports accuracy up to 12 decimal places.

## Table of contents

- [General info](#general-info)
- [Example](#example)
- [Launch](#launch)
- [Setup](#setup)
- [Technologies](#technologies)

## General info

Geometric pack with lots of available calculations for 2D and 3D geometry

## Example

```ts
import { Triangle } from "geometric-pack";

const firstTriangle = new Triangle(5, 3, 4);
const secondTriangle = new Triangle(10, 6, 8);

console.log(firstTriangle.isCongruent(secondTriangle)); // False
console.log(firstTriangle.isSimilar(secondTriangle)); // True
```

You can also check more examples by running `.getDefinition()` method on other classes or by running example file

```
$ node node_modules/geometric-pack/dist/utils/example
```

## Launch

To use available calculations in this project you will have to create object of class you want to use and start available methods

```ts
import { Triangle } from "geometric-pack";

const firstTriangle = new Triangle(5, 3, 4);

console.log(firstTriangle.getDefinition());

// returns:
// {
//   sideLengthA: 3,
//   sideLengthB: 4,
//   sideLengthC: 5,
//   circumference: 12,
//   area: 6,
//   rightAngle: true,
//   heights: { heightOfBaseA: 4, heightOfBaseB: 3, heightOfBaseC: 2.4 },
//   angles: { gamma: 90, beta: 53.13010235415598, alpha: 36.86989764584402 },
//   outerCircleRadius: 2.5,
//   innerCircleRadius: 1
// }
```

Available classes:

- Two-dimensional

  - `Triangle`, You have to use three arguments and program will take
    them as a sides of triangle 'a', 'b', 'c', you can write them
    in any order you want because program will sort them a < b < c

  - `Rectangle`, You have to use two arguments and program will take
    them as a sides of rectangle 'a', 'b', program will
    not sort them in any order

  - `Square`, You have to use one argument and
    program will take it as a side of square 'a'

  - `Circle`, You have to use one argument and
    program will take it as a radius of circle 'r'

  - `Rhombus`, You have to use two arguments and
    program will take them as side 'a'
    and height 'h' in exact order

  - `Parallelogram`, You have to use three arguments
    and program will take them as side 'a', side 'b'
    and height 'h' in exact order

  - `Polygon`, It's a regular polygon so you have to
    use two arguments and program will take them as
    side 'a' and number of sides 'n' where 3 <= n <= 14
    in exact order

  - `Stadium`, You have to use two arguments and
    program will take them as side length 'a'
    and radius 'r' in exact order

  - `Distance2D`, You have to use four arguments
    and program will take them as coordinates
    'x1', 'y1', 'x2', 'y2' in exact order

  - `Annulus`, You have to use two arguments and
    program will take them as outerRadius 'r1'
    and innerRadius 'r2' in exact order

  - `QuadraticFunction`, You have two use three arguments
    and program will take them as 'a', 'b' and 'c'
    of function in exact order

  - `LinearFunction`, You have to use two arguments and
    program will take them as 'a' and 'b' of
    function in exact order

- Three-dimensional

  - `Cone`, You have to use two arguments and
    program will take them as radius 'r' and
    height 'h' in exact order

  - `Cylinder`, You have to use two arguments and
    program will take them as radius 'r' and
    height 'h' in exact order

  - `Sphere`, You have to use one argument and
    program will take it as radius 'r'

  - `Cube`, You have to use one argument and
    program will take it as length side 'a'

  - `ConicalFrustum`, You have to use three
    arguments and program will take them as
    radius1 'r1', radius2 'r2' and height 'h'
    in exact order

  - `Capsule`, You have to use two arguments
    and program will take them as sideLength
    'a' and radius 'r' in exact order

  - `Hemisphere`, You have to use two one
    argument and program will take it as
    radius 'r'

  - `Pyramid`, You have to use two arguments
    and program will take them as side length
    'a' and height 'h' in exact order

  - `Cuboid`, You have to use three arguments
    and program will take them as length 'l',
    width 'w' and height 'h' in exact order

  - `Distance3D`, You have to use six arguments
    and program will take them as coordinates
    'x1', 'y1', 'z1', 'x2', 'y2', 'z2' in exact
    order

  - `Tube`, You have to use three arguments
    and program will take them as outerRadius
    'r1', innerRadius 'r2' and height 'h' in
    exact order

  ## Setup

  To run this project, install it locally using npm

  ```
  $ cd ../lorem
  $ npm init
  $ npm i geometric-pack
  ```

  ## Technologies

  Project is created with:

  - TypeScript: 4.3.5
