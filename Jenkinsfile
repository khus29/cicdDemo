pipeline {
  agent any
  tools {nodejs "nodejs"}
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
