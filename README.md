# Installation des outils 

## Node et npm 

Télécharger et installer Node.js [ici](https://nodejs.org/fr)

```txt
node -v
npm -v 
```

## TypeScript 

```txt
npm install -g typescript
tsc --version
```

## Angular 

```
npm install -g @angular/cli
ng version
```

## Docker 

Télécherger et installer Docker [ici](https://www.docker.com/)

# Dépendances 

## PostgreSQL 
```txt
npm install @nestjs/typeorm typeorm pg
```

## Swagger 
```txt
npm install @nestjs/swagger swagger-ui-express
```

## Angular Materials (pour les composants UI)
```txt
ng add @angular/material
```

## Jest (pour les tests)
```txt
npm install --save-dev jest @nestjs/testing ts-jest
```
# Commandes pour lancer les applications

## Backend
```
npm run start:dev
```

## Frontend 

```txt
ng serve
```

## PostgreSQL (dans un conteneur Docker)

```txt
docker compose up -d
```

