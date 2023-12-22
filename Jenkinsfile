pipeline {
    agent any
    tools{
       nodejs '21.5.0'
       allure 'Allure_Home'
    }

    stages {
        stage('Run Playwright Tests') {
            steps {
                script {
                    // Playwright testlerini çalıştırın
                sh 'npm install'
                sh 'npx playwright install'
                sh 'baseURL=https://pilot.cimri.com npx playwright test --project=mobile --grep @mobile --reporter=line,allure-playwright'
                sh 'npx playwright show-report report'
                }
            }
        }
    }
}
