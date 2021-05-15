<template>
  <div>
    <Loader v-if="loading" />
    <div v-else>
      <h4 v-if="noData">
        There are no such character &#128542;
      </h4>
      <div
        v-else
        class="character"
      >
        <div
          v-if="!noData"
          class="character__wrapper"
        >
          <div class="character__img">
            <img
              :src="allCharacterInfo[0].img"
              alt="poster"
            >
          </div>
          <ul
            v-if="!noData"
            class="collection with-header"
          >
            <li class="collection-header">
              <h2>{{ allCharacterInfo[0].name }}</h2>
            </li>
            <li class="collection-item">
              <b>Birthday:</b> {{ allCharacterInfo[0].birthday }}
            </li>
            <li class="collection-item">
              <b>Nickname:</b> {{ allCharacterInfo[0].nickname }}
            </li>
            <li class="collection-item">
              <b>Portrayed:</b> {{ allCharacterInfo[0].portrayed }}
            </li>
          </ul>
        </div>
        <vue-horizontal-timeline
          :items="items"
          :content-centered="true"
          :title-centered="true"
          :clickable="false"
        />
      </div>
    </div>
    <router-link to="/">
      <button class="waves-effect waves-light btn">
        Back to home
      </button>
    </router-link>
  </div>
</template>

<script>
import Loader from '@/components/Loader'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CharacterInfo',
  data () {
    return {
      loading: true,
      noData: true,
      img: '',
      status: '',
      icon: '',
      items: [],
      allCharacterInfo: [],
      allEpisodeInfo: [],
      allDeathInfo: []
    }
  },
  components: {
    Loader
  },
  computed: mapGetters(['getInfo']),
  async created () {
    await this.getData({ entity: 'characters', name: this.$route.params.value })
    this.allCharacterInfo = [...this.getInfo]
    if (this.allCharacterInfo.length) {
      await this.getData({ entity: 'episodes' })
      this.allEpisodeInfo = [...this.getInfo]
      await this.getData({ entity: 'deaths' })
      this.allDeathInfo = [...this.getInfo]
      this.status = this.allCharacterInfo[0].status
      if (this.status === 'Presumed dead') {
        this.icon = 'fas fa-dizzy'
      } else if (this.status === 'Alive') {
        this.icon = 'fas fa-user-circle'
      } else if (this.status === 'Deceased') {
        this.icon = 'fas fa-skull-crossbones'
      } else {
        this.icon = 'fas fa-question'
      }
      const epis = this.allEpisodeInfo
      this.items.push({
        title: this.allCharacterInfo[0].birthday,
        content: 'Birthday'
      })
      for (let i = 0; i < epis.length; i++) {
        for (let j = 0; j < epis[i].characters.length; j++) {
          if (epis[i].characters[j].toLowerCase() === this.$route.params.value.toLowerCase()) {
            const value = {
              title: epis[i].air_date,
              content: `Episode: ${epis[i].title}`
            }
            this.items.push(value)
          }
        }
      }
      for (let i = 0; i < this.allDeathInfo.length; i++) {
        for (let j = 0; j < epis.length; j++) {
        // eslint-disable-next-line eqeqeq
          if (this.allDeathInfo[i].season == epis[j].season &&
            // eslint-disable-next-line eqeqeq
            this.allDeathInfo[i].episode == epis[j].episode &&
            this.allDeathInfo[i].responsible.toLowerCase() === this.$route.params.value.toLowerCase()) {
            this.items.push({
              title: epis[j].air_date,
              content: `Death: ${this.allDeathInfo[i].death}`
            })
          }
        }
      }
      this.items = this.items.slice().sort((a, b) => new Date(a.title) - new Date(b.title))
      this.items.push({
        title: 'Current Status',
        content: `${this.allCharacterInfo[0].status}`
      })
      this.$nextTick().then(() => {
        const lastContent = document.querySelectorAll('.content')
        const length = lastContent.length - 1
        lastContent[length].insertAdjacentHTML('beforeend', `<i class='${this.icon}'/>`)
      })
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

<style lang="scss" >
    .character{
        display: flex;
        flex-direction: column;
        &__wrapper{
           display: flex;
        }
        &__img{
            width: 40%;
            & img{
                width: 100%;
                height: auto;
            }
        }
    }
    .collection{
        width: 100%;
        margin-top: 0;
        border: none;
    }
    .with-header{
        text-align: center;
    }
    .collection-item{
        text-align: left;
    }
    .episodeList{
        width: 50%;
        margin: 0 auto;
    }
</style>
