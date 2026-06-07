pipeline {
    agent any
    
    parameters {
        password(name: 'MYSQL_ROOT_PASSWORD', defaultValue: 'Dragon2307*', description: 'Contraseña root de MySQL')
    }
    
    stages {
        stage('Clonar repositorio') {
            steps {
                git url: 'https://github.com/r2x4/proyecto_docker.git', branch: 'samurai'
            }
        }
        
        stage('Limpiar contenedores viejos') {
            steps {
                sh 'docker stop mysql-db web-app || true'
                sh 'docker rm mysql-db web-app || true'
                sh 'docker network rm ventajugos-net || true'
            }
        }
        
        stage('Crear red Docker') {
            steps {
                sh 'docker network create ventajugos-net'
            }
        }
        
        stage('Levantar MySQL') {
            steps {
                sh """docker run -d \
                    --name mysql-db \
                    --network ventajugos-net \
                    -e MYSQL_ROOT_PASSWORD='${params.MYSQL_ROOT_PASSWORD}' \
                    -e MYSQL_DATABASE=venta_jugos \
                    -p 3306:3306 \
                    mysql:8 --default-authentication-plugin=mysql_native_password"""
            }
        }
        
        stage('Esperar MySQL con verificación real') {
            steps {
                script {
                    timeout(60) {
                        sh """
                            echo 'Esperando que MySQL esté listo...'
                            for i in {1..30}; do
                                if docker exec mysql-db mysqladmin ping -h localhost -u root -p'${params.MYSQL_ROOT_PASSWORD}' --silent 2>/dev/null; then
                                    echo 'MySQL está listo!'
                                    break
                                fi
                                echo 'Esperando MySQL... intento \$i'
                                sleep 2
                            done
                        """
                    }
                }
            }
        }
        
        stage('Construir imagen App Web') {
            steps {
                sh 'docker build -t web-app .'
            }
        }
        
        stage('Levantar App Web') {
            steps {
                sh """docker run -d \
                    --name web-app \
                    --network ventajugos-net \
                    -e DB_HOST=mysql-db \
                    -e DB_USER=root \
                    -e DB_PASSWORD='${params.MYSQL_ROOT_PASSWORD}' \
                    -e DB_NAME=venta_jugos \
                    -p 3000:3000 \
                    web-app"""
            }
        }
        
        stage('Verificar que todo funciona') {
            steps {
                sh 'echo "✅ Contenedores corriendo:"'
                sh 'docker ps --filter name=mysql-db --filter name=web-app'
                sh 'echo "📋 Logs de la app web (últimas líneas):"'
                sh 'docker logs web-app --tail 20'
            }
        }
    }
    
    post {
        failure {
            sh 'echo "❌ Pipeline falló. Logs de MySQL:"'
            sh 'docker logs mysql-db --tail 30'
            sh 'echo "📋 Logs de la app web:"'
            sh 'docker logs web-app --tail 30 2>/dev/null || echo "App web aún no arrancó"'
        }
    }
}