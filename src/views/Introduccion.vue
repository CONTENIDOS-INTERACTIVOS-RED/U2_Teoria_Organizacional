<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1
        p(data-aos="fade-left") La presente unidad introduce a los estudiantes en los principios fundamentales que sustentan el funcionamiento de las organizaciones, su estructura y las relaciones que establecen con su entorno. Este tema es de gran importancia para entender cómo las organizaciones logran alcanzar sus objetivos en contexto volátiles.
    
        .bg-color-1.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 A través del estudio de la naturaleza de las organizaciones y las teorías que explican su comportamiento, se espera ofrecer las bases para que los estudiantes analicen y apliquen estrategias efectivas, en diversos escenarios empresariales.
    
    p.mb-4 Al finalizar esta unidad, los estudiantes estarán en capacidad de comprender los factores determinantes del éxito organizacional. Entre estos se incluye la alineación de la estructura organizacional con la estrategia, el entendimiento de las dinámicas internas, como las relaciones, la comunicación y el trabajo en equipo, así como la gestión de procesos de cambio. 

    .bg-full-width.bg-h85
      .px-4.px-md-5  
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-9(data-aos="fade-left").order-2
                p El estudio de esta unidad es fundamental para los futuros profesionales interesados en liderar o gestionar organizaciones. A lo largo del contenido, se reconocerá cómo los factores externos influyen en la toma de decisiones, utilizando herramientas como el análisis PESTEL para evaluar el entorno, asimismo, se explorarán las relaciones interorganizacionales, sus teorías y estrategias, lo que permitirá comprender las dinámicas de colaboración entre diferentes entidades.
                p.mb-0 Se espera que los estudiantes participen activamente en las actividades propuestas, como el análisis de casos, debates y reflexiones individuales. Su compromiso será necesario para integrar los conocimientos adquiridos y aplicarlos en contextos reales. 
              .col-lg-3(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                img.img-fluid(src='@/assets/curso/intro/3.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
                
    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        p.mb-0.text-bold.text-center Los invito a involucrarse con entusiasmo y curiosidad, dado que el aprendizaje obtenido será una herramienta vital para su desarrollo personal y profesional.

</template>
