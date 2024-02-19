---
title : "Resume Parsing"
description : "Detailed guide on the request parameters for customizing API calls to Aipify."
---

### Example:
After creating `parse_resume` endpoint with four fields `name`, `email`of type `string`, 
and `skills` as an `array`  we can use this sample text for our request:
`skills` is an array of objects with a single field `name` of type `string`

#### Sample Resume Summary:
`John Doe, johndoe@example.com
Highly motivated Front-End Developer with 5+ years of experience building user-centric and responsive web applications. Proven ability to deliver high-quality code using HTML, CSS, JavaScript frameworks (React, Vue.js, etc.), and best practices. Eager to contribute to a collaborative team environment and continuously learn new technologies
`

#### Request:
```bash[Terminal]
    curl --request POST \
      --url https://api.aipify.co/parse_resume \
      --header 'Authorization: Bearer daa015e25ee5b85xxxxxxxxxxxx' \
      --header 'Content-Type: application/json' \
      --data '{
        "messages" : [
           { "role": "user", "content": `Parse this resume: ${text}` }
        ]
      }'
```

#### Response:

```json
{
	"data": {
		"name": "John Doe",
		"email": "johndoe@example.com",
		"skills": [
			{
				"name": "HTML"
			},
			{
				"name": "CSS"
			},
			{
				"name": "JavaScript"
			},
			{
				"name": "React"
			},
			{
				"name": "Vue.js"
			}
		]
	}
}
```