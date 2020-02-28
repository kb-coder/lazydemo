<template>
  <div>
    <h1>{{ name }}</h1>
    <div class="row">
      <img :src="imageSrc" :alt-text="altText" />
    </div>
    <div class="row">
      <p class="column">
        {{ profile }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DogProfile',
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    altText: {
      type: String,
      required: true
    },
    profile: {
      type: String,
      required: false,
      default: 'I am AWESOME'
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>
