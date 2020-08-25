<template>
  <div class="container-fluid create-contact-wrapper">
    <div class="row"> 
      <div class="col-md-12">
        <header-component :haveBtn="listData.length"/>

        <div class="create-contact-body">
          <div class="row">
            <div class="col-md-12">
              <empty-list v-if="!listData.length"/>
              <list-contact v-else/>

              <b-alert show variant="success" v-if="controlAlert == 'created'">Contato criado com sucesso.</b-alert>
              <b-alert show variant="success" v-if="controlAlert == 'edit'">Contato editado com sucesso.</b-alert>
              <b-alert show variant="success" v-if="controlAlert == 'delete'">Contato removido com sucesso.</b-alert>
            </div>
          </div>
        </div>
      </div>
    </div>

    <modal
      :idModal="'modal-create-contact'">
      <template v-slot:content> 
        <modal-create-contact @createdSuccess="[controlAlert = 'created', resetControlAlert()]"/>
      </template>
    </modal>

    <modal
      :idModal="'modal-delete-contact'"
      :title="'Excluir contato'">
      <template v-slot:content>
        <modal-delete-contact @deleteSuccess="[controlAlert = 'delete', resetControlAlert()]" />
      </template>
    </modal>

    <modal
      :idModal="'modal-edit-contact'"
      :title="'Editar contato'">
      <template v-slot:content> 
        <modal-create-contact :typeModal="'edit'" @editSuccess="[controlAlert = 'edit', resetControlAlert()]" />
      </template>
    </modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import HeaderComponent from '@/components/Header'
import EmptyList from '@/components/EmptyList'
import ListContact from '@/components/ListContact'
import Modal from '@/components/Modal'
import ModalCreateContact from '@/components/ModalCreateContact'
import ModalDeleteContact from '@/components/ModalDeleteContact'

export default {
  name: 'create-contact',

  components: {
    Modal,
    EmptyList,
    HeaderComponent,
    ModalCreateContact,
    ModalDeleteContact,
    ListContact
  },

  data() {
    return {
      controlAlert: ''
    }
  },

  computed: {
    ...mapGetters({
      listData: 'listData'
    })
  },

  created() {
    this.getSession()
  },

  methods: {
    ...mapActions({
      getSession: 'getSession'
    }),

    resetControlAlert() {
      setTimeout(() => {
        this.controlAlert = ''
      },3000)
    }
  }
}
</script>

<style lang="scss">

</style>
