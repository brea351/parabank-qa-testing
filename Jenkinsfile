pipeline {
    agent {
        docker {
            image 'cypress/included:12.17.3'  // has Node, npm, Cypress + Chrome
            args '-u root:root'
        }
    }
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run API Tests') {
            steps {
                sh 'npx cypress run --spec "cypress/e2e/api/*"'
            }
        }
        stage('Run UI Tests') {
            steps {
                sh 'npx cypress run --spec "cypress/e2e/ui/*"'
            }
        }
        stage('Archive Reports') {
            steps {
                junit '**/results/*.xml'
                archiveArtifacts artifacts: '**/cypress/screenshots/**', allowEmptyArchive: true
                archiveArtifacts artifacts: '**/cypress/videos/**', allowEmptyArchive: true
            }
        }
    }
}

