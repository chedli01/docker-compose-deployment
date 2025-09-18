pipeline {
    agent any

    environment {
        DOCKERHUB_CRED = credentials('dockerhub') // DockerHub credential ID
        TAG = "${env.GIT_COMMIT[0..6]}"         // Short SHA for tagging
    }

    stages {
        stage('Checkout'){
            steps{
                   checkout scm 
            }
        }

        stage('Build and push'){
            steps{
                script{
                    sh "echo ${DOCKERHUB_CRED_PSW} | docker login -u ${DOCKERHUB_CRED_USR} --password-stdin"
                    sh "sed -i 's|REPLACE_TAG|${TAG}|g' docker-compose.yml"
                    // Build & push Docker images using docker-compose
                    sh "docker compose build"
                    sh "docker compose push"
                }
            }
        }
    }
}