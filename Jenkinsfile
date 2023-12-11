pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/SemahChaouch/tictactrip'
            }
        }
        
        stage('Pull from GitHub') {
            steps {
                git branch: 'master', url: 'https://github.com/SemahChaouch/tictactrip'
            }
        }
        
        stage('Unit Tests') {
            steps {
                script{
                    sh 'npm install'
                    sh 'npm run test'
                }
                
            }
        }
        
        stage('SonarQube') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh 'npm run sonar'
                }
            }
        }
        
        stage('Docker Image Build') {
            steps {
                sh 'docker build -t tictactrip.azurecr.io/samples/back .'
            }
        }
        
        stage('Push Docker Image') {
            steps {
                sh 'docker push tictactrip.azurecr.io/samples/back'
        }
        
        stage('Terraform Init and Plan and apply') {
            steps {
                sh 'terraform init'
                sh 'terraform plan'
                sh 'terraform apply'            }
        }
        
        stage('Kubernetes Deployment') {
            steps {
                script{
                    sh 'kubectl apply -f app-deployment.yaml'
                    sh 'kubectl apply -f redis-deployment.yaml'}
            }
        }

    }
    
    post {
        always {
            // Add your declarative post steps here
        }
    }
}
