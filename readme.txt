
Use Bootstrap:

npm install bootstrap@4.5.0

npm install jquery@3.5.1

npm install @popperjs/core


In angular.json

 "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css",
              "node_modules/font-awesome/css/font-awesome.css",
              "node_modules/ngx-toastr/toastr.css"
            ],
            "scripts": [
                "node_modules/jquery/dist/jquery.slim.min.js",
                "node_modules/popper.js/dist/umd/popper.min.js",
                "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]


USE awesome Fonts:

npm install font-awesome --save

Make necessary changes in angular.json as above

USE toastr notifications:

npm install ngx-toastr --save

npm install @angular/animations --save (Check package.json if already installed througn another pacakges)

make changes in angular.json as above and use ToastrModule.forRoot(), Imports in app.module.ts



USE SOCIAL LOGIN library:

npm i angularx-social-login

see app.module.ts and home.component.ts for using it


USE angular material (It actually adds angular animations so you can avoid npm install @angular/animations --save during toastr)
ng add @angular/material

to use angular material you should have bootstrap installed

ng add vs npm install

ng add
ng add <package> uses your package manager and installs the dependency. That dependency can have an installation script which can be used to do more job except the dependency installation. It can update your configurations, download another dependencies based on that one or create scaffold templates (with initial markup and logic).

To use ng add for a third party dependency, that team must provide schematics which describes the installation script. This can include some .scss or .css or related .js files to be included in the angular.json file.

In your provided link, you can install material package and also create some components with components

npm install
npm install <package> just installs the dependency.