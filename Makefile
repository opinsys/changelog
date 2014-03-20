

export PATH := node_modules/.bin:$(PATH)


all: npm browserify

npm:
	npm install

minify: browserify

browserify:
	browserify -d index.js -o bundle.js

browserify-watch:
	watchify -v -d index.js -o bundle.js

commit-js: browserify
	uglifyjs bundle.js -o bundle.js
	git add -f bundle.js
	git commit bundle.js -m "update bundle"

