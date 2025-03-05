export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad:
      'El ambiente externo, la organización y las relaciones interorganizacionales',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Conceptos y características del ambiente externo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'El ambiente externo de las organizaciones',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'El microentorno',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'El macroentorno',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Herramientas de análisis del ambiente externo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Herramientas para el análisis del microentorno',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Herramientas para el análisis de macroentornos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Relaciones Interorganizacionales: concepto, teorías y estrategias',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Teorías de las relaciones interorganizacionales',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Estrategias de relaciones interorganizacionales',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Impacto de las relaciones interorganizacionales',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Blandez Ricalde, M. D. G. & María de Guadalupe Blandez Ricalde. (2014). Proceso administrativo: ( ed.). Editorial Digital UNID. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/41174?page=16 ',
    },
    {
      referencia:
        'Arizabaleta, E. V. (2004). Diagnóstico organizacional: evaluación sistémica del desempeño empresarial en la era digital: ( ed.). Ecoe Ediciones. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/69005?page=46 (Capitulo 2)',
    },
    {
      referencia:
        'Prieto Herrera, J. E. (2011). Gestión estratégica organizacional: guía práctica para el diagnóstico empresarial: (3 ed.). Ecoe Ediciones. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/69160?page=130 (capitulo 2)',
    },
    {
      referencia:
        'Luna González, A. C. (2015). Administración estratégica: ( ed.). Grupo Editorial Patria. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/39421?page=33 (Capitulo 1)',
    },
    {
      referencia:
        'Torres Hernández, Z. (2015). Administración estratégica: ( ed.). Grupo Editorial Patria. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/39403?page=4 (Capitulo 2)',
    },
    {
      referencia:
        'Luna González, A. C. (2015). Administración estratégica: ( ed.). Grupo Editorial Patria. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/39421?page=33 (Capitulo 1)',
    },
    {
      referencia:
        'Carnicer Sospedra, D. Martínez Chávez, M. & Morales López, N. (2021). Alianzas inteligentes para la transformación competitiva de las organizaciones. Guía práctica para su gestión integral: ( ed.). McGraw-Hill España. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/176437?page=22 (Capitulo 2)',
    },
    {
      referencia:
        'Luna González, A. C. (2015). Administración estratégica: ( ed.). Grupo Editorial Patria. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/39421?page=176 (Capitulo 3)',
    },
  ],
  glosario: [
    {
      termino:
        'Análisis FODA (Fortalezas, Oportunidades, Debilidades, Amenazas)',
      significado:
        'Herramienta de diagnóstico empresarial que permite identificar factores internos (fortalezas y debilidades) y externos (oportunidades y amenazas) para evaluar la situación de una organización y orientar la toma de decisiones estratégicas.',
    },
    {
      termino: 'Competencia',
      significado:
        'Parte del microentorno de una organización que incluye a otras empresas que ofrecen productos o servicios similares. Analizar la competencia permite identificar ventajas competitivas y áreas de mejora.',
    },
    {
      termino: 'Diagnóstico Empresarial',
      significado:
        'Proceso de análisis sistemático que evalúa la situación interna y externa de una empresa para identificar problemas, oportunidades y áreas de mejora, facilitando la toma de decisiones estratégicas.',
    },
    {
      termino: 'Entorno Económico',
      significado:
        'Componente del macroentorno que engloba factores como el crecimiento económico, la inflación, las tasas de interés y el nivel de empleo, que pueden influir en el desempeño de una organización.',
    },
    {
      termino: 'Macroentorno',
      significado:
        'Conjunto de factores externos e incontrolables que afectan a todas las organizaciones dentro de una sociedad, como el entorno político, económico, social, tecnológico, ambiental y legal (análisis PESTEL).',
    },
    {
      termino: 'Microentorno',
      significado:
        'Factores externos más cercanos a la organización, como clientes, proveedores, intermediarios y competidores, que tienen un impacto directo en las operaciones y estrategias de la empresa.',
    },
    {
      termino: 'Relaciones Interorganizacionales',
      significado:
        'Interacciones y vínculos entre diferentes organizaciones, como alianzas estratégicas, asociaciones y redes de colaboración, que buscan maximizar beneficios mutuos y alcanzar objetivos compartidos.',
    },
    {
      termino: 'Responsabilidad Social Empresarial (RSE)',
      significado:
        'Estrategia que integra prácticas éticas y sostenibles en las operaciones de una organización, respondiendo a las expectativas de la sociedad y contribuyendo al desarrollo del macroentorno.',
    },
    {
      termino: 'Stakeholders (Grupos de interés)',
      significado:
        'Individuos o entidades que tienen un interés o impacto en las actividades de una organización, incluyendo empleados, clientes, proveedores, inversores, gobiernos y comunidades locales.',
    },
    {
      termino: 'Valor Compartido',
      significado:
        'Estrategia empresarial que busca generar beneficios económicos mientras se crean beneficios sociales en el entorno en el que opera la organización, fortaleciendo tanto las relaciones interorganizacionales como su impacto en el macroentorno.',
    },
  ],
}
