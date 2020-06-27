pipeline {
  agent {
      docker {
          image 'node:6-alpine'
          args '-p 3000:3000'
      }
  }
  environment {
      CI = 'true'
  }
  stages {
    stage('install npm dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Run unit test') {
      steps {
        sh 'npm run test'
      }
    }
  }
}
