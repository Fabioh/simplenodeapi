#!/usr/bin/env bash

# inicia um novo mongodb container
# para servir de bando de dados para a api
docker run --rm --name mongo_simplenodeapi -d -p 27017:27017 -d mongo:3.6