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

## Example of use

You can check example how this program works in src/example.js
