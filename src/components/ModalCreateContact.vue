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
        class="btn btn-secondary"> 
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
      }
    }
  },

  methods: {
    ...mapActions({
      setListData: 'setListData'
    }),

    submit() {
      const formatItem = {
        prevent: '',
        contatos: this.form.name.text,
        email: this.form.mail.text,
        telefone: this.form.phone.text,
        editar: '',
        id: 0
      }
      this.setListData(formatItem)
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

.form {
  padding:30px;
}
</style>
