pipeline{
    agent any;
    stages{
        stage("Code"){
            steps {
                git url: 'https://github.com/Shahmeerhussain1/Portfolio.git' , branch : "main";
                echo "Code clone hogya"
            }
        }
        stage("Build"){
            steps {
                //sh "docker build -t next-app:latest ."
                sh "docker compose up --build next-app -d"
                echo "Code Build hogya"
            }
        }
        stage("Push to Docker hub"){
            steps {
                withCredentials([usernamePassword(
                    credentialsId : "dockerhubCreds",
                    passwordVariable : "dockhubpass",
                    usernameVariable : "dockhubuser"
                    )]){
                        sh "docker login -u ${env.dockhubuser} -p ${env.dockhubpass}"
                        sh "docker image tag demo-cicd-next-app ${env.dockhubuser}/demo-cicd-next-app"
                        sh "docker push ${env.dockhubuser}/demo-cicd-next-app"
                    }
                echo "Pushing"
            }
        }
        stage("Deploy"){
            steps {
                //sh "docker run -d -p 3000:3000 next-app:latest"
                echo "Code Deploy hogya"
            }
        }
    }
}
