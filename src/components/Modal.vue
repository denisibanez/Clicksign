<template>
  <b-modal
    :id="idModal"
    :title="title"
    :ok-title="ok"
    :cancel-title="cancel">
      <slot name="content"></slot>
  </b-modal>
</template>

<script>
export default {
  name: 'modal',

  props: {
    ok: {
      type: String,
      default: 'Salvar'
    },
    cancel: {
      type: String,
      default: 'Cancelar'
    },
    idModal: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: 'Criar novo contato'
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';

.modal-dialog {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

    .modal-content {
      border-radius: 16px;

      .modal-header {
        border-bottom: #c0c3d2 1px solid;
      }

      .modal-body {
        padding: 30px;
      }

      .modal-footer {
        border-top: #c0c3d2 1px solid;
        height: 60px;

        .btn-secondary {
          color: #fa7268;
          background-color: transparent;
          border: 0;
          @include formatText(14px, normal);
        }

        .btn-primary {
          background-color: #fa7268;
          color: #ffffff;
          @include formatText(14px, 500);
          width: 72px;
          height: 32px;
          border-radius: 16px;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
          border: solid 1px rgba(255, 255, 255, 0.16);

          &:disabled {
            opacity: 0.32;
          }
        }
      }
    }  
}

</style>