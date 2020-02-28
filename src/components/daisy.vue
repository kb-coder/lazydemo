<template>
  <div class="row">
    <dog-profile
      :imageSrc="pic"
      name="Daisy Mae"
      altText="Daisy Mae she's so crazy our little Daisy"
      profile="My name is Daisy Mae. I'm not even two yet. I get really tired while mommy works on the computer."
    />
  </div>
</template>
<script>
import DogProfile from '@/components/dog'

export default {
  name: 'Daisy',
  components: {
    DogProfile
  },
  data () {
    return {
      pic: require('../assets/DaisyMae.jpg')
    }
  }
}
</script>
