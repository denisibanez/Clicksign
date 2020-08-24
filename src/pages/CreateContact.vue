<template>
  <div class="container-fluid create-contact-wrapper">
    <div class="row"> 
      <div class="col-md-12">
        <header-component  />
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
        <modal-create-contact :idModal="'modal-create-contact'" />
      </template>
    </modal>
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header'
import EmptyList from '@/components/EmptyList'
import Modal from '@/components/Modal'
import ModalCreateContact from '@/components/ModalCreateContact'

export default {
  name: 'create-contact',

  components: {
    Modal,
    EmptyList,
    HeaderComponent,
    ModalCreateContact
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

</style>
