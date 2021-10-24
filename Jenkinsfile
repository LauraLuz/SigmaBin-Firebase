//Inicio Pipeline Declarativa
pipeline{
    //Utilizar Ambiente Disponivel para Deploy
    agent any
        //Abertura de bloco para determinar estagios da entrega
        stages {
            //Abertura de estagio de interação com usuário para determinar aprovação de Deploy
            stage('Responsável pela aprovação'){
                //Passo para determinar script de input de informação pelo usuário na esteira do pipeline
                steps {
                    //Script de input de informação Sim para aprovar Deploy ou Nao para Cancelar
                    script {
                    env.RESP_BUILD = input message: 'Aprova o Deploy ?', ok: 'Release!',
                    parameters: [choice(name: 'RESP_BUILD', choices: 'Sim\nNao', description: 'Realizar Deploy ?')]
                }
                echo "${env.RESP_BUILD}"
            }
        }
        
        stage ('Confirma Deploy'){
            //Caso o usuário Selecione opção Sim, será realizado o deploy
            when {
                expression { "${env.RESP_BUILD}" == 'Sim' }
        }
            steps {
                echo 'O Deploy será realizado'
            }
        }
            
        stage ('Deploy Cancelado'){
            //Caso o usuário Selecione opção Nao, será cancelado o deploy
            when {
                expression { "${env.RESP_BUILD}" == 'Nao' }
        }
            steps {
                echo 'O Deploy NÃO será realizado'
            }
        }
    }
}
