# ITTM Tech Test

## Installing

```
cd client
npm install

cd ../server
npm install
```

## Running

Open two tabs in your terminal:

```
cd client
npm start
```

```
cd server
npm start
```

The client will reload in the browser automatically when changes occur. The
server will restart automatically when changes occur to the source code or
graphql schema files.

## GraphQL Playground

You can launch the GraphQL playground to inspect the schema by going to
`http://localhost:8000`.

## Improvements

- Use a real REST data source
- Write tests for the server resolvers (ran out of time)
- Have different states for loading / errors when loading the GraphQL endpoints
- Have a UserDetail page using `react-router-dom`'s' `BrowserRouter` which lays
  the user out with nicer formatting than a table.

## Deployment

- write a docker file for the server
- write a circle ci file for both
- integrate circle ci with ECR and ECS for the server
- launch ECS service and task for this docker image, with an ALB in front
- configure S3 bucket and CloudFront with Route53 in CloudFormation and have the
  S3 bucket deployed automatically using s3deploy and circle ci.
