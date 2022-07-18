<template>
  <div>
    <div class="data-picker-header">
      <strong @click="onYearClick()">{{ nowDate.year }}年</strong>
      <strong v-if="selectorType >= 2 && nowDate.month" @click="onMonthClick"
        >{{ nowDate.month }}月</strong
      >
    </div>
    <div class="data-picker years-picker" ref="years-picker" v-show="selectorType == 1">
      <div class="picker-item" v-for="item in years" :key="item">
        <button
          type="button"
          class="picker-item-block"
          :ref="'year-' + item"
          :class="{ 'data-picker-active': nowDate.year == item }"
          @click="onYearItemClick(item)"
        >
          {{ item }}
        </button>
      </div>
    </div>
    <div class="data-picker" v-show="selectorType == 2">
      <div class="picker-item" v-for="item in 12" :key="item">
        <button
          type="button"
          class="picker-item-block"
          :class="{ 'data-picker-active': nowDate.month == item }"
          @click="onMonthItemClick(item)"
        >
          {{ item }}月
        </button>
      </div>
    </div>
    <div class="swiper data-picker" ref="data-picker-swiper" v-show="selectorType == 3">
      <div class="swiper-wrapper">
        <van-swipe :initial-swipe="index" :show-indicators="false" @change="onSwipeChange">
          <van-swipe-item v-for="(item, index) in dateList" :key="index">
            <div class="date-item">
              <strong class="date-month">{{ item.month }}</strong>
              <ul class="date-week">
                <li class="week-list">日</li>
                <li class="week-list">一</li>
                <li class="week-list">二</li>
                <li class="week-list">三</li>
                <li class="week-list">四</li>
                <li class="week-list">五</li>
                <li class="week-list">六</li>
              </ul>

              <ul class="date-day">
                <li
                  class="date-day-item"
                  v-for="(day, i) in item.day"
                  :key="i"
                  :class="{
                    'data-picker-through':
                      selector[0] <= new Date(nowDate.year, index, day).getTime() &&
                      selector[1] >= new Date(nowDate.year, index, day).getTime(),
                    'data-picker-start':
                      selector[0] === new Date(nowDate.year, index, day).getTime(),
                    'data-picker-end': selector[1] === new Date(nowDate.year, index, day).getTime(),
                  }"
                >
                  <button
                    class="item"
                    type="button"
                    v-if="day"
                    :class="{
                      'data-picker-active':
                        selector.indexOf(new Date(nowDate.year, index, day).getTime()) > -1,
                    }"
                    :disabled="item.disable.indexOf(index + '-' + day) > -1"
                    :data-id="new Date(nowDate.year, index, day).getTime()"
                    @click="onDayClick(index, day)"
                  >
                    {{ day }}
                  </button>
                  <label class="to-day" v-if="toDay == index + '' + day"></label>
                </li>
              </ul>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>
<script>
import { dateFormat } from '@/utils';
export default {
  name: 'appDatePicker',
  data() {
    return {
      index: 0,
      dateList: [],
      selector: [],
      toDay: '',
      selectorType: 3,
      years: [],
      nowDate: {
        year: '',
        month: '',
        day: '',
      },
      isInset: false, //判断是否是内置事件触发value更新
    };
  },
  props: {
    modelValue: {
      type: [String, Object, Array],
      validator(value) {
        let type = typeof value;
        return type == 'object' ? true : type == 'string' && new Date(value) != 'Invalid Date';
      },
    },
    minDate: {
      type: Object,
      default: null,
    },
    maxDate: {
      type: Object,
      default: null,
    },
    range: {
      type: Boolean,
    },
    format: String,
  },
  watch: {
    modelValue: {
      handler(val) {
        console.log('val', val);
        let date = [new Date()];
        if (val) {
          if (typeof val == 'string') {
            date = [new Date(val)];
          } else if (typeof val == 'object') {
            if (this.range) {
              if (val && val.length > 0) {
                date = val.map((item) => {
                  return new Date(item);
                });
              }
            } else {
              date = [val];
            }
          }
        }
        //传入的日期不一样重新初始化日历
        if (date[0] && date[0].getFullYear() != this.nowDate.year) {
          this.init(date[0]);
        } else if (this.dateList.length == 0) {
          this.init();
        }
        this.selector = date.map((item) => {
          return item.getTime();
        });
        this.selectorType = 3;
        this.index = date[0].getMonth();
      },
      immediate: true,
    },
  },
  computed: {
    getValue() {
      return this.selector.map((item) => {
        return new Date(item);
      });
    },
  },
  methods: {
    isMin(e) {
      var minDate = this.minDate; //最小时间
      if (!minDate) {
        return false;
      }
      return e.getTime() <= minDate.getTime();
    },
    isMax(e) {
      var maxDate = this.maxDate; //最大时间
      if (!maxDate) {
        return false;
      }
      return e.getTime() >= maxDate.getTime();
    },
    onSwipeChange(activeIndex) {
      this.nowDate.month = this.dateList[activeIndex].month;
    },
    onYearClick(e) {
      this.selectorType = 1;
      this.$nextTick(() => {
        var scrollTop = this.$refs['year-' + this.nowDate.year][0].offsetTop;
        var elmHeight = this.$refs['years-picker'].clientHeight;
        this.$refs['years-picker'].scrollTop = scrollTop - elmHeight / 2;
      });
    },
    onMonthClick() {
      this.selectorType = 2;
    },
    onMonthItemClick(month) {
      this.selectorType = 3;
      this.nowDate.month = month;
      this.index = month - 1;
    },
    onYearItemClick(e) {
      this.selectorType = 2;
      this.nowDate.year = e;
      this.nowDate.month = '';
      this.nowDate.day = '';
      this.selector = [];
      var date = new Date(this.nowDate.year, 0);
      this.dateList = this.getDatAry(date);
    },
    onDayClick(index, day) {
      const timeStamp = new Date(this.nowDate.year, index, day).getTime();
      this.nowDate.day = day;
      if (this.range) {
        if (
          (this.selector.length == 1 && timeStamp < this.selector[0]) ||
          this.selector.length >= 2
        ) {
          this.selector.length = 0;
          this.selector = [];
        }

        if (timeStamp != this.selector[0]) {
          this.selector.push(timeStamp);
        }
      } else {
        this.selector = [timeStamp];
      }
      this.isInset = true;
      // this.range ? this.getValue : dateFormat(timeStamp, this.format)
      this.$emit('update:modelValue', this.range ? this.getValue : new Date(timeStamp));
    },
    getDatAry(date) {
      var list = [];
      for (var i = 0; i < 12; i++) {
        var dayAry = [];
        var disable = []; //禁用的项
        var start = new Date(date.getFullYear(), i, 1); //月开始的第一天
        var last = new Date(date.getFullYear(), i + 1, 0); //月最后一天
        var day = 0;
        for (var m = 0; m < last.getDate() + start.getDay(); m++) {
          if (m >= start.getDay()) {
            ++day;
            var d = new Date(date.getFullYear(), i, day);
            if (this.isMin(d) || this.isMax(d)) {
              disable.push(i + '-' + day);
            }
            dayAry.push(day);
          } else {
            dayAry.push('');
          }
        }
        list.push({
          month: i + 1,
          day: dayAry,
          disable,
        });
      }
      return list;
    },
    init(date = new Date()) {
      this.nowDate.year = date.getFullYear();
      this.nowDate.month = date.getMonth() + 1;
      this.nowDate.day = date.getDate();
      for (var i = this.nowDate.year - 100; i < this.nowDate.year + 20; i++) {
        this.years.push(i);
      }
      console.log(this.nowDate);
      this.dateList = this.getDatAry(date);
    },
  },
  mounted() {
    var defaultDate = new Date();
    this.toDay = defaultDate.getMonth() + '' + defaultDate.getDate();
  },
};
</script>
<style lang="less" scoped>
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

.swiper {
  width: 100%;
  overflow: hidden;
}

.swiper-slide {
  background: #fff;
}

.data-picker-header {
  height: 50px;
  padding: 15px 10px;
  font-size: 15px;
}
.header-action {
  float: right;
}
.data-picker {
  height: 260px;
  position: relative;
}
.data-picker button {
  outline: none;
  border: 0;
  background: none;
}
.date-item {
  position: relative;
  overflow: auto;
  height: 260px;
  .date-month {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 0;
    color: #f2f3f5cc;
    font-size: 160px;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
}

.date-week .week-list {
  width: 14.28%;
  text-align: center;
  color: #999;
  font-size: 14px;
  float: left;
}
.date-day {
  position: relative;
  z-index: 100;
}
.date-day-item {
  width: 14.28%;
  min-height: 1px;
  margin-bottom: 10px;
  text-align: center;
  position: relative;
  float: left;
}

.date-day-item .item {
  position: relative;
  z-index: 10;
  width: 30px;
  /* line-height: 30px; */
  height: 30px;
  font-size: 14px;
  border-radius: 50%;
  color: #282828;
  margin: auto;
  display: block;
  outline: none;
  text-decoration: none;
}

.date-day-item .item[disabled] {
  color: #ccc;
}
.date-day-item .item.to-day {
  // color: #fff;
  // background: rgba(68, 138, 255, 0.5);
}
.date-day-item .to-day {
  width: 8px;
  height: 8px;
  display: inline-block;
  position: absolute;
  left: 50%;
  bottom: 0;
  margin-left: -4px;
  border-radius: 8px;
  background: rgba(68, 138, 255, 1);
}

.date-day-item .active {
  color: #fff;
  background: #f00;
}

.picker-item {
  width: 25%;
  height: 73px;
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
  text-align: center;
}

.picker-item-block {
  width: 35px;
  /* line-height: 35px; */
  height: 35px;
  font-size: 14px;
  border-radius: 5px;
  color: #282828;
  margin: auto;
  display: block;
  outline: none;
  text-decoration: none;
}

.picker-item-block.active {
  background: #f00;
}

.years-picker {
  height: 220px;
  overflow: auto;
}

.years-picker .picker-item {
  height: auto;
}

.years-picker .picker-item-block {
  width: 40px;
}
.data-picker-active {
  color: #ffff !important;
  background: #1989fa !important;
}
.data-picker-through {
  background: rgba(25, 137, 250, 0.2);
}
.data-picker-start {
  &::before {
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    position: absolute;
    width: 50%;
    display: block;
    background: #fff;
  }
}
.data-picker-end {
  &::after {
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    width: 50%;
    display: block;
    background: #fff;
  }
}
</style>