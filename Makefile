build:
	docker build -t premiersted-frontend:latest .

run:
	docker rm -f premiersted-frontend
	docker run --name premiersted-frontend -p 8080:80 premiersted-frontend:latest
