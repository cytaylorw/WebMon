# WebMon

A Node.js application built to check status for websties. The initial version only support adding new sites by files. Planning to do a DB version.

## Demo

http://example.taylorw.tw:60009

## Installation

Use `npm install` to install the dependencies.

## Configuration

#### To be done before starting server 

1. Edit `config.js` to configure the application.
2. Add a new item to `menus` array for a new menu link.
    - The name value is for mapping the data file in the next step.

```javascript
menus: [
        {
            name: 'github',
            label: 'GitHub Pages',
        }
    ]
```

#### Can be modified after server started

1. Create file `/public/data/${menus.name}.js` for table body values.
    - Add an Object to define a new link. Otherwise, diplay as text.
    - The status in the first column is for the first link.
    - Only properties defined in `header.js` will be displayed.

```javascript
let data = [
    {
        name: 'GitHub',
        url: {
            text: '',
            href: 'https://github.com/cytaylorw',
        },
        description: 'Empty Text Test'
    }
    
];
```

2. Update file `/public/data/header.js` for table header texts starting from the second column.

 ```javascript
let header = {
    name: 'Name',
    url: 'URL',
    description: 'Description'
};
 ```

## License

MIT
