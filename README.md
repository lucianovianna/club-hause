# Club Hause
Projeto baseado na SemanaJSExpert 4.0 https://github.com/ErickWendel/semana-javascript-expert04

## Checklist Features

- [ ] O app deve funcionar na Web, Android e IOS
- Login
  - [ ] Deve ter login com GitHub
    - [ ] Se houver dados do usuario em localStorage deve ir para lobby direto

- Lobby
  - [ ] Se não houver dados do usuario em localStorage deve voltar para login
  - [ ] Mostra todas as salas ativas
  - [ ] Atualiza salas em realtime
  - [ ] Pode criar uma sala sem topico
  - [ ] Pode criar uma sala com topico
  - [ ] Pode acessar salas ativas
- Room
  - [ ] Se não houver dados do usuario em localStorage deve voltar para login
  - [x] Cria uma sala com um usuário dono
  - [x] Todos usuários futuros entram com perfil de attendees
  - [ ] Notifica Lobby sobre atualizações na sala
  - [x] Lista usuarios com perfis de speakers e attendees
  - [x] Se o dono da sala desconectar, será removida
  - Users
    - Speaker
      - [ ] Recebe notificação de attendees para se tornarem speakers
      - [x] Atualizam a tela o upgrade de attendee para speaker
      - [ ] Poderá deixar seu microfone mudo
      - Se dono da sala
        - [ ] Pode aprovar attendees a virarem speakers
        - Ao se desconectar
          - [x] Promove o speaker mais velho da sala
          - [x] Se não houver speaker promove o attendee mais velho da sala
    - Attendee
      - [ ] Pode ouvir speakers ativos
      - [ ] Pode pedir upgrade de perfil ao dono da sala
        - Ao ser aprovado
          - [ ] Reinicia todas as suas chamas ativas com os usuarios da sala
          - [ ] Recebe as permissões do perfil speaker
