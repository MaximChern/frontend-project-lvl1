install:
	npm install
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
even:
	node bin/brain-even.js
calc:
	node bin/brain-calc.js
nod:
	node bin/brain-gcd.js
progression:
	node bin/brain-progression.js
prime:
	node bin/brain-prime.js
	
	