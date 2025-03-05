<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Herramientas de análisis del ambiente externo'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-4 En la actualidad, teniendo en cuenta el contexto volátil y evolutivo, comprender el contexto en el que opera una organización es fundamental para la toma de decisiones estratégicas. 

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-5.p-4(data-aos="fade-left")
          p Por tanto, aplicar constantemente un análisis del ambiente externo, permite identificar oportunidades y amenazas que pueden influir en el desempeño de una empresa, ayudándola a anticiparse a cambios del mercado, regulaciones gubernamentales, tendencias tecnológicas y expectativas de los consumidores.
          figure.d-flex.justify-content-end
            img.d-none.d-lg-flex(src="@/assets/curso/tema2/1.svg", data-aos="zoom-in", style="width: 100px")
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-8.p-4(data-aos="fade-left")
          p.mb-0 Para lograr este objetivo, se debe analizar el entorno desde dos enfoques, (Microentorno y macroentorno) existen diversas herramientas de análisis del entorno, como la matriz PESTEL, que examina factores políticos, económicos, sociales, tecnológicos, ecológicos y legales; el Análisis de las Cinco Fuerzas de Porter, que permite evaluar la competitividad de una industria; y la Matriz DOFA, que ayuda a identificar fortalezas, oportunidades, debilidades y amenazas.
    
    p.mb-5 Estas herramientas brindan una visión estructurada del entorno y facilitan la formulación de estrategias más efectivas, alineadas con la realidad del mercado y las necesidades de la organización. 

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Herramientas para el análisis del microentorno

    p.mb-4 Existen diversas herramientas y metodologías que facilitan el análisis del microentorno; entre ellas se encuentran:

    h2(data-aos="fade-left") Análisis FODA (Fortalezas, Oportunidades, Debilidades, Amenazas)
    p Permite identificar factores internos y externos relevantes.
    p La matriz DOFA (o SWOT, por sus siglas en inglés), es una herramienta estratégica utilizada para analizar tanto el entorno interno como externo de una organización, proyecto o situación. Permite identificar factores claves que influyen en su desempeño y generar estrategias en función de estos elementos.
    p.mb-5 Los pasos para su elaboración son:

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/3.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Identificar los elementos internos (debilidades y fortalezas)")
            p Estos son factores que la organización puede controlar y que dependen de sus recursos, capacidades y procesos internos.
            ul.lista-ul--color
              li.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 <b>Fortalezas (D).</b> Aspectos positivos y diferenciadores internos que brindan una ventaja competitiva. Ejemplos:
              ul.lista-ul--color.ms-3  
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-7
                  p.mb-0 Personal capacitado.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-7
                  p.mb-0 Reconocimiento de la marca.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-7
                  p.mb-0 Procesos eficientes.
            p.ms-3 <b>Pregunta guía:</b> ¿Qué hacemos bien? ¿Qué nos da una ventaja?

            ul.lista-ul--color
              li.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 <b>Debilidades (O).</b> Aspectos internos que limitan el desempeño o representan áreas de mejora. Ejemplos:
              ul.lista-ul--color.ms-3  
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-7
                  p.mb-0 Falta de recursos financieros.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-7
                  p.mb-0 Baja motivación del personal.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-7
                  p.mb-0 Tecnología obsoleta.
            p.ms-3 <b>Pregunta guía:</b> ¿Qué aspectos necesitamos mejorar? ¿Qué nos está frenando?
    
          .div(titulo="Analizar los elementos externos (amenazas y oportunidades)")
            p Estos son factores fuera del control de la organización que pueden influir positiva o negativamente.
            ul.lista-ul--color
              li.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 <b>Oportunidades (F).</b> Factores externos que podrían beneficiar a la organización si se aprovechan. Ejemplos:
              ul.lista-ul--color.ms-3  
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-7
                  p.mb-0 Nuevos mercados emergentes.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-7
                  p.mb-0 Cambios tecnológicos favorables.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-7
                  p.mb-0 Alianzas estratégicas.
            p.ms-3 <b>Pregunta guía:</b> ¿Qué tendencias o cambios en el entorno podríamos aprovechar?

            ul.lista-ul--color
              li.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 <b>Amenazas (A).</b> Factores externos que podrían impactar negativamente en la organización. Ejemplos:
              ul.lista-ul--color.ms-3  
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-7
                  p.mb-0 Competencia creciente.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-7
                  p.mb-0 Regulaciones desfavorables.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-7
                  p.mb-0 Crisis económicas.
            p.ms-3 <b>Pregunta guía:</b> ¿Qué riesgos externos enfrentamos? ¿Qué factores podrían afectar nuestro éxito?

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
      .col-lg-7.order-2.order-lg-1
        h2(data-aos="fade-left") Modelo de las 5 Fuerzas de Porter
        .bg-color-9.py-4.px-5.mb-3(data-aos="fade-left")
          p.mb-0 Analiza la intensidad de la competencia, la amenaza de nuevos entrantes, el poder de negociación de los proveedores, el poder de negociación de los clientes y la amenaza de productos sustitutos.
        h2(data-aos="fade-left") Mapas de <em>stakeholders</em>
        p Ayudan a identificar y priorizar a los actores claves en función de su nivel de influencia e interés.
    
    .bg-full-width.bg-color-8.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/5.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 El microentorno representa el contexto más cercano y directo en el que opera una organización. Su análisis es necesario para mantener la competitividad, adaptarse a cambios inmediatos y aprovechar oportunidades en un mercado dinámico. Una empresa que comprende su microentorno puede tomar decisiones más acertadas y garantizar su sostenibilidad a largo plazo.

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Herramientas para el análisis de macroentornos
    
    p.mb-4 Las herramientas de diagnóstico o análisis externo permiten a las organizaciones evaluar su entorno competitivo, identificar oportunidades y amenazas, y desarrollar estrategias efectivas para mejorar su posicionamiento en el mercado. Estas herramientas ayudan a recopilar información relevante sobre tendencias, riesgos y factores que pueden afectar el desempeño de la empresa. A continuación, se explican algunas de las principales herramientas utilizadas en este análisis:

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/6.png", alt="")(data-aos="fade-left").mb-4.mb-lg-0
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Matriz de Perfil Competitivo (MPC)")
            p La Matriz de Perfil Competitivo (MPC), es una herramienta que permite comparar a una empresa con sus principales competidores, evaluando factores críticos de éxito dentro de una industria.
            h5 ¿En qué consiste?
            ul.lista-ul--color.ms-3
              li.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Se identifican los factores claves que influyen en el éxito dentro de un sector (calidad, innovación, servicio al cliente, precios, etc.).
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Se asigna un peso a cada factor, según su importancia.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Se califica el desempeño de la empresa y sus competidores en cada factor.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Se obtiene una puntuación total que permite visualizar la ventaja competitiva de cada empresa.
            h5 Importancia:

            ul.lista-ul--color.ms-3
              li.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Permite identificar fortalezas y debilidades en relación con la competencia.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Ayuda a formular estrategias para mejorar el desempeño en áreas claves.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Facilita la toma de decisiones basada en datos objetivos.
    
          .div(titulo="<em>Benchmarking</em>")
            p El <em>Benchmarking</em> es un proceso de comparación y aprendizaje en el que una empresa analiza las mejores prácticas de otras organizaciones líderes en la industria para mejorar su propio desempeño.
            h5 ¿En qué consiste?
            ul.lista-ul--color.ms-3
              li.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Se identifican empresas o sectores que destacan en un área específica.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Se recopilan datos sobre sus estrategias, procesos o modelos de negocio.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Se comparan estos datos con el desempeño de la empresa.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Se implementan mejoras basadas en las mejores prácticas observadas.
            h5 Importancia:

            ul.lista-ul--color.ms-3
              li.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Permite mejorar la eficiencia y productividad al adoptar estrategias exitosas.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Facilita la innovación y el aprendizaje organizacional.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Ayuda a mantener la competitividad.
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/7.png", alt="")(data-aos="fade-left").mb-4.mb-lg-0
      .col-lg-8.order-2.order-lg-1
        AcordionA(tipo="b")
          .div(titulo="Desarrollo de escenarios")
            p El desarrollo de escenarios es una técnica que permite prever posibles futuros y diseñar estrategias para responder a ellos de manera efectiva.
            h5 ¿En qué consiste?
            ul.lista-ul--color.ms-3
              li.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Se identifican tendencias y factores claves que pueden afectar el futuro.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Se desarrollan diferentes escenarios basados en combinaciones de variables.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Se analizan los impactos y las posibles respuestas estratégicas.
            h5 Importancia:

            ul.lista-ul--color.ms-3
              li.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Ayuda a la toma de decisiones en entornos inciertos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Permite a la empresa estar preparada para diferentes situaciones.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Fomenta la flexibilidad y la capacidad de adaptación.
    
          .div(titulo="Método Delphi")
            p El Método Delphi es una técnica de consulta experta que permite prever tendencias y obtener consenso sobre temas estratégicos mediante encuestas sucesivas a especialistas.
            h5 ¿En qué consiste?
            ul.lista-ul--color.ms-3
              li.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Se selecciona un grupo de expertos en el área a analizar.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Se realizan rondas de encuestas o cuestionarios anónimos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Se analizan y refinan las respuestas en cada ronda hasta alcanzar consenso.
            h5 Importancia:

            ul.lista-ul--color.ms-3
              li.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Facilita la predicción de tendencias y el análisis de problemas complejos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Reduce el sesgo al ser un proceso anónimo y basado en opiniones de expertos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Apoya la planificación estratégica con información cualificada.

          .div(titulo="Método Delphi")
            p El análisis de tendencias permite detectar patrones y cambios en el mercado, la tecnología o el comportamiento de los consumidores para anticipar oportunidades y amenazas.
            h5 ¿En qué consiste?
            ul.lista-ul--color.ms-3
              li.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Se monitorean datos de diferentes fuentes (mercado, industria, redes sociales, informes).
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Se identifican patrones de cambio o evolución en el entorno.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Se analizan las implicaciones y se ajustan estrategias empresariales.
            h5 Importancia:

            ul.lista-ul--color.ms-3
              li.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Permite anticiparse a cambios en el entorno.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Favorece la innovación y el desarrollo de productos o servicios adecuados.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Ayuda a identificar oportunidades antes que la competencia.

    h2(data-aos="fade-left") Factores del análisis PESTEL, tipos y sus impactos
    p.mb-5 El macroentorno abarca elementos externos de amplio alcance, que afectan no solo a una organización específica, sino a industrias completas e, incluso, a la economía global. Para estructurar su análisis, se suelen emplear modelos como el PESTEL, que organiza los factores en seis categorías principales:

    .titulo-figura.mb-4
      h5 Figura 3.
      span Análisis PESTEL
    div.p-5.bg-color-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          figure
            img(src="@/assets/curso/tema2/8.svg", data-aos="zoom-in")
    
    .bg-color-white.shadow-soft.py-4.px-lg-5.mb-5
      .row.justify-content-around.align-items-center
        .col-md-auto
          img(src="@/assets/template/bg-icono-pdf.svg", style="width: 90px;")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Factores PESTEL
              p En el PDF <b>Factores PESTEL</b>, se presentan cada uno de los factores del análisis PESTEL.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")
                span Descargar
                i.fas.fa-arrow-right
    
    h2(data-aos="fade-left") Importancia del análisis PESTEL
   
    .bg-full-width.bg-h85
      .px-4.px-md-5  
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
                p El análisis PESTEL permite a las organizaciones:
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-7
                    p.mb-0 Identificar riesgos y oportunidades en el entorno externo.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-7
                    p.mb-0 Tomar decisiones informadas sobre estrategias de mercado, expansión o mitigación de riesgos.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-7
                    p.mb-0 Anticiparse a cambios futuros en el entorno global y local.
              .col-lg-4(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema2/9.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
                
    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        p.mb-0 Este análisis es especialmente útil en sectores cambiantes o en procesos de internacionalización, donde los factores externos tienen un impacto significativo en la viabilidad y el éxito de las estrategias empresariales.






    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/articulo.oa?id=360443665009" target="_blank" rel="noopener noreferrer") Padilla-Martínez, M. P., Quispe-Otacoma, A. L., Nogueira-Rivera, D., & Hernández-Nariño, A. (2016). Diagnóstico y perspectivas de fomento del emprendimiento como instrumento de desarrollo. Ingeniería Industrial, 37(1), 91-103. Instituto Superior Politécnico José Antonio Echeverría. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://ebac.mx/blog/que-es-el-analisis-pestel  .mb-3.mb-lg-0" target="_blank" rel="noopener noreferrer") EBAC. (2023, 3 de mayo). Qué es el análisis PESTEL y cómo hacerlo: factores y ejemplos. EBAC

            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/6qEWc8Z5x2E?si=dA4KOFRkSfivOOKN" target="_blank" rel="noopener noreferrer") Silva, L. (2021, 11 de junio) Fundamentos de Análisis externo de una organización [Video]. Youtube 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
