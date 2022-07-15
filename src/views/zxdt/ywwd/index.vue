<template>
  <div>
    <nav-bar></nav-bar>
    <ul class="wd-list">
      <template v-for="(item, index) in list" :key="index">
        <li class="wd-list-item" @click.stop="onItemClick(item)">
          <div class="wd-list-item-header">
            <p><van-icon name="hotel-o" size="20" />{{ item.title }}</p>
            <a :href="'tel:' + item.phone" style="color: #1989fa"
              ><van-icon name="phone-o" />{{ item.phone }}</a
            >
          </div>
          <div class="wd-list-item-desc"><van-icon name="guide-o" />{{ item.address }}</div>
        </li>
      </template>
    </ul>
    <van-popup v-model:show="showpopup" closeable position="bottom">
      <div class="popup-body">
        <iframe
          class="iframe"
          width="100%"
          height="100%"
          :src="`/map.html?address=${current.address}`"
          frameborder="0"
        ></iframe>
        <div class="wd-list-item" style="padding: 10px 15px">
          <div class="wd-list-item-header">
            <p><van-icon name="hotel-o" size="20" />{{ current.title }}</p>
            <a :href="'tel:' + current.phone" style="color: #1989fa"
              ><van-icon name="phone-o" />{{ current.phone }}</a
            >
          </div>
          <div class="wd-list-item-desc"><van-icon name="guide-o" />{{ current.address }}</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'ChsWebYwwd',

  data() {
    return {
      reload: false,
      showpopup: false,
      current: {},
      list: [
        {
          title: '青秀管理部',
          phone: '0771-12329',
          address: '南宁市青秀区长湖路18号中天世纪花园A区一层19-1号和A区二层3、4号',
        },
        { title: '兴宁管理部', phone: '0771-12329', address: '南宁市兴宁区济南路23号' },
        {
          title: '西乡塘管理部',
          phone: '0771-12329',
          address: '南宁市科园大道东五路6号南宁市行政审批大厅四楼',
        },
        { title: '江南管理部', phone: '0771-12329', address: '南宁市淡村路5号大院内' },
        {
          title: '良庆管理部',
          phone: '0771-12329',
          address: '南宁市良庆区玉洞大道33号南宁市民中心D座5楼',
        },
        { title: '邕宁管理部', phone: '0771-12329', address: '南宁市邕宁区红星路35-1号一楼铺面' },
        {
          title: '横州管理部',
          phone: '0771-12329',
          address:
            '横县横州镇茉莉花大道龙池新城龙翔苑（贷款、归集业务）、横县横州镇茉莉花大道国泰综合楼2号楼1层政务服务中心（开户、提取、查询业务）',
        },
        {
          title: '宾阳管理部',
          phone: '0771-12329',
          address:
            '宾阳县广场新区商业城西排11、12号（贷款、归集业务）、宾阳县宾州镇金城路66号政务服务中心3楼 （开户、提取、查询业务）',
        },
        {
          title: '上林管理部',
          phone: '0771-12329',
          address:
            '上林县大丰镇新丰路155号（贷款、部分提取业务）、上林县大丰镇新丰路133号政务服务中心2楼（开户、归集、提取、查询业务）',
        },
        {
          title: '武鸣管理部',
          phone: '0771-12329',
          address:
            '武鸣区标营新区欢歌路12号金域华府售楼部旁（提取、贷款业务）、武鸣区标营路352号政务服务中心3楼（开户、归集业务）',
        },
        {
          title: '隆安管理部',
          phone: '0771-12329',
          address:
            '隆安县城厢镇泰安街102号（贷款、归集业务）、隆安县城厢镇蝶城路201号政务服务中心3楼 （开户、提取、查询业务）',
        },
        {
          title: '马山管理部',
          phone: '0771-12329',
          address:
            '马山县白山镇富群路170号（贷款、归集业务）、马山县白山镇威马大道198号政务服务中心2楼（开户、提取、查询业务）',
        },
        { title: '分中心南宁管理部', phone: '0771-12329', address: '南宁市青秀区枫林路30号' },
        {
          title: '分中心桂林管理部',
          phone: '0771-12329',
          address: '桂林市叠彩区北辰路43号华城新贵小区金桂阁4楼',
        },
        {
          title: '分中心柳州管理部',
          phone: '0771-12329',
          address: '柳州市飞鹅路129号景泰大夏10楼',
        },
        {
          title: '分中心玉林管理部',
          phone: '0771-12329',
          address: '玉林市城站路125号弘基新城小区1栋3单元301号',
        },
      ],
    };
  },
  watch: {
    current: {
      handler(val) {
        this.reload = false;
        setTimeout(() => {
          this.reload = true;
        }, 50);
      },
      deep: true,
    },
  },
  mounted() {},

  methods: {
    onItemClick(item) {
      this.showpopup = true;
      this.current = item;
    },
  },
};
</script>

<style lang="less" scoped>
.wd-list {
  padding: 0 15px;
  background: #fff;
}
.wd-list-item {
  padding: 10px 0;
  margin-bottom: 10px;
  font-size: 14px;
  border-bottom: 1px solid #ebebeb;
}
.wd-list-item-header {
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #282828;
}
.wd-list-item-desc {
  color: #999;
}
.popup-body {
  height: 500px;
  display: flex;
  flex-direction: column;
}
</style>