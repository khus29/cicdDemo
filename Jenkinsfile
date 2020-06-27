pipeline {
  agent any
  stages {
    stage('install npm dependencies') {
      steps {
        sh 'export PATH=/sbin:/usr/sbin:/usr/bin:/usr/local/bin'
        sh 'npm install'
      }
    }
    stage('Run unit test') {
      steps {
        sh 'export PATH=/usr/local/bin'
        sh 'npm run test'
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
