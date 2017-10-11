install:
	npm install

run-local:
	docker-compose up -d
	npm run watch

build:
	npm run build
	docker build -t premiersted-frontend:latest .

run:
	docker rm -f premiersted-frontend
	docker run --name premiersted-frontend -p 80:80 premiersted-frontend:latest
