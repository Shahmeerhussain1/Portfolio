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
                sh "docker compose up -d"
                echo "Code Build hogya"
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
