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
    stage('Run unit test coverage') {
      steps {
        sh '/usr/local/bin/npm run testCoverage'
      }
    }
    stage('Run unit sonar') {
      steps {
        sh '/usr/local/bin/npm run sonar'
      }
    }
  }
}
