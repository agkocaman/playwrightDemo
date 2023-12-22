pipeline {
    agent none
    stages {
        stage('Running') {
            agent { 
                docker { 
                    image 'mcr.microsoft.com/playwright:v1.40.0-jammy' 
                    label "slave-arm64"
                }
            }
            steps {       
                sh 'npm install'
                sh 'npx playwright install'
                sh 'baseURL=http://pilot.cimri.com npx playwright test --project=web --grep @web --reporter=line,allure-playwright'
            }
        }
    }
}