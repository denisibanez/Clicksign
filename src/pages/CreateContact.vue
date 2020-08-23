<template>
  <div class="container-fluid create-contact-wrapper">
    <div class="row"> 
      <div class="col-md-12">
        <header-component />
        <div class="create-contact-body">
          <div class="row">
            <div class="col-md-12">
              <empty-list />
            </div>
          </div>
        </div>
      </div>
    </div>

    <modal>
      <template v-slot:content>
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
      </template>
    </modal>
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header'
import EmptyList from '@/components/EmptyList'
import Modal from '@/components/Modal'

export default {
  name: 'create-contact',

  components: {
    Modal,
    EmptyList,
    HeaderComponent
  },

  data () {
    return {
      titles: {
        ok: 'Salvar',
        cancel: 'Cancelar' 
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';
</style>
