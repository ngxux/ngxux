
all: version-patch build publish

build:

	ng build mat-admin

version-patch:

	cd projects/mat-admin && npm version patch

publish:

	cd dist/mat-admin && npm publish --access public
