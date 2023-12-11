# Tictactrip
This project is the Tictactrip backend challenge.
## About
The project consists of justifying a given text an return the the justified text.

## Prerequisites
Before you run the app, ensure you have met the following requirements:

- **Node.js**: You should have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

- **TypeScript**: This project uses TypeScript for development. Make sure you have TypeScript installed globally by running:

  ```bash
  $ npm install -g typescript
- **Docker**:To build and run containerized applications, you'll need Docker. You can download it from docker.com.

## Installing dependecies and running the app

```bash
  $ git clone https://github.com/yourusername/yourproject.git](https://github.com/SemahChaouch/tictactrip/
  $ cd tictactrip
  $ npm install
  - Dev environment
  $ npm run dev ```
  - Testing environment
  # Change the test value in index.ts to true 
  $ npm run test 
```
## Deployment

We have two deployment options for this project:

1. **Local Deployment with Docker Compose**: This is suitable for development and testing environments. Make sure you have Docker and Docker Compose installed. You can then use the provided `docker-compose.yml` file to launch the services.

   ```bash
   docker-compose up
2. Kubernetes Deployment on Azure (AKS): If you want to deploy your application on a Kubernetes cluster, you can deploy it to Azure Kubernetes Service (AKS). Ensure you have an Azure account and kubectl set up. You can deploy your application using the deployments provided within the app.

  ```bash
  kubectl apply -f <ficherdedeploiement.yaml>
```

## Exposed app

The app is already exposed using AKS on public IPs ;
You will find below the Public ip address for a simple react interface to facilitate testing and the backend ip to manually test.

Frontend : http://20.93.26.184:81/
Backend :  http://20.123.96.215/


# Thank you !




