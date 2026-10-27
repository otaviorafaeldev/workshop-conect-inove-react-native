# CONNECT INOVE A MELHOR DO BRASIL E LIMOEIRO E REGIÃO...

# Workshop Conect Inove: do zero à loja com React Native e Expo

Repositório oficial do workshop. Aqui está o app de exemplo **Conect Tarefas**, o código de cada etapa e os materiais das aulas.

Professor: Otávio Rafael | [Portfólio](https://portfolio.otaviorafael.com.br/#about) | [Blog](https://blog.otaviorafael.com.br/post/como-publicar-seu-app-react-native-expo-na-play-store-e-app-store)

## Cronograma

| Encontro | Data | Tema |
|---|---|---|
| 1 | Seg 26/10, 19:30 às 20:30 | Ambiente, Git e primeira tela |
| 2 | Ter 27/10, 19:30 às 20:30 | Estado e lista de tarefas |
| 3 | Qui 29/10, 19:30 às 20:30 | Salvar dados e preparar para as lojas |
| 4 | Qui 05/11, 19:30 às 20:30 | Build e Google Play |
| 5 | Sáb 07/11, 13:00 às 14:00 | Apple App Store (demonstrativo) e próximos passos |

## Conteúdo

| Pasta | O que tem |
|---|---|
| `conect-tarefas/` | Projeto completo (versão final do app) |
| `conect-tarefas/etapas/` | Código de cada etapa: `App.etapa1.js`, `App.etapa2.js`, `App.etapa3.js` |
| `material/` | Apostila e slides em PDF |

## Pré-requisitos

- [Node.js](https://nodejs.org/) (LTS)
- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/)
- App **Expo Go** no celular (Play Store ou App Store)

## Como pegar o projeto

**Opção 1: ZIP.** Clique em **Code > Download ZIP**, extraia e abra a pasta `conect-tarefas`.

**Opção 2: clonar.**

```bash
git clone https://github.com/otaviorafaeldev/workshop-conect-inove-react-native.git
cd workshop-conect-inove-react-native/conect-tarefas
```

## Como rodar

```bash
npm install
npx expo start
```

Escaneie o QR Code com o Expo Go (Android) ou com a Câmera (iPhone). Se não abrir, use `npx expo start --tunnel`.

## Como fazer os desafios na sua branch

Nunca resolva na `main`. Crie uma branch com o seu nome (minúsculas, sem acentos, com hífen):

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@exemplo.com"

git switch -c desafios/maria-silva
git branch --show-current

# depois de resolver o desafio:
git status
git add .
git commit -m "Desafio 1: troquei as cores"
git log --oneline
```

Para guardar online, faça um **fork** deste repositório e envie a sua branch:

```bash
git remote add meu-fork https://github.com/SEU-USUARIO/workshop-conect-inove-react-native.git
git push -u meu-fork desafios/maria-silva
```

Mais detalhes na apostila (`material/apostila-aluno.pdf`, seção 1.7).
