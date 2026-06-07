pipeline {
    agent any
    
    parameters {
        password(name: 'MYSQL_ROOT_PASSWORD', defaultValue: 'Dragon2307*', description: 'Contraseña root de MySQL')
    }
    
    stages {
        stage('Limpiar contenedores viejos') {
            steps {
                sh 'docker stop mysql-db web-app || true'
                sh 'docker rm mysql-db web-app || true'
            }
        }
        
        stage('Levantar MySQL') {
            steps {
                sh "docker run -d --name mysql-db -e MYSQL_ROOT_PASSWORD='${params.MYSQL_ROOT_PASSWORD}' -e MYSQL_DATABASE=venta_jugos -p 3306:3306 mysql:8"
            }
        }
        
        stage('Esperar MySQL') {
            steps {
                sh 'sleep 15'
            }
        }
        
        stage('Construir y levantar App Web') {
            steps {
                sh 'docker build -t proyecto_docker-app .'
                sh 'docker run -d --name web-app --link mysql-db -p 3000:3000 proyecto_docker-app'
            }
        }
        
        stage('Verificar conexión') {
            steps {
                sh 'docker logs web-app'
            }
        }
    }
    
    post {
        always {
            sh 'docker stop mysql-db web-app || true'
            sh 'docker rm mysql-db web-app || true'
        }
    }
}