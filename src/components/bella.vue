<template>
  <div class="row">
    <dog-profile
      :imageSrc="pic"
      name="Bella"
      altText="Bella Bella she's so nice we named her twice"
      profile="I mostly sleep. I like to snuggle in the comforter."
    />
  </div>
</template>

<script>
import DogProfile from '@/components/dog'

export default {
  name: 'Bella',
  components: {
    DogProfile
  },
  data () {
    return {
      pic: require('../assets/Bella.jpg')
    }
  }
}
</script>
