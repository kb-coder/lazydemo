<template>
  <div>
    <div class="row">
      <button @click="toggleDogs">Toggle Dogs</button>
    </div>
    <bella-profile
      v-if="showBella"
    />
    <daisy-profile
      v-if="showDaisy"
    />
  </div>
</template>

<script>
import BellaProfile from '@/components/bella'
// import DaisyProfile from '@/components/daisy'
const DaisyProfile = () => import(/* webpackChunkName: 'dogs' */ '@/components/daisy')

export default {
  name: 'Home',
  components: {
    BellaProfile,
    DaisyProfile
  },
  data () {
    return {
      showBella: true
    }
  },
  computed: {
    showDaisy () {
      return !this.showBella
    }
  },
  methods: {
    toggleDogs () {
      this.showBella = !this.showBella
    }
  }
}
</script>
