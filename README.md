# Red Dwarf Space Corps Directives API

A simple express app serving space corps directives, searchable by number or episode name, and filterable by season or episode

WORK IN PROGRESS

## Endpoints

| Route                        | HTTP VERB | Description                                                      |
| ---------------------------- | --------- | ---------------------------------------------------------------- |
| /directives                  | GET       | Returns all directives, grouped in arrays of numbered/unnumbered |
| /directives/numbered         | GET       | Returns all directives that have a number assigned               |
| /directives/unnumbered       | GET       | Returns all directives that have no number assigned              |
| /directives/:directiveNumber | GET       | Returns info about a specified directive (if it exists)          |

## Series info

- Back to earth is referred to as series 9 for data consistency

## Results structure

TODO: Finalise and add
