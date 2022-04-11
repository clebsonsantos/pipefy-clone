export function loadLists() {
  return [
    { 
      title: 'Tarefas', 
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Estudar NodeJS',
          labels: ['#7159c1'],
          user: 'https://github.com/clebsonsantos.png'
        },
        {
          id: 2,
          content: 'Fazer café expresso.',
          labels: ['#7159c1'],
          user: 'https://github.com/clebsonsantos.png'
        },
        {
          id: 3,
          content: 'Estudar Jest',
          labels: ['#7159c1'],
          user: 'https://github.com/clebsonsantos.png'
        },
        {
          id: 4,
          content: 'Estudar ElectronJs e testar build',
          labels: ['#54e1f7'],
          user: 'https://github.com/clebsonsantos.png'
        },
        {
          id: 5,
          content: 'Subir atualizações para o sistema',
          labels: ['#54e1f7'],
          user: 'https://github.com/clebsonsantos.png'
        },
      ]
    },
    { 
      title: 'Fazendo', 
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Comprar novas capsulas para a cafeteira',
          labels: [],
          user: 'https://github.com/clebsonsantos.png'
        }
      ]
    },
    { 
      title: 'Pausado', 
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Descobrir como chegar à lua antes de Elon',
          labels: ['#7159c1'],
          user: 'https://github.com/clebsonsantos.png'
        },
        {
          id: 8,
          content: 'Testes e deploy ReactJS',
          labels: ['#54e1f7'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
        {
          id: 9,
          content: 'Aprender a cultivar café dentro de casa',
          labels: [],
        }
      ]
    },
    { 
      title: 'Concluído', 
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Dormir pelo menos 6 horas',
          labels: [],
        },
        {
          id: 12,
          content: 'Aprender Postgres',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content: 'Subir deploy aws',
          labels: ['#7159c1'],
        }
      ]
    },
  ];
}