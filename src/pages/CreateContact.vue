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
            </div>
          </div>
        </div>
      </div>
    </div>

    <modal
      :idModal="'modal-create-contact'">
      <template v-slot:content> 
        <modal-create-contact />
      </template>
    </modal>

    <modal
      :idModal="'modal-delete-contact'"
      :title="'Excluir contato'">
      <template v-slot:content>
        <modal-delete-contact />
      </template>
    </modal>

    <modal
      :idModal="'modal-edit-contact'"
      :title="'Editar contato'">
      <template v-slot:content> 
        <modal-create-contact :typeModal="'edit'" />
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

  computed: {
    ...mapGetters({
      listData: 'listData'
    })
  },
}
</script>

<style lang="scss">

</style>
