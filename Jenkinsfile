pipeline {
  agent { 
    docker { 
      image 'mcr.microsoft.com/playwright:v1.40.0-jammy'
    } 
  }
  stages {
    stage('Initialize'){
        def dockerHome = tool 'default-docker'
        env.PATH = "${dockerHome}/bin:${env.PATH}"
    }
    stage('install playwright') {
      steps {
        sh '''
          npm i -D @playwright/test
          npx playwright install
        '''
      }
    }
    stage('help') {
      steps {
        sh 'npx playwright test --help'
      }
    }
    stage('test') {
      steps {
        sh '''
          npx playwright test --list
          npx playwright test
        '''
      }
      post {
        success {
          archiveArtifacts(artifacts: 'homepage-*.png', followSymlinks: false)
          sh 'rm -rf *.png'
        }
      }
    }
  }
}