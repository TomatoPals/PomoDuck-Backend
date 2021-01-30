ifneq (,$(wildcard ./.env))
    include .env
    export
endif

build:
	docker build -t pomoduck-backend:v0.1.0-prod -f Dockerfile .

tag:
	docker tag pomoduck-backend:v0.1.0-prod  registry.digitalocean.com/pomoduck/pomoduck-backend:v0.1.0-prod

push:
	docker push registry.digitalocean.com/pomoduck/pomoduck-backend:v0.1.0-prod