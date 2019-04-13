"use strict";
System.config({
    paths: {
        'npm:': 'node_modules/'
    },
    map: {
        'app': './',
        'lodash': 'npm:lodash/lodash.js'
    },
    packages: {
        'app': {
            main: './main.js',
            defaultExtension: 'js'
        }
    }
});
//# sourceMappingURL=system-config.js.map