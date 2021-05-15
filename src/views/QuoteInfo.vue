<template>
  <div>
    <Loader v-if="loading" />
    <div
      v-else
      class="quote"
    >
      <h4 v-if="noData">
        We found no quotes &#128542;
      </h4>
      <div
        v-else
        class="quote__block"
      >
        <h3 class="quote__title">
          We found this quotes
        </h3>
        <div
          class="quote__card"
          v-for="quote in quotes"
          :key="quote.quote_id"
        >
          <blockquote class="quote__text">
            {{ quote.quote }}
          </blockquote>
          <p> <b>{{ quote.author }}</b> (<em>{{ quote.series }}</em> ) </p>
        </div>
      </div>
      <router-link to="/">
        <button class="quote__btn waves-effect waves-light btn">
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
  name: 'QuoteInfo',
  components: {
    Loader
  },
  computed: mapGetters(['getInfo']),
  data () {
    return {
      loading: true,
      noData: true,
      quotes: []
    }
  },
  async mounted () {
    await this.getData({ entity: 'quotes' })
    for (let i = 0; i < this.getInfo.length; i++) {
      if (this.getInfo[i].quote.toLowerCase().match(this.$route.params.value)) {
        this.quotes.push(this.getInfo[i])
      }
    }
    if (this.quotes.length) {
      this.noData = false
    } else {
      this.noData = true
    }
    this.loading = false
  },
  methods: {
    ...mapActions(['getData'])
  }
}
</script>

<style lang="scss">
    .quote{
        display: flex;
        align-items: center;
        flex-direction: column;
        &__block{
        text-align: center;
}
        &__card{
            margin: 0 auto;
            width: 50%;
            border: 2px solid #c7c4c4;
            padding-left: 10px;
            margin-bottom: 15px;
        }
        &__text{
            font-size: 24px;
        }
        &__btn{
            margin: 0 auto;
        }
    }
</style>
