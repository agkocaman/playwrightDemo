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
                sh 'baseURL=https://pilot.cimri.com npx playwright test --project=mobile --grep @mobile'
                }
            }
        }
    }
   post {
        always ('report'){
            junit 'results.xml'
        }
    }
}
