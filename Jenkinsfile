pipeline {
    agent any
        stages {
            stage('Hello') {
                steps {
                    echo 'Hello World'
                }
            }
            stage('Responsável pela aprovação') {
                steps {
                    script {
                        timeout(time: 2, unit: "HOURS") {
                            def userInput = input(
                                id: 'userInput', message: 'Aprova o Deploy ?', parameters: [
                                [$class: 'TextParameterDefinition', defaultValue: 'Não', description: 'Realizar Deploy ?', name: 'Executar'] ] )
                            echo (userInput)
                            if ( userInput == 'Sim') {
                                echo 'O Deploy será realizado'
                            } else {
                                echo 'O Deploy NÃO será realizado'
                            }
                        }
                    }
                }
            }
        }
}
