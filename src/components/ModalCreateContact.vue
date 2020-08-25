<template>
  <div>
    <div class="form">
      <b-row class="my-1">
        <b-col sm="12">
          <label for="name">Nome</label>
          <b-form-input
            id="name"
            type="text"
            v-model="form.name.text">
          </b-form-input>
        </b-col>
      </b-row>

      <b-row class="my-1">
        <b-col sm="12">
          <label for="mail">E-mail</label>
          <b-form-input
            id="mail"
            type="text"
            v-model="form.mail.text">
          </b-form-input>
        </b-col>
      </b-row>

      <b-row class="my-1">
        <b-col sm="12">
          <label for="phone">Telefone</label>
          <b-form-input
            id="phone"
            type="text"
            v-model="form.phone.text">
          </b-form-input>
        </b-col>
      </b-row>
    </div>

    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-secondary"
        @click="$bvModal.hide(idModal)"> 
        {{ cancel }}
      </button>
      <button
        type="button"
        :disabled="false"
        class="btn btn-primary"
        :class="{ 'disabled' : false }"
        @click="submit">
          {{ ok }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'modal-create-contact',

  props: {
    typeModal: {
      type: String,
      default: 'create'
    },
    ok: {
      type: String,
      default: 'Salvar'
    },
    cancel: {
      type: String,
      default: 'Cancelar'
    },
  },

  data() {
    return {
      form: {
        name: {
          text: ''
        },
        mail: {
          text: ''
        },
        phone: {
          text: ''
        },
      },

      idModal: ''
    }
  },

  created() {
    if(this.typeModal == 'edit') {
      const _self = this
      const recoverItem = this.listData.filter((item) => {
        if(item.id == _self.selectedItem.id) return item
      })
      this.form = {
        name: {
          text: recoverItem[0].contatos
        },
        mail: {
          text: recoverItem[0].email
        },
        phone: {
          text: recoverItem[0].telefone
        }
      }

      this.idModal = 'modal-edit-contact'
    } else {
      this.idModal = 'modal-create-contact'
    }
  },

  computed: {
    ...mapGetters({
      listData: 'listData',
      selectedItem: 'selectedItem'
    })
  },

  methods: {
    ...mapActions({
      setListData: 'setListData',
      updateItemModal: 'updateItemModal'
    }),

    submit() {
      
      let number = Math.random()
      number.toString(36)
      let id = number.toString(36).substr(2, 9)
      let idCheck = this.typeModal == 'edit' ? this.selectedItem.id : id
      const formatItem = {
        prevent: '',
        contatos: this.form.name.text,
        email: this.form.mail.text,
        telefone: this.form.phone.text,
        editar: '',
        id: idCheck
      }
      if(this.typeModal == 'create') this.createItem(formatItem)
      else if (this.typeModal == 'edit') this.editItem(formatItem)
    },

    createItem(formatItem) {
      this.setListData(formatItem)
      this.$bvModal.hide(this.idModal)
    },

    editItem(formatItem) {
      this.updateItemModal(formatItem)
      this.$bvModal.hide(this.idModal)
    },
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

.form {
  padding:30px;
}
</style>
