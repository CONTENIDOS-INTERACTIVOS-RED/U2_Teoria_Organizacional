<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Relaciones Interorganizacionales: concepto, teorías y estrategias'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Las relaciones interorganizacionales (RIO) son las conexiones, vínculos o acuerdos establecidos entre dos o más organizaciones con el propósito de alcanzar objetivos comunes, optimizar recursos o mejorar su desempeño en un entorno competitivo. Estas relaciones pueden abarcar desde acuerdos informales hasta colaboraciones estratégicas formales y están fundamentadas en la cooperación y la coordinación.

        p(data-aos="fade-left") El propósito de las relaciones interorganizacionales es crear valor al permitir que las organizaciones compartan recursos, conocimientos y capacidades, logrando así ventajas que serían difíciles o imposibles de alcanzar de manera individual. Estas relaciones pueden surgir por diversas razones, como el acceso a nuevos mercados, la reducción de costos, la innovación compartida o la adaptación a cambios en el entorno económico y social.
    
        
    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Teorías de las relaciones interorganizacionales
    
    p.mb-4 Existen varias teorías que explican las razones detrás del establecimiento de relaciones interorganizacionales y cómo estas afectan el comportamiento y el desempeño de las organizaciones. A continuación, se describen las más relevantes:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/3.png")
            .col-lg-7
              h5 Teoría de los Recursos y Capacidades (<em>Resource-Based View, RBV</em>)
              p Esta teoría sostiene que las organizaciones se relacionan con otras para acceder a recursos que no poseen internamente pero que son esenciales para su éxito competitivo. Estos recursos pueden ser financieros, tecnológicos, humanos o de conocimiento.
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-7
                  p.mb-0 <b>Impacto en las RIO.</b> Las relaciones permiten a las organizaciones superar sus limitaciones internas y fortalecer su posición estratégica.
                
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/4.png")
            .col-lg-7
              h5 Teoría de la Dependencia de Recursos
              p Afirma que las organizaciones son interdependientes y buscan establecer relaciones para gestionar la incertidumbre y obtener recursos críticos del entorno.
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-7
                  p.mb-0 <b>Ejemplo. </b> Una pequeña empresa puede establecer relaciones con un proveedor estratégico para garantizar la disponibilidad de insumos estratégicos.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-7
                  p.mb-0 <b>Impacto en las RIO.</b> Las relaciones surgen como respuesta a la necesidad de gestionar la dependencia y reducir riesgos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/5.png")
            .col-lg-7
              h5 Teoría de los Costos de Transacción
              p Esta teoría explica que las organizaciones optan por colaborar con otras cuando el costo de coordinar y ejecutar actividades externas es menor que el de realizarlas internamente.
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-7
                  p.mb-0 <b>Impacto en las RIO.</b> Se priorizan las relaciones que permiten optimizar costos mediante acuerdos eficientes, como subcontrataciones o alianzas estratégicas
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/6.png")
            .col-lg-7
              h5 Teoría Institucional
              p Sostiene que las organizaciones forman relaciones para cumplir con normas, valores y expectativas del entorno institucional, asegurando legitimidad.
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-7
                  p.mb-0 <b>Impacto en las RIO.</b> Las organizaciones colaboran para alinearse con las regulaciones legales, estándares de la industria o expectativas sociales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/7.png")
            .col-lg-7
              h5 Teoría de Redes
              p Analiza cómo las organizaciones están conectadas a través de redes y cómo estas conexiones influyen en su desempeño. Las redes pueden ser formales o informales y se basan en relaciones de confianza y reciprocidad.
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-7
                  p.mb-0 <b>Impacto en las RIO.</b> Una red sólida puede mejorar el flujo de información, recursos y oportunidades.
    
    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Estrategias de relaciones interorganizacionales

    p.mb-4 El establecimiento y mantenimiento de relaciones interorganizacionales requiere estrategias claras para maximizar sus beneficios y minimizar riesgos. Algunas de las estrategias más comunes incluyen:

    .row.align-items-start.mb-5
      .col-lg-4.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema3/8.png", alt="").mb-4.mb-lg-0
      .col-lg-8.mb-3.mb-lg-0.order-2.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Alianzas estratégicas")
            p Son acuerdos de colaboración entre dos o más organizaciones para alcanzar objetivos específicos, como desarrollar nuevos productos, compartir tecnología o entrar en nuevos mercados.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 <b>Ejemplo.</b> Una alianza entre una empresa tecnológica y una empresa automotriz para desarrollar vehículos eléctricos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 <b>Ventajas.</b> Combina recursos y capacidades complementarias.
    
          .div(titulo="<em>Joint Ventures</em>")
            p Consisten en la creación de una nueva entidad jurídica por parte de dos o más organizaciones para desarrollar proyectos específicos.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 <b>Ejemplo.</b> Empresas que colaboran para explotar conjuntamente un mercado extranjero.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 <b>Ventajas.</b> Distribución equitativa de riesgos y ganancias.
          .div(titulo="Subcontratación (<em>Outsourcing</em>)")
            p Implica delegar ciertas actividades o procesos a organizaciones externas para enfocarse en competencias centrales.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 <b>Ejemplo.</b> Una empresa subcontrata servicios de TI a un proveedor especializado.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 <b>Ventajas.</b> Reducción de costos y enfoque en actividades estratégicas.
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/9.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Consorcios")
            p Agrupaciones de organizaciones que trabajan juntas para alcanzar metas compartidas, generalmente en proyectos de gran escala.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 <b>Ejemplo.</b> Empresas del sector construcción que colaboran para realizar grandes obras de infraestructura.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 <b>Ventajas.</b> Reparto de costos y riesgos.
          .div(titulo="Alianzas estratégicas")
            p Grupos de organizaciones que trabajan juntas de manera informal o formal para compartir conocimientos, experiencias y recursos.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 <b>Ejemplo.</b> Redes de empresas en un clúster industrial.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 <b>Ventajas.</b> Incremento de la innovación y del aprendizaje colectivo.
          .div(titulo="Alianzas estratégicas")
            p Ocurre cuando una organización se une completamente con otra (fusión) o adquiere una parte significativa de otra empresa (adquisición).
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 <b>Ejemplo.</b> Una empresa grande adquiere una startup para aprovechar su tecnología.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 <b>Ventajas.</b> Crecimiento acelerado y consolidación en el mercado.
    
    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Impacto de las relaciones interorganizacionales
    
    p.mb-4 Conozcamos cuál es el impacto de las relaciones interorganizacionales:

    .bg-full-width-2.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-8.mb-3.mb-lg-0    
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Mayor acceso a recursos
                p.text-center Las organizaciones pueden compartir recursos claves como tecnología, infraestructura y capital humano.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Incremento en la innovación
                p.text-center La colaboración fomenta la generación de nuevas ideas y productos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/13.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Reducción de riesgos
                p.text-center Los riesgos financieros y operativos se distribuyen entre las partes involucradas.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/14.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Expansión de mercados
                p.text-center Las relaciones permiten acceder a nuevos segmentos y mercados globales.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/15.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Aprendizaje organizacional
                p.text-center La interacción entre organizaciones facilita el intercambio de conocimiento y mejores prácticas.
    
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/10.png', alt='')
    

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/articulo.oa?id=20605208" target="_blank" rel="noopener noreferrer") Pérez Uribe, R. I. (2004). Componentes empresariales en las MIPyMES colombianas. Revista Escuela de Administración de Negocios, (52), 93-117. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://bdigital.uexternado.edu.co/entities/publication/189f7379-d9a1-4150-ac2b-493bbe46ac2d" target="_blank" rel="noopener noreferrer") Baena Seales, L. E. (2023). Relaciones interorganizacionales (RIO), antecedentes y efectos [Tesis de maestría, Universidad Externado de Colombia]. Universidad Externado de Colombia Repositorio Digital. 

            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/RFqnadAv8LA?si=8MVgx4_5CunWNoAp " target="_blank" rel="noopener noreferrer") Negocios En Tu Mundo (2018, 7 de diciembre) El poder de las alianzas - [Negocios en Tm] [Video]. Youtube.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/5Fq0KYgwBFs?si=GJwKyJrSDry3pBjv " target="_blank" rel="noopener noreferrer") Negocios En Tu Mundo  (2018, 6 de febrero) La importancia de las Alianzas Estratégicas   [Video]. Youtube.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              'El ambiente externo de una organización se divide en dos niveles principales. ¿Cuáles son estos niveles?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Ambiente competitivo y ambiente financiero',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Ambiente económico y ambiente gubernamental',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Ambiente macroeconómico y ambiente microeconómico',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Ambiente tecnológico y ambiente industrial',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Así es!! El ambiente externo de una organización se divide en macroeconómico, que incluye políticas y tendencias globales, y microeconómico, que abarca factores cercanos como competencia, clientes y proveedores.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de los siguientes sectores pertenece al ambiente microeconómico de una organización?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Sector financiero',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Sector gubernamental',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Clientes',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Normativas internacionales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Correcto!! El ambiente microeconómico incluye elementos cercanos y específicos que interactúan directamente con la empresa, como los clientes, los proveedores y los competidores. Los demás sectores mencionados pertenecen al macroeconómico.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'Dentro del microentorno de una organización, ¿qué elemento es clave para la distribución de productos o servicios al consumidor final?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Competidores',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Intermediarios',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Sector sociocultural',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Sector gubernamental',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Excelente!! Los intermediarios son los canales de distribución que facilitan la llegada de productos o servicios al cliente final, desempeñando un papel esencial en la estrategia comercial de una organización.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              'El sector tecnológico dentro del ambiente externo de una organización incluye elementos como:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Normativas internacionales y tasas de cambio',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Avances científicos y procesos de automatización',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Mercados financieros y oportunidades de inversión',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Factores socioculturales y valores éticos',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Asi es!! El sector tecnológico abarca elementos como nuevas técnicas de producción, avances científicos, automatización y materiales innovadores, lo que impacta la competitividad y el desarrollo de la organización.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál de los siguientes sectores del macroentorno se relaciona con leyes, regulaciones y políticas fiscales que afectan a las organizaciones?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Sector económico',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Sector gubernamental',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Sector industrial',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Sector de recursos humanos',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Retroalimentación: Muy bien!! El sector gubernamental abarca la influencia de los gobiernos a través de leyes, regulaciones, impuestos y políticas que impactan el funcionamiento de las organizaciones, determinando su marco legal y operativo.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
