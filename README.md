# Mini Microservice -> Learning purposes

## Summary
This repo was build with learning purposes, it shows how a microservices work in a minimun scaled version. Solving one of the main issues of microservices, data transfer between different services.
Additionally, to make things "easier", Docker and Kubernetes were implemented. It might be a nightmare to implement, but once your have it running, it makes thing much more easier!

## Services
- ``/client`` -> front-end, using create-react-app.
- ``/comments`` -> express service.
- ``/event-bus`` -> express service. Manage all the events.
- ``/moderation`` -> express service. Moderates comments
- ``/posts`` -> express service.
- ``/query`` -> express service. Where the client service fetch data.
- ``/infra/k8s`` -> kubernetes config files are stored, deployment, services, etc.

## Setup
In order to run and test this repo locally, it is necessary to have docker and kubernetes running, plus having [skaffold](https://skaffold.dev/) installed.

Once you are ready, run the following command inside the root directory:
```bash
    $ skaffold dev
```

Skaffold simplifies our development process.