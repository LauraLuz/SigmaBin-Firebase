pipeline{
    agent any
        stages {
            stage('Responsável pela aprovação'){
                steps {
                    script {
                    env.RESP_BUILD = input message: 'Aprova o Deploy ?', ok: 'Release!',
                    parameters: [choice(name: 'RESP_BUILD', choices: 'Nao\nSim', description: 'Realizar Deploy ?')]
                }
                echo "${env.RESP_BUILD}"
            }
        }
        stage ('Confirma Deploy'){
            when {
                expression { "${env.RESP_BUILD}" == 'Sim' }
        }
            steps {
                echo 'O Deploy será realizado'
                nodejs(nodeJSInstallationName: 'Node 6.x', configId: '<config-file-provider-id>') {
                    sh 'npm config ls'
                }
            }
        }
        stage ('Deploy Cancelado'){
            when {
                expression { "${env.RESP_BUILD}" == 'Nao' }
        }
            steps {
                echo 'O Deploy NÃO será realizado'
            }
        }
    }
}
