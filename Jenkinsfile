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
                    sh 'docker build -t tictactrip .'

                }
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    
                    sh 'docker run -d -p 3000:3000 tictactrip.azurecr.io/samples/back'


                }
            }
        }
    }
    

}
