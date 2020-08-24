<template>
  <div>
    <div class="form">
      <p>Deseja realmente excluir o contato?</p>
    </div>

    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-secondary"
        @click="$bvModal.hide('modal-delete-contact')"> {{ cancel }}</button>
      <button 
        type="button"
        class="btn btn-primary"
        @click="submit">{{ ok }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal-delete-contact',

  props: {
    ok: {
      type: String,
      default: 'Excluir'
    },
    cancel: {
      type: String,
      default: 'Cancelar'
    },
  },

  methods: {
    submit() {
      this.$bvModal.hide('modal-delete-contact')
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';

p {
  @include formatText(16px, normal);
  color: #2a2d3b;
}

.form {
  padding: 30px;
}
</style>
