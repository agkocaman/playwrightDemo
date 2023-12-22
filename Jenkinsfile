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
                sh 'baseURL=https://pilot.cimri.com npx playwright test --project=mobile --grep @mobile --reporter=junit'
                }
            }
        }
    }
   post {
        always {
            set PLAYWRIGHT_JUNIT_OUTPUT_NAME=results.xml
        }
    }
}
