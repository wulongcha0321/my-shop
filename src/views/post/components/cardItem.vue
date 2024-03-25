<template>
  <div class="card-wrap">
    <img class="card-img" :src="require('../../../assets/image/'+ goodsInfo.imgSrc +'.png')" alt="">
    <div class="card-content">
      <div class="card-title">
        <span>{{ goodsInfo.name }}</span>
      </div>
      <div class="card-labels">
        <span class="goods-price">¥{{ goodsInfo.price }}</span>
        <span class="tag" v-for="tag in goodsInfo.tags" :key="tag">
          {{ tag }}
        </span>
      </div>
      <div class="card-desc">
        {{ goodsInfo.description }}
      </div>
      <div class="card-btn-wrap">
        <button class="card-detail-btn" @click="handleShowDetail">Specifics</button>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" scoped src="@/style/card.styl"></style>

<script>
export default {
  name:'CardItem',
  props:{
    goodsInfo:{
      type:Object
    }
  },
  methods:{
    handleShowDetail(){
      this.$emit('onclick');
    }
  }
}
</script>