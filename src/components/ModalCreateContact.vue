<template>
   <b-modal
    id="modal-create-contact"
    title="Criar novo contato"
    :ok-title="'Salvar'"
    :cancel-title="'Cancelar'">
      <b-row class="my-1">
        <b-col sm="12">
          <label for="">Nome</label>
          <b-form-input id="" type=""></b-form-input>
        </b-col>
      </b-row>

      <b-row class="my-1">
        <b-col sm="12">
          <label for="">E-mail</label>
          <b-form-input id="" type=""></b-form-input>
        </b-col>
      </b-row>

      <b-row class="my-1">
        <b-col sm="12">
          <label for="">Telefone</label>
          <b-form-input id="" type=""></b-form-input>
        </b-col>
      </b-row>
  </b-modal>
</template>

<script>
export default {
  name: 'modal-create-contact'
}
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';

#modal-create-contact {
  box-shadow: 0 16px 10px 0 rgba(0, 0, 0, 0.16);

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

          label {
            @include formatText(14px, normal);
            color: #2a2d3b;
          }

          input {
            border: 1px solid #c0c3d2;
            height: 32px;
          }
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
}
</style>
