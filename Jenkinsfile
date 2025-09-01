pipeline {
    agent {
        docker {
            image 'cypress/included:12.17.3'
            args '--entrypoint="" -u root:root'
        }
    }
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
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
