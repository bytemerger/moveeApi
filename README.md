
# MoveeApi

An API for Starwars movie


## Indices

* [Characters](#characters)

  * [List Characters](#1-list-characters)

* [Movies](#movies)

  * [Add comment](#1-add-comment)
  * [Get Movies](#2-get-movies)
  * [List comments](#3-list-comments)

* [Ungrouped](#ungrouped)

  * [Check Health](#1-check-health)


--------


## Characters



### 1. List Characters


Get all Characters
To sort add sort query params
```?sort=height or gender or name```
To put the order of the sort add order query param
```?order= asc or desc```
To filter by gender add filter query params
```?filter=male or female```


***Endpoint:***

```bash
Method: GET
Type: 
URL: 
```



***More example Requests/Responses:***


##### I. Example Request: List Characters 



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| sort | height |  |
| order | desc |  |



##### I. Example Response: List Characters 
```js
{
    "data": [
        {
            "name": "Chewbacca",
            "height": "228",
            "mass": "112",
            "hair_color": "brown",
            "skin_color": "unknown",
            "eye_color": "blue",
            "birth_year": "200BBY",
            "gender": "male",
            "homeworld": "https://swapi.dev/api/planets/14/",
            "films": [
                "https://swapi.dev/api/films/1/",
                "https://swapi.dev/api/films/2/",
                "https://swapi.dev/api/films/3/",
                "https://swapi.dev/api/films/6/"
            ],
            "species": [
                "https://swapi.dev/api/species/3/"
            ],
            "vehicles": [
                "https://swapi.dev/api/vehicles/19/"
            ],
            "starships": [
                "https://swapi.dev/api/starships/10/",
                "https://swapi.dev/api/starships/22/"
            ],
            "created": "2014-12-10T16:42:45.066000Z",
            "edited": "2014-12-20T21:17:50.332000Z",
            "url": "https://swapi.dev/api/people/13/"
        },
        {
            "name": "Roos Tarpals",
            "height": "224",
            "mass": "82",
            "hair_color": "none",
            "skin_color": "grey",
            "eye_color": "orange",
            "birth_year": "unknown",
            "gender": "male",
            "homeworld": "https://swapi.dev/api/planets/8/",
            "films": [
                "https://swapi.dev/api/films/4/"
            ],
            "species": [
                "https://swapi.dev/api/species/12/"
            ],
            "vehicles": [],
            "starships": [],
            "created": "2014-12-19T17:32:56.741000Z",
            "edited": "2014-12-20T21:17:50.385000Z",
            "url": "https://swapi.dev/api/people/37/"
        },
        {
            "name": "Rugor Nass",
            "height": "206",
            "mass": "unknown",
            "hair_color": "none",
            "skin_color": "green",
            "eye_color": "orange",
            "birth_year": "unknown",
            "gender": "male",
            "homeworld": "https://swapi.dev/api/planets/8/",
            "films": [
                "https://swapi.dev/api/films/4/"
            ],
            "species": [
                "https://swapi.dev/api/species/12/"
            ],
            "vehicles": [],
            "starships": [],
            "created": "2014-12-19T17:33:38.909000Z",
            "edited": "2014-12-20T21:17:50.388000Z",
            "url": "https://swapi.dev/api/people/38/"
        },
        ....
    ],
    "meta_data": {
        "total": 82,
        "totalHeightcm": 14143,
        "totalHeightFeet": 464.0092012,
        "totalHeightInches": 5568.113243000001
    }
}
```


***Status Code:*** 200

<br>



##### II. Example Request: List Characters Invalid Request parameter



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| sort | height |  |
| order | round |  |
| test | false |  |



##### II. Example Response: List Characters Invalid Request parameter
```js
{
    "code": 400,
    "message": {
        "test": "The value test is not a required request parameter"
    }
}
```


***Status Code:*** 400

<br>



##### III. Example Request: List Characters successful example



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| order | desc |  |
| sort | gender |  |
| filter | male |  |



##### III. Example Response: List Characters successful example
```js
{
    "data": [
        {
            "name": "Luke Skywalker",
            "height": "172",
            "mass": "77",
            "hair_color": "blond",
            "skin_color": "fair",
            "eye_color": "blue",
            "birth_year": "19BBY",
            "gender": "male",
            "homeworld": "https://swapi.dev/api/planets/1/",
            "films": [
                "https://swapi.dev/api/films/1/",
                "https://swapi.dev/api/films/2/",
                "https://swapi.dev/api/films/3/",
                "https://swapi.dev/api/films/6/"
            ],
            "species": [],
            "vehicles": [
                "https://swapi.dev/api/vehicles/14/",
                "https://swapi.dev/api/vehicles/30/"
            ],
            "starships": [
                "https://swapi.dev/api/starships/12/",
                "https://swapi.dev/api/starships/22/"
            ],
            "created": "2014-12-09T13:50:51.644000Z",
            "edited": "2014-12-20T21:17:56.891000Z",
            "url": "https://swapi.dev/api/people/1/"
        },
        {
            "name": "Darth Vader",
            "height": "202",
            "mass": "136",
            "hair_color": "none",
            "skin_color": "white",
            "eye_color": "yellow",
            "birth_year": "41.9BBY",
            "gender": "male",
            "homeworld": "https://swapi.dev/api/planets/1/",
            "films": [
                "https://swapi.dev/api/films/1/",
                "https://swapi.dev/api/films/2/",
                "https://swapi.dev/api/films/3/",
                "https://swapi.dev/api/films/6/"
            ],
            "species": [],
            "vehicles": [],
            "starships": [
                "https://swapi.dev/api/starships/13/"
            ],
            "created": "2014-12-10T15:18:20.704000Z",
            "edited": "2014-12-20T21:17:50.313000Z",
            "url": "https://swapi.dev/api/people/4/"
        }...
    ],
    "meta_data": {
        "total": 5,
        "totalHeightcm": 917,
        "totalHeightFeet": 30.0853028,
        "totalHeightInches": 361.023817
    }
}
```


***Status Code:*** 200

<br>



##### IV. Example Request: List Characters Wrong Request parameter Input



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| sort | height |  |
| order | round |  |



##### IV. Example Response: List Characters Wrong Request parameter Input
```js
{
    "code": 400,
    "message": {
        "order": [
            "The selected order is invalid."
        ]
    }
}
```


***Status Code:*** 400

<br>



## Movies
Movies api routes



### 1. Add comment


Add new to comment
```{{baseUrl}}/api/v1/movies/:id/comment```

``id`` episode_id


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{baseUrl}}/api/v1/movies/:id/comment
```



***URL variables:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 3 |  |



***Body:***

```js        
{
    "IP":"139.223.24",
    "commenter":"Uche",
    "body":"Test comment"
}
```



***More example Requests/Responses:***


##### I. Example Request: Add Comment



***Body:***

```js        
{
    "IP":"139.223.24",
    "commenter":"Uche",
    "body":"Test comment"
}
```



##### I. Example Response: Add Comment
```js
{
    "data": {
        "id": 2,
        "IP": "139.223.24",
        "commenter": "Uche",
        "body": "Test comment",
        "movieId": "3",
        "createdAt": "2021-11-15T07:34:14.269Z"
    }
}
```


***Status Code:*** 200

<br>



##### II. Example Request: Add comment Incorrect Id



***Body:***

```js        
{
    "IP":"139.223.24",
    "commenter":"Uche",
    "body":"Test comment"
}
```



##### II. Example Response: Add comment Incorrect Id
```js
{
    "code": 400,
    "message": {
        "id": [
            "The id field is required."
        ]
    }
}
```


***Status Code:*** 400

<br>



##### III. Example Request: Add comment Invalid Body



***Body:***

```js        
{
    
}
```



##### III. Example Response: Add comment Invalid Body
```js
{
    "code": 400,
    "message": {
        "IP": [
            "The IP field is required."
        ],
        "body": [
            "The body field is required."
        ],
        "commenter": [
            "The commenter field is required."
        ]
    }
}
```


***Status Code:*** 400

<br>



### 2. Get Movies


Get movies


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{baseUrl}}/api/v1/movies
```



***More example Requests/Responses:***


##### I. Example Request: Get Movies



##### I. Example Response: Get Movies
```js
{
    "data": [
        {
            "title": "A New Hope",
            "episode_id": 4,
            "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
            "release_date": "1977-05-25",
            "comment": 0
        },
        {
            "title": "Attack of the Clones",
            "episode_id": 2,
            "opening_crawl": "There is unrest in the Galactic\r\nSenate. Several thousand solar\r\nsystems have declared their\r\nintentions to leave the Republic.\r\n\r\nThis separatist movement,\r\nunder the leadership of the\r\nmysterious Count Dooku, has\r\nmade it difficult for the limited\r\nnumber of Jedi Knights to maintain \r\npeace and order in the galaxy.\r\n\r\nSenator Amidala, the former\r\nQueen of Naboo, is returning\r\nto the Galactic Senate to vote\r\non the critical issue of creating\r\nan ARMY OF THE REPUBLIC\r\nto assist the overwhelmed\r\nJedi....",
            "release_date": "2002-05-16",
            "comment": 0
        },
        {
            "title": "Revenge of the Sith",
            "episode_id": 3,
            "opening_crawl": "War! The Republic is crumbling\r\nunder attacks by the ruthless\r\nSith Lord, Count Dooku.\r\nThere are heroes on both sides.\r\nEvil is everywhere.\r\n\r\nIn a stunning move, the\r\nfiendish droid leader, General\r\nGrievous, has swept into the\r\nRepublic capital and kidnapped\r\nChancellor Palpatine, leader of\r\nthe Galactic Senate.\r\n\r\nAs the Separatist Droid Army\r\nattempts to flee the besieged\r\ncapital with their valuable\r\nhostage, two Jedi Knights lead a\r\ndesperate mission to rescue the\r\ncaptive Chancellor....",
            "release_date": "2005-05-19",
            "comment": 2
        }
    ]
}
```


***Status Code:*** 200

<br>



### 3. List comments


List movie comments

```{{baseUrl}}/api/v1/movies/:id/comment```

``id`` episode_id


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{baseUrl}}/api/v1/movies/:id/comment
```



***URL variables:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 3 |  |



***More example Requests/Responses:***


##### I. Example Request: List comments Invalid Request Param



##### I. Example Response: List comments Invalid Request Param
```js
{
    "code": 400,
    "message": {
        "id": [
            "The id must be an integer."
        ]
    }
}
```


***Status Code:*** 400

<br>



##### II. Example Request: List comments



##### II. Example Response: List comments
```js
{
    "data": [
        {
            "id": 3,
            "IP": "139.223.24",
            "movieId": 3,
            "commenter": "Uche",
            "body": "Test comment",
            "createdAt": "2021-11-15T08:05:13.000Z"
        },
        {
            "id": 2,
            "IP": "139.223.24",
            "movieId": 3,
            "commenter": "Uche",
            "body": "Test comment",
            "createdAt": "2021-11-15T08:05:04.000Z"
        },
        {
            "id": 1,
            "IP": "139.223.24",
            "movieId": 3,
            "commenter": "Uche",
            "body": "Test comment",
            "createdAt": "2021-11-15T08:05:03.000Z"
        }
    ]
}
```


***Status Code:*** 200

<br>



## Ungrouped



### 1. Check Health


Check the health of the api to make sure it is live


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{baseUrl}}/health
```



***More example Requests/Responses:***


##### I. Example Request: Check Health



##### I. Example Response: Check Health
```js
{
    "message": "Api is Alive and Working"
}
```


***Status Code:*** 200

<br>



---
[Back to top](#moveeapi)
