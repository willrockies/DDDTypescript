## Domain Events - componentes ##

# - Event
# - Handler: Executa o processamento quando um evento é chamado
# - Event dispatcher: Responsável por armazenar e executar os handlers de um evento quando ele for disparado



# Domain Events - Dinâmica
# - Criar um "Event Dispatcher"
# - Criar um "Evento"
# - Criar um "Handler" para o "Evento"
# - Registrar o Evento, juntamente com o Handler no "Event Dispatcher"

# Agora para um evento, basta executar o método "notify" do "Event Dispatcher". Nesse momento todos os handlers registrados no evento serão executados

## Factory
#  method factory -
#  abstract factory - 