<template>
  <b-button class="btn-custom" :to="to">{{ txt }}</b-button>
</template>

<script>
export default {
  props: ['to', 'txt']
}
</script>

<style>
.btn-custom {
  background-color: rgba(0, 0, 0, 0)!important;
  border-color: #D9763D!important;
  color: white!important;
}

.btn-custom:hover {
  background-color: #d9763d2d!important;
  border-color: #D9763D!important;
  box-shadow: 0px 0px 1rem  black;
}

</style>
