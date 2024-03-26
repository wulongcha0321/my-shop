<template>
  <div class="page">
    <NavBar></NavBar>
    <div class="main-wrap">
      <CardItem
        v-for="item in goodsList"
        :key="item.id"
        :goodsInfo="item"
        @onclick="handleClickCard(item)"
      ></CardItem>
    </div>
    <Footer></Footer>
  </div>
</template>
<style lang="stylus" scoped src="@/style/post.styl"></style>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CardItem from "./components/cardItem.vue";

import { mapGetters } from "vuex";

export default {
  name: "Post",
  components: {
    NavBar,
    Footer,
    CardItem,
  },
  computed: {
    ...mapGetters(["goodsList"]),
  },
  mounted() {
    this.fetchGoodsList();
  },
  methods: {
    fetchGoodsList() {
      console.log("获取商品列表");
      const goodsList = [
        {
          id: "1",
          imgSrc: "book",
            name: "Books",
            price: 20,
            description: "This book is a great educational book.",
            tags: ["Inspirational", "education", "novel"],
            detailDesc:"There is an example of a book trading post. This is where you can post information about the books you want to sell."
        },
        {
          id: "2",
          imgSrc: "phone",
          name: "Smart Phone",
          price: 8999,
          description:
              "This smartphone is powerful and cost-effective.",
          tags: ["iPhone", "Electronic Products", "LED"],
          detailDesc:"The iPhone 15 features a Lingdong Island design on the front, providing a convenient interactive experience, and a diagonal dual camera module on the back, providing more creative possibilities. The body is made of aluminum metal with a fused color glass backplate, which is both sturdy and beautiful, and not easy to stick fingerprints"
        },
        {
          id: "3",
          imgSrc: "clothes",
          name: "Fashion Clothes",
          price: 99.99,
          description: "The dress is fashionable and suitable for the younger crowd.",
          tags: ["fashion", "suit", "comfort", "Breathable"],
          detailDesc:"This garment, with its exquisite color matching and unique style design, easily breaks conventions and conveys a unique fashion concept, showcasing diverse charm and personalized style for you."
        },
      ];
      this.$store.dispatch("setGoodsList", goodsList);
    },
    handleClickCard(item) {
      console.log("点击了卡片详情");
      this.$router.push({
        name: "Detail",
        query: {
          item: JSON.stringify(item),
        },
      });
    },
  },
};
</script>
