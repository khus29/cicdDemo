pipeline {
  agent any
  stages {
    stage('install npm dependencies') {
      steps {
        sh 'export PATH=/usr/local/bin  npm install'
      }
    }
    stage('Run unit test') {
      steps {
        sh 'export PATH=/usr/local/bin npm run test'
      }
    }
    stage('Run unit test coverage') {
      steps {
        sh '/usr/local/bin run test:coverage'
      }
    }
    stage('Run unit sonar') {
      steps {
        sh '/usr/local/bin run sonar'
      }
    }
  }
}
