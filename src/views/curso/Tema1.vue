<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Conceptos y características del ambiente externo'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") Teniendo en cuenta a Blandez Ricalde (2014), el ser humano, por naturaleza, es un ser social cuya inclinación a interactuar y colaborar en relaciones interdependientes, es innata. A lo largo de la historia, la evolución de las organizaciones sociales ha sido un pilar fundamental en el desarrollo de la humanidad. Los grupos organizados representan una parte esencial de nuestra vida cotidiana. Desde nuestro nacimiento, formamos parte de una familia, generalmente con el apoyo de una institución médica como el hospital. A lo largo de nuestra vida, pasamos tiempo significativo en instituciones educativas, y también surgen de manera espontánea grupos informales, creados por personas que comparten intereses comunes y buscan alcanzar objetivos colectivos.

    p.mb-4 Para ampliar la información, lo invitamos a ver el siguiente video.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/9cqLwqWDCzs?si=F1b2M6SlLRnGqFf9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] El ambiente externo de las organizaciones
    
    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        p.mb-4 Continuando con los postulados de Blandez Ricalde (2014), la organización opera dentro de un entorno compuesto por un ambiente interno y un ambiente externo, ambos influyen directamente en sus acciones y decisiones. El ambiente externo se divide en dos niveles principales: 

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/2.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Ambiente macroeconómico
                p.mb-0 Este nivel abarca variables que afectan de manera general la estabilidad de los sectores en los que opera la organización, como políticas gubernamentales, cambios económicos globales y tendencias sociales.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/3.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Ambiente microeconómico
                p.mb-0 Aquí se analiza cómo estas variables impactan específicamente a la organización, considerando factores más inmediatos como la competencia, los clientes y los proveedores.
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/4.png", data-aos="zoom-in")
      .col-lg-7
        p(data-aos="fade-left") El entorno está formado por diferentes sectores, y dentro de ellos, la organización tiene un dominio específico. Este dominio corresponde a la parte de la organización que interactúa directamente con los sectores que integran su entorno externo.
        .bg-color-1.py-4.px-5(data-aos="fade-left")
          p.mb-0 En el siguiente esquema, se representan los diversos sectores que conforman el entorno externo de las organizaciones, así como los elementos que influyen en cada uno de ellos. Esta relación entre organización y entorno es crucial para entender cómo se adapta y responde a los cambios externos.
    
    .titulo-figura.mb-4
      h5 Figura 1.
      span Ambiente externo de las organizaciones
    div.p-5.bg-color-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          figure
            img(src="@/assets/curso/tema1/5.svg", data-aos="zoom-in")
    figcaption.bg-color-4.mt-2.mb-4 Nota. Tomado de Blandez Ricalde (2014).

    p.mb-4 Cada sector está compuesto por diversos elementos que desempeñan un papel clave en el entorno de una organización:

    .bg-full-width.bg-color-info
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/6.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="8%" y="27.5%" numero="+")
                h5 01. Sector industrial
                p Incluye aspectos como los competidores, el nivel de competitividad, el tamaño del sector y las industrias relacionadas que interactúan con la organización.
    
              .bg-color-white.box-shadow.p-3(x="23%" y="12%" numero="+")
                h5 02. Sector de materias primas
                p Abarca proveedores, fabricantes, bienes raíces y servicios esenciales para el funcionamiento de la organización.
    
              .bg-color-white.box-shadow.p-3(x="77%" y="11%" numero="+")
                h5 03. Sector de recursos humanos
                p Se enfoca en el mercado laboral, las agencias de empleo, universidades, centros de capacitación, empleados provenientes de otras empresas y el sindicalismo.
    
              .bg-color-white.box-shadow.p-3(x="93%" y="29%" numero="+")
                h5 04. Sector financiero
                p Considera los mercados de valores, instituciones bancarias, opciones de ahorro y préstamo, así como inversionistas privados que aportan capital.
    
              .bg-color-white.box-shadow.p-3(x="100%" y="52%" numero="+")
                h5 05. Sector del mercado
                p Está compuesto por clientes, consumidores y usuarios potenciales que demandan bienes y servicios.

              .bg-color-white.box-shadow.p-3(x="95%" y="75.5%" numero="+")
                h5 06. Sector tecnológico
                p Integra elementos como las técnicas de producción, avances científicos, centros de investigación, procesos de automatización y materiales innovadores.
    
              .bg-color-white.box-shadow.p-3(x="80%" y="102%" numero="+")
                h5 07. Sector económico
                p Incluye factores como la estabilidad económica, tasas de empleo, inflación, niveles de inversión y el crecimiento económico en general.
    
              .bg-color-white.box-shadow.p-3(x="15%" y="102%" numero="+")
                h5 08. Sector gubernamental
                p Comprende la influencia de los gobiernos locales, estatales y federales a través de leyes, regulaciones, impuestos, servicios, el sistema judicial y los procesos políticos.
    
              .bg-color-white.box-shadow.p-3(x="4%" y="74%" numero="+")
                h5 09.Sector sociocultural
                p Está relacionado con aspectos como la edad, valores, creencias, nivel educativo, religiones, ética laboral, y movimientos sociales relacionados con el medio ambiente y los derechos del consumidor.
    
              .bg-color-white.box-shadow.p-3(x="0%" y="51%" numero="+")
                h5 10.Sector internacional
                p Este sector abarca factores relacionados con la competencia global y las oportunidades de expansión en mercados extranjeros. Incluye la adquisición de empresas internacionales, el acceso a mercados de exportación, las regulaciones aduaneras en otros países, las normativas internacionales y las fluctuaciones en los tipos de cambio. Estos elementos influyen en la capacidad de la organización para competir y adaptarse en un contexto globalizado.

    .bg-full-width.bg-color-5.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 Cada uno de estos sectores, impacta de manera particular en el desarrollo y las decisiones de la organización, formando un entorno interconectado que define sus oportunidades y desafíos.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] El microentorno
    
    p El microentorno de una organización está conformado por todos los actores y factores externos inmediatos que influyen directa o indirectamente en su funcionamiento diario y en la toma de decisiones estratégicas. A diferencia del macroentorno, que abarca aspectos más amplios como el contexto político, económico, social, tecnológico, ecológico y legal (PESTEL), el microentorno se centra en los elementos cercanos y específicos que interactúan con la empresa de manera directa.
    p.mb-5 Los principales componentes del microentorno son:

    .bg-full-width-2.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-8.mb-3.mb-lg-0
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Clientes
                p.text-center Constituyen la base de cualquier organización, puesto que sus necesidades y preferencias determinan la oferta de productos o servicios.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Proveedores
                p.text-center Aseguran el suministro de recursos necesarios para las operaciones, desde materias primas hasta servicios logísticos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Competidores
                p.text-center Influyen en la estrategia al presionar la innovación, el precio, la calidad y la diferenciación de los productos o servicios.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/10.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Intermediarios
                p.text-center Son los canales de distribución o aliados que facilitan la llegada de los productos o servicios al cliente final.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Grupos de interés o <em>stakeholders</em>
                p.text-center Incluyen entidades como socios, inversionistas, organismos reguladores y la comunidad local, que tienen un impacto significativo en las decisiones empresariales.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/7.png', alt='')
    
    h2(data-aos="fade-left") ¿Por qué es importante realizar un análisis del microentorno?
    p.mb-5 Realizar un análisis detallado del microentorno es necesario para identificar oportunidades y amenazas inmediatas, optimizar recursos y mejorar la competitividad. Alguno de los beneficios que arroja realizar este tipo de análisis o diagnóstico, son:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/13.png")
            .col-lg-7
              h5 Tomar decisiones estratégicas fundamentadas
              p Comprender el entorno cercano permite a las organizaciones desarrollar estrategias más precisas y efectivas para enfrentar desafíos específicos.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/14.png")
            .col-lg-7
              h5 Identificar oportunidades de mercado
              p Evaluar las necesidades insatisfechas de los clientes y las áreas de mejora en la competencia ayuda a descubrir nuevas oportunidades para crecer.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/15.png")
            .col-lg-7
              h5 Gestionar riesgos y amenazas
              p Detectar posibles problemas como la dependencia de un único proveedor, el ingreso de nuevos competidores o cambios en las preferencias de los clientes facilita la preparación anticipada para mitigar riesgos.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/16.png")
            .col-lg-7
              h5 Fortalecer relaciones
              p Al analizar a proveedores, intermediarios y otros socios, se pueden establecer colaboraciones más sólidas y beneficiosas, mejorando la eficiencia en la cadena de suministro y distribución.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/17.png")
            .col-lg-7
              h5 Mejorar la experiencia del cliente
              p Entender a profundidad las necesidades y expectativas del cliente permite personalizar los productos o servicios y construir relaciones más duraderas.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/18.png")
            .col-lg-7
              h5 Monitorear la competencia
              p Identificar fortalezas y debilidades de los competidores ayuda a la organización a diferenciarse y mantener una ventaja competitiva.
    

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] El macroentorno
    
    p El macroentorno de una organización representa un elemento fundamental que influye directa e indirectamente en su desempeño, condicionando sus decisiones estratégicas y operativas. Cada organización opera en un entorno único, marcado por características específicas que generan incertidumbre, un rasgo distintivo del entorno actual en muchas industrias.
    p.mb-5 Dentro de este contexto, se destacan tres dimensiones esenciales que permiten analizar y comprender el impacto del macroentorno en una organización:

    .row.align-items-start.mb-5
      .col-lg-4.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/19.png", alt="").mb-4.mb-lg-0
      .col-lg-8.mb-3.mb-lg-0.order-2.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Capacidad")
            p Esta dimensión se refiere al nivel en que el entorno facilita o restringe el crecimiento de la organización. Está relacionada con la disponibilidad o escasez de recursos esenciales, como talento humano, insumos, tecnología y oportunidades de mercado. Una alta capacidad del entorno puede promover el desarrollo organizacional, mientras que una baja capacidad puede limitar su expansión.
    
          .div(titulo="Volatilidad")
            p Hace referencia al grado de inestabilidad y cambio en el entorno. Entornos altamente volátiles están caracterizados por constantes fluctuaciones, como cambios regulatorios, avances tecnológicos rápidos o variaciones en las demandas del mercado. La capacidad de adaptación de la organización frente a estas variaciones es vital para mantener su competitividad.
    
          .div(titulo="Complejidad")
            p Representa la diversidad y la interconexión de los elementos que componen el entorno. Un entorno más complejo incluye múltiples variables interrelacionadas, como diferentes actores económicos, políticos, sociales y culturales, que influyen en las operaciones de la organización. Esta dimensión también implica mayores desafíos en la gestión de la información y la toma de decisiones estratégicas.
      
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/20.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-6.py-4.px-5.mb-3(data-aos="fade-left")
          p.mb-0 El macroentorno actúa como un marco externo que configura el contexto operativo de las organizaciones. El éxito organizacional radica en su capacidad para interpretar, anticiparse y adaptarse a las dinámicas de estas tres dimensiones, logrando una estrategia que transforme los retos en oportunidades y las amenazas en ventajas competitivas. 
        p(data-aos="fade-left") El modelo tridimensional del entorno organizacional se representa de manera gráfica en el siguiente diagrama, donde las flechas señalan la dirección hacia un mayor nivel de incertidumbre ambiental. Este modelo destaca cómo la interacción entre los distintos factores del entorno puede influir en la estabilidad y el desempeño de una organización.


    .titulo-figura.mb-4
      h5 Figura 2.
      span Modelo tridimensional del entorno organizacional
    .row.justify-content-center
      .col-lg-10
        div.p-5.bg-color-4
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-8
              figure
                img(src="@/assets/curso/tema1/21.svg", data-aos="zoom-in")
        figcaption.bg-color-4.mt-2.mb-4 Nota. Tomado de Blandez Ricalde (2014).

    p.mb-4 La figura representa el Modelo Tridimensional del Entorno Organizacional, que se usa para analizar el nivel de incertidumbre en el entorno de una empresa. Este modelo considera tres dimensiones claves:

    .bg-full-width.bg-h85-2.mb-5
      .px-4.px-md-5  
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
                h5 1.	Simplicidad vs. Complejidad (eje horizontal)
                ul.lista-ul--color.ms-3
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-7
                    p.mb-0 <b>Simple.</b> Pocos factores afectan a la empresa y son fáciles de entender.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-7
                    p.mb-0 <b>Complejo.</b> Muchos factores influyen y son difíciles de prever o controlar. 
                h5 2.	Estabilidad vs. Dinamismo (eje vertical)
                ul.lista-ul--color.ms-3
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-7
                    p.mb-0 <b>Estable.</b> Los cambios en el entorno son mínimos y predecibles.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-7
                    p.mb-0 <b>Dinámico.</b> Cambios frecuentes e impredecibles, lo que aumenta la incertidumbre. 
                h5 3.	Abundancia vs. Escasez (eje diagonal)
                ul.lista-ul--color.ms-3
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-7
                    p.mb-0 <b>Abundante.</b> Disponibilidad suficiente de recursos y oportunidades.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-7
                    p.mb-0 <b>Escaso.</b> Recursos limitados y alta competencia para obtenerlos. 
              .col-lg-4(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema1/22.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    h2.mb-5(data-aos="fade-left") Interpretación del modelo

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/23.png", data-aos="zoom-in")
      .col-lg-8
        ul.lista-ul--color
          li.mb-4.d-flex
            i.far.fa-arrow-alt-circle-right.bg-color-7
            p.mb-0 <b>Menor incertidumbre.</b> Un entorno simple, estable y con abundantes recursos es más predecible y fácil de manejar.
          li.mb-4.d-flex
            i.far.fa-arrow-alt-circle-right.bg-color-7
            p.mb-0 <b>Mayor incertidumbre.</b> Un entorno complejo, dinámico y con escasez de recursos genera más retos, porque los cambios son constantes y difíciles de anticipar.
        .bg-color-6.py-4.px-5.mb-3(data-aos="fade-left")
          p.mb-0 Hoy en día, las organizaciones han centrado su enfoque en lo que se denomina exploración del entorno o exploración del terreno, una práctica estratégica que les permite anticiparse e interpretar los cambios constantes en su medio externo. Este concepto se refiere a la obtención y análisis de información relevante que facilite la identificación de tendencias emergentes, el seguimiento de acciones y la construcción de escenarios alternativos que favorezcan la toma de decisiones informada.
    
    h2(data-aos="fade-left")  Importancia del diagnóstico macroentorno

    .bg-full-width.bg-h85.mb-5
      .px-4.px-md-5  
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-9(data-aos="fade-left").mb-3.mb-lg-0
                p.mb-0 El análisis del macroentorno es un proceso estratégico mediante el cual las organizaciones evalúan los factores externos que pueden influir, directa o indirectamente, en sus operaciones, desempeño y sostenibilidad a largo plazo. Este análisis tiene como objetivo identificar tendencias, oportunidades, riesgos y desafíos provenientes de un entorno externo que, aunque no pueden ser controlados por la organización, impactan significativamente en su funcionamiento y competitividad. 
              .col-lg-3(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema1/24.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    p.mb-5 Al realizar un análisis del macroentorno las organizaciones pueden anticiparse a los cambios del entorno y adaptarse de manera efectiva. A continuación, se destacan algunas razones claves por las cuales este análisis es fundamental:

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/25.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Identificación de oportunidades")
            p Detectar tendencias emergentes en el entorno, como avances tecnológicos o cambios en las preferencias del consumidor, permite a las organizaciones capitalizar nuevas oportunidades antes que sus competidores.
    
          .div(titulo="Gestión de riesgos")
            p Comprender los factores externos ayuda a las organizaciones a anticiparse a posibles amenazas, como cambios en la regulación, fluctuaciones económicas o crisis ambientales, y desarrollar estrategias para mitigar sus efectos.
    
          .div(titulo="Planeación estratégica")
            p El análisis del macroentorno proporciona una base sólida para la formulación de estrategias a largo plazo, porque permite alinear los objetivos organizacionales con las dinámicas externas.
          .div(titulo="Adaptación a un entorno cambiante")
            p En un mundo caracterizado por la volatilidad, la incertidumbre, la complejidad y la ambigüedad (entornos VUCA), las organizaciones que monitorean y analizan continuamente el macroentorno están mejor preparadas para responder de manera proactiva a los cambios.
          .div(titulo="Toma de decisiones informada")
            p Al comprender cómo los factores externos pueden influir en las operaciones y resultados, las decisiones organizacionales se basan en datos y análisis objetivos, reduciendo la improvisación y aumentando la efectividad.
    
    h2(data-aos="fade-left") Ejemplo práctico

    .bg-full-width.bg-color-5.mb-5
      .px-4.px-md-5  
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center.p-5
              .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0
                p.mb-0 Un análisis de macroentorno en la industria automotriz podría revelar tendencias como el aumento en la demanda de vehículos eléctricos (factores tecnológicos y sociales), regulaciones gubernamentales que favorecen la movilidad sostenible (factores políticos y ecológicos) y una mayor competitividad global (factores económicos). Las empresas del sector podrían utilizar esta información para redirigir inversiones hacia tecnología limpia, adaptar su oferta de productos y buscar alianzas estratégicas con proveedores sostenibles.
              .col-lg-5(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema1/26.png', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
      


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/articulo.oa?id=498150310002" target="_blank" rel="noopener noreferrer") Gutiérrez Olvera, S., & Montañez Moya, G. S. (2011). Innovación tecnológica como parte de la cultura empresarial: Diagnóstico de la pequeña y mediana empresa tequilera. RIDE Revista Iberoamericana para la Investigación y el Desarrollo Educativo, 1(2), 18-32. Centro de Estudios e Investigaciones para el Desarrollo Docente A.C. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.5fuerzasdeporter.com/ " target="_blank" rel="noopener noreferrer") Riquelme Leiva, Matias (2015, Junio). Las 5 Fuerzas de Porter – Clave para el Éxito de la Empresa. Santiago, Chile. Retrieved from 

            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/ZN2yBcuip9g?si=Kjdo1-zfcWqvZiC3" target="_blank" rel="noopener noreferrer") Edu. Virtual y a Distancia de la U. Cundinamarca  (2023, 24 de febrero). Diagnóstico estratégico [Video]. Youtube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
