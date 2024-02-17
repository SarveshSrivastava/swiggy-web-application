# React Application from scratch with out using create react app

# Setup testing
- install react testing library
- install jest
- install other babel configuration from jest page
- create babel.confog.js
- configure to disable babel by parcel and use babel.config.js (.parcelrc file can be found in parcel site in usage with other tools)
- npm run test (in package.json we have defined jest as test in scripts tag )
- initialize jest --> npx jest --init
- install jsDom --> npm install --save-dev jest-environment-jsdom (react testing library docs)
- create a folder with name __tests__ where we will have all our test files
- __tests__ --> __ --> this is known as dunder (FYI)
- install @babel/preset-react and include in babel.config.js this is required to make jsx work in test cases
- install @testing-library/jest-dom