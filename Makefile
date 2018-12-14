
all: version-patch build publish

build:

	ng build $(PROJECT)

version-patch:

	cd projects/$(PROJECT) && npm version patch

publish:

	cd dist/$(PROJECT) && npm publish --access public
