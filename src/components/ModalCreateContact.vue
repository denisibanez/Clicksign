<template>
  <div>
    <b-row class="my-1">
      <b-col sm="12">
        <label for="name">Nome</label>
        <b-form-input id="name" type="text"></b-form-input>
      </b-col>
    </b-row>

    <b-row class="my-1">
      <b-col sm="12">
        <label for="e-mail">E-mail</label>
        <b-form-input id="e-mail" type="text"></b-form-input>
      </b-col>
    </b-row>

    <b-row class="my-1">
      <b-col sm="12">
        <label for="phone">Telefone</label>
        <b-form-input id="phone" type="text"></b-form-input>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'modal-create-contact',

  props: {
    typeModal: {
      type: String,
      default: 'cadastro'
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';

label {
  @include formatText(14px, normal);
  color: #2a2d3b;
}

input {
  border: 1px solid #c0c3d2;
  height: 32px;
}
</style>
