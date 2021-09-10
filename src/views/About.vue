<template lang="html">
  <section class="container about">
    <div class="row m-4">
      <p class="col">
        Pčelarska kuća „Medenjaci“ se snabdeva najfinijim pčelinjim proizvodima direktno
        iz sela za koje sigurno nikad niste čuli.
        <br>
        Opšte je poznato koliko su pčelinji proizvodi zdravi (i pritom ukusni), te vam toplo
        preporučujemo da iz udobnosti svog doma i po najpovoljnijim cenama naručite
        neke od njih i uverite se u kvalitet koji nudimo.
        Hvala!
      </p>
    </div>
    <div class="row">
      <img class="img-fluid m-4 mx-auto logo" src="../assets/logo_crop.png"/>
    </div>
  </section>
</template>

<script lang="js">

export default {
  name: 'about',
  props: [],
  mounted() {

  },
  data() {
    return {

    };
  },
  methods: {

  },
  computed: {

  },
};

</script>

<style scoped>
.about {
  text-align: justify;
}
.logo {
  max-width: 40%;
}
</style>
