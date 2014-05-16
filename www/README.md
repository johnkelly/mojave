
### With the Ionic tool:

Take the name after `ionic-starter-`, and that is the name of the template to be used when using the `ionic start` command below:
```

Then, to run it, cd into `myApp` and run:

```bash
$ ionic platform add ios
$ ionic build ios
$ ionic emulate ios
```

Substitute ios for android if not on a Mac, but if you can, the ios development toolchain is a lot easier to work with until you need to do anything custom to Android.


#Mojave

###Technology Stack
* Ionic Framework
* Angular JS
* iOs
* Android
* Cordova

###Tasks
* Run 'ionic serve' to start a web version of Mojave at localhost:8100
* Run sass --watch scss/app.scss:css/app.css to have sass compile to css as you edit scss files
* Run 'ionic build ios' to compile Mojave into an iOs application
* Run 'ionic emulate ios' to compile Mojave and start an iOs emulator
* Change 'app.constant('Host', 'http://localhost:5000'); in app.js to use your local version of Kalahari'
* Change 'app.constant('Host', 'https://kalahari.herokuapp.com/'); in app.js to use production Kalahari'

###Setup Web App
* sudo npm install -g ionic cordova
* git clone https://github.com/limitingfactor/mojave.git
* git clone https://github.com/limitingfactor/mojave.git


###Setup iOS
* Use a Mac
* Install xCode
* Run 'ionic platform add ios'

###Setup Android
* Several Steps (incomplete)
* Run 'ionic platform add android'
