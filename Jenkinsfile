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
                    sh 'npx playwright test'
                }
            }
        }
    }

    post {
        always {
            // Temizlik adımları, gerekirse
        }
    }
}
