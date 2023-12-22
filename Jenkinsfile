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
                sh 'baseURL=https://pilot.cimri.com npx playwright test --project=mobile --grep @mobile --reporter=line,allure-playwright'
                sh 'npx playwright show-report report'
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                   
                sh 'baseURL=https://pilot.cimri.com npx playwright test --project=mobile --grep @mobile --reporter=line,allure-playwright'
                }
            }
        }
    }
   post {
        always {
      publishHTML (target : [
        allowMissing: false,
        alwaysLinkToLastBuild: true,
        keepAll: true,
        reportDir: 'out/playwright-report',
        reportFiles: 'index.html',
        reportName: 'Playwright Report',
        reportTitles: 'Playwright Report'
        ]
      )
        }
    }
}
