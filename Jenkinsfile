pipeline {

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
