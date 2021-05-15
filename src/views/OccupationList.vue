<template>
  <div>
    <Loader v-if="loading" />
    <div v-else>
      <h3 class="collapsible-title">
        OCCUPATION LIST
      </h3>
      <ul
        class="collapsible"
      >
        <li
          v-for="(occupation,i) of occupations"
          :key="i"
        >
          <span
            @click="expandedItem(i)"
            class="collapsible-header"
          >{{ occupation.name }}
            <i
              v-if="occupation.expanded"
              class="fas fa-times"
            />
            <i
              v-else
              class="fas fa-plus"
            /> </span>
          <transition-group name="smooth">
            <ol
              v-if="occupation.expanded"
              class="collapsible-body"
              :key="i"
            >
              <li
                v-for="(character,i) in occupation.characters"
                :key="i"
              >
                {{ character }}
              </li>
            </ol>
          </transition-group>
        </li>
      </ul>
    </div>
    <router-link to="/">
      <button class="waves-effect waves-light btn">
        Back to home
      </button>
    </router-link>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import Loader from '@/components/Loader'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'OccupationList',
  data () {
    return {
      loading: true,
      occupations: []
    }
  },
  components: {
    Loader
  },
  computed: mapGetters(['getInfo']),
  methods: {
    ...mapActions(['getData']),
    expandedItem (i) {
      this.occupations[i].expanded = !this.occupations[i].expanded
      for (let j = 0; j < this.occupations.length; j++) {
        if (i !== j) {
          this.occupations[j].expanded = false
        }
      }
    }
  },
  async mounted () {
    const arr = []
    await this.getData({ entity: 'characters' })
    for (let i = 0; i < this.getInfo.length; i++) {
      for (let j = 0; j < this.getInfo[i].occupation.length; j++) {
        const el = {
          occupation: this.getInfo[i].occupation[j],
          character: this.getInfo[i].name
        }
        arr.push(el)
      }
    }
    const occupationArr = []
    for (let i = 0; i < arr.length; i++) {
      occupationArr.push(arr[i].occupation)
    }
    const uniqueArr = [...new Set(occupationArr)]
    for (let i = 0; i < uniqueArr.length; i++) {
      const element = { name: uniqueArr[i], characters: [], expanded: false }
      this.occupations.push(element)
    }
    for (let i = 0; i < this.occupations.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (this.occupations[i].name === arr[j].occupation) {
          this.occupations[i].characters.push(arr[j].character)
        }
      }
    }
    this.loading = false
  }
}
</script>

<style>
.smooth-enter-active, .smooth-leave-active {
  transition: opacity .5s;
}
.smooth-enter, .smooth-leave-to {
  opacity: 0
}
</style>
