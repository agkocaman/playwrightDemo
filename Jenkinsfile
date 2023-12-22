pipeline {
    agent any

    stages {
        stage('Run Playwright Tests') {
            steps {
                script {
                    // Playwright testlerini çalıştırın
                sh 'npm install'
                sh 'npx playwright install'
                sh 'baseURL=https://pilot.cimri.com npx playwright test --project=mobile --grep @mobile --reporter=line,allure-playwright'
                }
            }
        }
    }
}
