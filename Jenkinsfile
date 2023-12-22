pipeline {
    agent {
        docker {
            // Playwright testlerini çalıştırabilmek için bir Node.js imajını kullanın.
            image 'playwright-test:latest'
        }
    }

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    // Proje bağımlılıklarını yükleyin.
                    sh 'npm install'
                }
            }
        }

        stage('Run Playwright Tests') {
            steps {
                script {
                    // Playwright testlerini çalıştırın.
                    sh 'npx playwright test'
                }
            }
        }
    }
}
