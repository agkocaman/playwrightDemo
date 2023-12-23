pipeline {
    agent any
    tools{
       nodejs '21.5.0'
    }

    stages {
        stage('install playwright') {
            steps {
                script {
                sh 'npm i -D @playwright/test'
                sh 'npx playwright install'
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                sh 'baseURL=${BASEURL} npx playwright test --project=${PROJECT} --grep @${PROJECT}'
                }
            }
        }
    }
   post ('Report') {
        always {
            junit 'results.xml'
        }
    }
}
