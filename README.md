# Camarines Emergency Hotline API

A lightweight **Node.js and Express** API that provides emergency hotline numbers for municipalities in Camarines Sur.  
The data is stored in **JSON format** and can be queried using **GET requests** at the district or municipality level.

---

## Features

- 📞 Provides emergency hotline information for each municipality in Camarines Sur.
- 📂 JSON-based data storage for easy maintenance and updates.
- 🔎 Query hotlines by **district** or by **district + municipality**.
- ⚡ Simple GET-only API — no database required.

---

## Data Structure

The API data is organized by **districts**, with each district containing its municipalities.  
Example JSON structure:

```json
{
  "districts": [
    {
      "id": 1,
      "name": "District Number",
      "municipalities": [
        {
          "id": 1,
          "name": "Municipalty Name",
          "hotline": "123-4567"
        }
      ]
    }
  ]
}
```
