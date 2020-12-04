# Thinking process

When I saw the test initially, I thought it can be resolved by using tree data structure and algorithm. By putting more considerations on it, I realised the standard tree data structure didn't work. Because every node in tree structure usually has one parent and multiple children. The spouse relationship can NOT be represented well in this model.

Then I thought the core entity of this family tree model is `Family`. So I started to build this `Family` model with simply three basic properties: `father`, `mother`, `children`. The key concept is, with the same person, he/she at least belongs to one family with his/her father and mother, as well as other siblings. Optionally, he/she could also be invoved in other families with spouse and chilren.

# Extensibility and limitation

This model works well with the current requirements, and is possible to add features such as:

1. Relationship traversals (eg. find out your brother-in-law in the family).
2. Divorced and/or remarried (by creating a new family).
3. Child adoption.

However, with the properties named as `father` and `mother`, if the same model needs to support LGBT families, further considerations are required.

# Todo

1. Data persistence. With only limited time, I haven't put much thought about how to store the data. In terms of how to model the tables if using SQL databases. Or if a NoSQL solution is better.
2. API implementation. For presenting the family tree in the UI, ideally the data of the whole family can be structured in the JSON format so it would be easy to digest from the frontend app.

# Test

Given the assumption that Node.js environment has been installed and configured on local, simply run

```javascript
yarn && yarn test

// or

npm install && npm run test
```
