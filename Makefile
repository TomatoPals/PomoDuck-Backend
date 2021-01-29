ifneq (,$(wildcard ./.env))
    include .env
    export
endif

build-prod:
	docker build -t pomoduck-backend:v0.1.0-prod -f build/Dockerfile.prod .

run-prod:
	docker run -d -p 3000:3000 pomoduck-backend:v0.1.0-prod