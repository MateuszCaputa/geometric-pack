# Geometric pack

Geometric calculator created with Node.js

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Launch](#launch)
- [Example of use](#example-of-use)

## General info

This project is geometric pack with lots of available calculations on any figure

## Technologies

Project is created with:

- node: 12.18.3

## Setup

To run this project, install it locally using npm:

```
$ cd ../lorem
$ npm install
$ npm start
```

## Launch

To use available calculations in this project you will have to create object of class you want to use and start available methods

Available classes:

- Two-dimensional

  - Triangle, You have to use three arguments and program will take
    them as a sides of triangle 'a', 'b', 'c', you can write them
    in any order you want because program will sort them a < b < c

  - Rectangle, You have to use two arguments and program will take
    them as a sides of rectangle 'a', 'b', program will
    not sort them in any order

  - Square, You have to use one argument and
    program will take it as a side of square 'a'

  - Circle, You have to use one argument and
    program will take it as a radius of circle 'r'

  - Rhombus, You have to use two arguments and
    program will take them as side 'a'
    and height 'h' in exact order

  - Parallelogram, You have to use three arguments
    and program will take them as side 'a', side 'b'
    and height 'h' in exact order

  - Polygon, It's a regular polygon so you have to
    use two arguments and program will take them as
    side 'a' and number of sides 'n' where 3 <= n <= 14
    in exact order

  - Stadium, You have to use two arguments and
    program will take them as side length 'a'
    and radius 'r' in exact order

  - Distance2D, You have to use four arguments
    and program will take them as coordinates
    'x1', 'y1', 'x2', 'y2' in exact order

- Three-dimensional

  - Cone, You have to use two arguments and
    program will take them as radius 'r' and
    height 'h' in exact order

  - Cylinder, You have to use two arguments and
    program will take them as radius 'r' and
    height 'h' in exact order

  - Sphere, You have to use one argument and
    program will take it as radius 'r'

  - Cube, You have to use one argument and
    program will take it as length side 'a'

  - ConicalFrustum, You have to use three
    arguments and program will take them as
    radius1 'r1', radius2 'r2' and height 'h'
    in exact order

  - Capsule, You have to use two arguments
    and program will take them as sideLength
    'a' and radius 'r' in exact order

  - Hemisphere, You have to use two one
    argument and program will take it as
    radius 'r'

  - Pyramid, You have to use two arguments
    and program will take them as side length
    'a' and height 'h' in exact order

  - Cuboid, You have to use three arguments
    and program will take them as length 'l',
    width 'w' and height 'h' in exact order

  - Distance3D, You have to use six arguments
    and program will take them as coordinates
    'x1', 'y1', 'z1', 'x2', 'y2', 'z2' in exact
    order

## Example of use

You can check example how this program works in src/utils/example.js
