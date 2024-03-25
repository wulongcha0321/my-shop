<template>
    <div class="nav-wrap">
        <div class="nav-container">
            <div class="nav-l">
                <div class="logo">TradeSphere</div>
                <div class="tabs">
                    <div class="tab">Login and Sign up</div>
                    <div class="tab">Post</div>
                    <div class="tab">Search</div>
                    <div class="tab">Collects</div>
                </div>
            </div>

            <div class="nav-r">
                <div class="search-bar">
                    <img class="search-icon" src="../../assets/icon/search.svg">
                    <input class="search-input" type="text" v-model="keyword" placeholder="Search posts">
                </div>
                <button class="search-btn">Login In</button>
            </div>
        </div>
    </div>
</template>
<style lang="stylus" scoped src="../../style/navbar.styl"></style>

<script>
export default {
  name: 'NavBar',
  data(){
    return {
        keyword:""
    }
  },
  methods:{

  }
}
</script>