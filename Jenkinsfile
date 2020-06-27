pipeline {
  agent any
  stages {
    stage('install npm dependencies') {
      steps {
        sh '/usr/local/bin/npm install'
      }
    }
    stage('Run unit test') {
      steps {
        sh '/usr/local/bin/npm run test'
      }
    }
  }
}
