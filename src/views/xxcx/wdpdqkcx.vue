<template>
  <div>
    <nav-bar></nav-bar>
    <div class="wd-list">
      <div class="wd-list-card" v-for="(item, index) in list" :key="index">
        <p class="title">{{ item.title }}</p>
        <ul class="list-card-body">
          <li class="list-item">
            <div class="sub">
              <span class="text">窗口数量:</span><strong class="color-0">0</strong>
            </div>
            <div class="sub">
              <span class="text">电话:</span><strong class="color-1">{{ item.phone }}</strong>
            </div>
          </li>
          <li class="list-item">
            <div class="sub">
              <span class="text">提取业务等待人数:</span><strong class="color-0">21</strong>
            </div>
            <div class="sub">
              <span class="text">贷款业务等待人数:</span><strong class="color-0">21</strong>
            </div>
          </li>
        </ul>
        <div class="wd-list-card-bottom">
          <span class="text">地址: </span>
          <p>{{ item.address }} <a href="javascript:void(0)"></a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChsWebWdpdqkcx',

  data() {
    return {
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

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.wd-list-card {
  padding: 10px 20px;
  margin-bottom: 10px;
  font-size: 13px;
  background: #fff;
  color: #282828;
  border-bottom: 1px solid #ebebeb;
  .title {
    font-weight: bold;
  }
  .text {
    color: rgba(86, 86, 86, 0.8);
  }
  .color-0 {
    color: var(--van-success-color);
  }
  .color-1 {
    color: var(--van-primary-color);
  }
  .color-2 {
    color: var(--van-primary-color);
  }
  .color-3 {
    color: var(--van-primary-color);
  }
  .list-card-body {
    .list-item {
      margin: 5px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .sub {
        flex: 1;
      }
    }
  }
}
.wd-list-card-bottom {
  display: flex;
  .text {
    white-space: nowrap;
  }
}
</style>