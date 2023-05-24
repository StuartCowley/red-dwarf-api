# Red Dwarf Space Corps Directives API

A simple express app serving space corps directives, searchable by number, word or series

WORK IN PROGRESS

## Endpoints

| Route                                 | HTTP VERB | Parameter | Description                                                      |
| ------------------------------------- | --------- | --------- | ---------------------------------------------------------------- |
| /directives/all                       | GET       |           | Returns all directives, grouped in arrays of numbered/unnumbered |
| /directives/numbered                  | GET       |           | Returns all directives that have a number assigned               |
| /directives/numbered/:directiveNumber | GET       | Number    | Returns info about a specified directive (if it exists)          |
| /directives/unnumbered                | GET       |           | Returns all directives that have no number assigned              |
| /directives/search-by-word/:word      | GET       | String    | Returns all directives with the given string in their wording    |
| /directives/by-series/:series         | GET       | Number    | Returns all directives mentioned in the given series             |

## General info and caveats

- Back to earth is referred to as series 9 for data consistency
- The Promised Land (Full length movie - 2020) is referred to as series 13 episode 1
- The `notes` content provides a bit of context where needed about directives that are used but do not have a directive number, or other useful info.

## Results for full schema example

```json
{
  "numberedDirectives": [
    {
      "directiveNumber": "003",
      "content": "By joining Star Corps each individual tacitly consents to give up his inalienable rights to life, liberty and adequate toilet facilities.",
      "references": [
        {
          "series": null,
          "episodeNumber": null,
          "episodeName": null
        },
        ...
      ],
      "notes": "From the Red Dwarf Log Book (1996)"
    },
    ...
  ],
  "unnumberedDirectives": [
    {
      "content": "It is our primary overriding duty to contact other life forms, exchange information, and, wherever possible, bring them home.",
      "references": [
        {
          "series": 3,
          "episodeNumber": 3,
          "episodeName": "Polymorph"
        },
        ...
      ],
      "notes": "From the Red Dwarf Log Book (1996)"
    },
    ...
  ]
}

```

## Future development

- Add chronological episode number for each usage
- Add Rimmer directives

If you want to request a feature, ask for a correction or anything else please get in touch at stu_cowley@hotmail.com or submit a pull request
