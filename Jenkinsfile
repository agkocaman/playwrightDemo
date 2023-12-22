pipeline {
    agent {
        docker {
            // Playwright testlerini çalıştırabilmek için bir Node.js imajını kullanın.
            image '30ab49ec39e24da1a03f60dfe01a0d610f27e25884abc706a36bed639e0ffb63'
        }
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    // Kodunuzu GitHub'dan veya başka bir kaynaktan çekmek için checkout komutunu kullanın.
                    checkout scm
                }
            }
        }

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

    post {
        always {
            // Temizlik adımları, gerekirse.
        }
    }
}
