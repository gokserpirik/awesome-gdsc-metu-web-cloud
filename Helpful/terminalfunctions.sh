function startlecture() {
 echo “starting” $1 “!”

 mkdir $1
 cd $1
 touch index.html
 touch styles.css
 touch script.js
 touch .gitignore
 touch README.md 
 code .
}