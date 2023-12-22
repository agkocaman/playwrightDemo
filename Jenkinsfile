pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                script {
                    // Projedeki bağımlılıkları yükleyin
                    sh 'npm install'
                }
            }
        }

        stage('Run Playwright Tests') {
            steps {
                script {
                    // Playwright testlerini çalıştırın
                sh 'npm install'
                sh 'npx playwright install'
                sh 'baseURL=http://pilot.cimri.com npx playwright test --project=mobile --grep @mobile --reporter=line,allure-playwright'
                }
            }
        }
    }
}
