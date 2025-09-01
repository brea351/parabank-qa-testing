pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run API Tests') {
            steps {
                sh 'npm run test:api'
            }
        }

        stage('Run UI Tests') {
            steps {
                sh 'npm run test:ui'
            }
        }

        stage('Archive Reports') {
            steps {
                archiveArtifacts artifacts: 'cypress/reports/**/*.html', fingerprint: true
            }
        }
    }

    post {
        always {
            junit 'cypress/results/*.xml'  // if you configure junit reporter
        }
    }
}
