<template>
  <div>
    <Loader v-if="loading" />
    <div v-else>
      <h4 v-if="noData">
        There are no such episode &#128542;
      </h4>
      <ul
        v-else
        class="collection with-header"
      >
        <li class="collection-header">
          <h2>{{ info.title }}</h2>
        </li>
        <!-- eslint-disable-next-line vue/require-v-for-key -->
        <li class="collection-item">
          <b>date:</b> {{ info.air_date }}
        </li>
        <li class="collection-item">
          <b>Season Number:</b> {{ info.episode }}
        </li>
        <li class="collection-item">
          <b>Episode Number:</b> {{ info.episode }}
        </li>
        <li class="collection-item">
          <b>Series:</b> {{ info.series }}
        </li>
        <li class="collection-header">
          <h4>List of characters</h4>
        </li>
        <li
          class="collection-item"
          v-for="(character,i) in info.characters"
          :key="i"
        >
          {{ info.characters[i] }}
        </li>
      </ul>
      <router-link to="/">
        <button class="waves-effect waves-light btn">
          Back to home
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import Loader from '@/components/Loader'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'EpisodeInfo',
  components: {
    Loader
  },
  data () {
    return {
      info: {},
      loading: true,
      noData: true
    }
  },
  computed: mapGetters(['getInfo']),
  methods: {
    ...mapActions(['getData'])
  },
  async mounted () {
    //  this.info = this.$route.params.value
    await this.getData({ entity: 'episodes' })
    this.info = this.getInfo[
      this.getInfo.findIndex((x) => x.title.toLowerCase() === this.$route.params.value.toLowerCase())
    ]
    if (this.info) {
      this.noData = false
    } else {
      this.noData = true
    }
    this.loading = false
  }
}
</script>
