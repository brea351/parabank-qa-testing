pipeline {
    agent {
        docker {
            image 'cypress/included:12.17.3'
            args '-u root:root' // run as root so we can install dependencies
        }
    }
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run'
            }
        }
        stage('Archive Reports') {
            steps {
                archiveArtifacts artifacts: 'cypress/videos/**, cypress/screenshots/**, cypress/reports/**', allowEmptyArchive: true
            }
        }
    }
}

