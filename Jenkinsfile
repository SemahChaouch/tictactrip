pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                script {
                    // Checkout code from version control
                    git 'https://github.com/SemahChaouch/tictactrip'
                    git branch: 'master', url: 'https://github.com/SemahChaouch/tictactrip'
                    sh 'npm install'
                    sh 'npm run test'
                    sh 'docker build -t tictactrip.azurecr.io/samples/back .'

                }
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    //delete old containers and run new ones
                    sh 'docker stop $(docker ps -a -q)'
                    sh 'docker rm $(docker ps -a -q)'
                    sh 'docker run -d -p 3000:3000 tictactrip.azurecr.io/samples/back'
                    

                }
            }
        }
    }
    

}
