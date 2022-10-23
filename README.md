# olympic games api

## How to run project?

1. Fill in the .env file with the necessary data and run the database:

```bash
docker-compose up -d
```

2. Install dependencies:

```bash
npm install
```

3. Run migration:

```bash
npm run typeorm:run
```

4. Run project:

```bash
npm start
```

5. Check if swagger working: `http://localhost:3003/docs/`
