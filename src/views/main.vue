<template>
  <div class="container" v-if="!isMobile">
    <van-notice-bar left-icon="volume-o" :scrollable="false">
      <van-swipe vertical class="notice-swipe" :autoplay="3000" :show-indicators="false">
        <van-swipe-item
          >热线咨询服务时间（法定工作日）：上午9:00-12:00、下午13:00-17:00</van-swipe-item
        >
        <van-swipe-item
          >城区营业部办公时间（法定工作日）：上午9:00-12:00、下午13:00-17:00</van-swipe-item
        >
        <van-swipe-item
          >各县管理部办公时间（法定工作日）：上午8:00-12:00、下午15:00-18:00</van-swipe-item
        >
      </van-swipe>
    </van-notice-bar>
    <br />
    <div class="todo-card">
      <div class="todo-card_header">
        <p class="card-title">
          <!-- <i class="icon"></i> -->
          我的公积金
        </p>
      </div>
      <div class="todo-list ift-row ift-row-sm-2 ift-row-md-4">
        <div class="todo-list_item ift-col" v-for="(item, index) in account" :key="index">
          <div class="todo-item_num" v-if="typeof item.value == 'object'">
            <div class="todo-item_sub" v-for="(values, valindex) in item.value" :key="valindex">
              <p class="todo-item_sub_title">{{ values.title }}</p>
              <div class="todo-item_sub_value" :class="[values.color]">
                {{ values.value }}
                <span class="unit" v-if="values.unit">{{ values.unit }}</span>
              </div>
            </div>
          </div>
          <div class="todo-item_num" v-else>
            <div class="todo-item_sub" :class="[item.color]">
              {{ item.value }}
              <p class="unit" v-if="item.unit">{{ item.unit }}</p>
            </div>
          </div>
          <div class="todo-item_title">{{ item.title }}</div>
        </div>
      </div>
    </div>
    <br />
    <div class="todo-card">
      <div class="todo-card_header">
        <p class="card-title">常用功能</p>
      </div>
      <div class="ift-row ift-row-xs-4 ift-row-sm-5 ift-row-md-6">
        <div class="ift-col" v-for="(item, index) in historylist" :key="index">
          <div class="menu-item">
            <div class="icon" :class="[item.color]">
              <img class="img" :src="item.icon" mode="aspectFit" />
            </div>
            <p class="title">{{ item.title }}</p>
          </div>
        </div>
      </div>
      <br />
    </div>
    <br />
    <div class="todo-card">
      <div class="todo-card_header">
        <p class="card-title">
          <!-- <i class="icon"></i> -->
          网点排队情况
        </p>
      </div>
      <pdqk></pdqk>
    </div>
  </div>
</template>

<script>
import { sysStore } from '@/stores/sysInfo';
import { userStore } from '@/stores/user';

import pdqk from '@/components/pdqk';
export default {
  name: 'WechatUiIndex',

  data() {
    return {
      account: [
        {
          title: '账户余额',
          value: '234,567.00',
          unit: '元',
        },
        {
          title: '缴存状态',
          value: '正常',
          color: 'green',
        },
        {
          title: '缴存比例',
          value: [
            {
              title: '单位',
              value: '20%',
              color: 'blue',
            },
            {
              title: '个人',
              value: '70%',
              color: 'orange',
            },
          ],
        },
        {
          title: '月缴存额',
          value: [
            {
              title: '单位',
              value: '777,888.99',
              unit: '元',
              color: 'blue',
            },
            {
              title: '个人',
              value: '3,456.62',
              unit: '元',
              color: 'orange',
            },
          ],
        },
      ],
    };
  },
  components: {
    pdqk,
  },
  computed: {
    historylist() {
      let menu = userStore().menu[0];
      return menu.list;
    },
    isMobile() {
      return sysStore().isMobile;
    },
  },
  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.notice-swipe {
  height: 40px;
  line-height: 40px;
}
.menu-item {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: #282828;
  .icon {
    width: 40px;
    height: 40px;
    display: block;
    margin: 15px 0 5px 0;
    font-size: 40px;
    display: flex;
    border-radius: 50%;
    // background: #ebebeb;
    .img {
      width: 60%;
      // height: 60%;
      margin: auto;
    }
  }
  .title {
    padding: 5px 0;
    height: 30px;
    display: block;
    font-size: 13px;
    line-height: 15px;
    padding: 0 5px;
    text-align: center;
  }
}

.todo-card {
  display: flex;
  flex-direction: column;
  // height: 200px;
  padding: 5px 20px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.102);
}

.todo-card_header {
  height: 40px;
  padding-top: 17px;
  border-bottom: 1px solid rgba(43, 52, 65, 0.05);
  background-repeat: no-repeat;
  background-position: 100%;
  background-size: contain;

  .card-title {
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 7px;
    display: flex;
    align-items: center;

    .icon {
      font-size: 24px;
      margin-right: 10px;
      vertical-align: bottom;
    }
  }

  .card-title_desc {
    font-size: 13px;
    color: rgba(43, 52, 65, 0.4);
  }
}
.todo-list {
  margin-top: 20px;
}

.todo-list_item {
  width: 25%;
  height: 90px;
  float: left;
  overflow: auto;
  cursor: pointer;

  &:hover {
    // .todo-item_title {
    // 	transform: translateY(-30px);
    // 	opacity: 0;
    // }

    // .todo-item_title_hover {
    // 	transform: translateY(0px);
    // 	opacity: 1;
    // }
  }
  .unit {
    font-size: 12px;
    color: #80858d;
  }
}

.todo-item_num {
  display: flex;
  align-items: baseline;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  height: 50px;
  font-size: 26px;
  margin-bottom: 6px;
  .green {
    color: #4caf50;
  }
  .orange {
    color: #ff9800;
  }
  .blue {
    color: #2196f3;
  }
}
.todo-item_sub {
  display: flex;
  align-items: baseline;
}
.todo-item_sub_title {
  font-size: 10px;
  color: rgba(43, 52, 65, 0.4);
}
.todo-item_sub_value {
  font-size: 18px;
}

.todo-item_title {
  overflow: hidden;
  // position: absolute;
  font-size: 14px;
  color: rgba(43, 52, 65, 0.7);
  transition: all 0.4s ease;
}

.todo-item_title_hover {
  display: flex;
  opacity: 0;
  transform: translateY(30px);
  position: absolute;
  font-size: 14px;
  color: rgba(43, 52, 65, 0.4);
  transition: all 0.4s ease;
}

.todo-card_list {
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.todo-card_list_item {
  padding: 10px 0;
  margin: 0;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  border-bottom: 1px solid rgba(43, 52, 65, 0.05);

  .icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    display: inline-block;
    background-color: #ebebeb;
  }

  .title {
    margin: 0;
    padding: 0;
  }

  .label {
    padding: 0 6px;
    margin-left: 4px;
    font-size: 12px;
    background: rgba(43, 52, 65, 0.1);
    color: #80858d;
    border-radius: 10px;
    line-height: 20px;
  }

  .num {
    font-size: 20px;
    font-weight: 400;
    font-style: normal;
    margin-left: auto;
    text-align: right;
    transition: all 0.4s ease;
  }

  .arrow {
    top: 16px;
    position: absolute;
    right: 0;
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.4s ease;
    line-height: 0;
  }

  &:hover {
    .arrow {
      opacity: 1;
      transform: translateX(0);
    }

    .num {
      transform: translateX(-24px);
    }
  }
}
</style>