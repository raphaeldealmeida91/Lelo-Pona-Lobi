pipeline {
    agent any

    tools {
        nodejs 'Node 24 LTS'
    }

    stages {
        stage('Install dependencies') {
            steps {
                echo "✅ Installation des dépendances"
                sh 'npm ci'
            }
        }

        stage('Build') {
            steps {
                echo "🏗️ Build de l\'application"
                sh 'npm run build'
            }
        }

        stage('Lint') {
            steps {
                echo "🧹 Linter"
                sh 'npm run lint'
            }
        }

        stage('Security Audit') {
            steps {
                echo "🔒 Audit de sécurité"
                sh 'npm audit --audit-level=high'
            }
        }

        stage('Deploy to VPS') {
            when {
                expression { currentBuild.result == null || currentBuild.result == 'SUCCESS' }
            }
            steps {
                echo '🚀 Déploiement sur le VPS'
                sshagent (credentials: ['vps-ssh-key']) {
                    sh '''
ssh -o StrictHostKeyChecking=no jenkins@217.154.9.84 << 'EOF'
cd /home/jenkins/Lelo-Pona-Lobi
git fetch origin
git reset --hard origin/master
npm ci
npm run build
sudo rm -rf /var/www/html/dist/
sudo mv /home/jenkins/Lelo-Pona-Lobi/dist /var/www/html
sudo chown -R www-data:www-data /var/www/html/dist
sudo chmod -R 755 /var/www/html/dist
sudo systemctl restart nginx
EOF
                    '''
                }
            }
        }
    }
}
