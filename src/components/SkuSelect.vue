<template>
  <div class="sku-select">
    <div class="sku-box" v-for="(item, index) in spu" :key="index">
      <div class="select-title">{{ item.name }}</div>
      <div class="select-cont-box">
        <div class="select-cont"
             @click="selectSingle(item,index,spuItem,spuIndex)"
             :class="{ select: spuItem.select,disabled: spuItem.disabled }"
             v-for="(spuItem, spuIndex) in item.cont"
             :key="spuIndex">{{ spuItem.type }}
        </div>
      </div>
    </div>
    <h2 class="stock" style="margin-top:20px;">库存：{{ stock }}</h2>
    <h2 class="price" style="margin-top:20px;">价格：{{ price }}</h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      stock: null,
      price: null,
      skuResultList: [],
      selectArr: [],
      spu: [
        { name: '颜色', cont: [{ type: '黑' }, { type: '金' }, { type: '白' }] },
        { name: '内存', cont: [{ type: '16G' }, { type: '32G' }] },
        { name: '运营商', cont: [{ type: '电信' }, { type: '移动' }, { type: '联通' }] }
      ],
      sku: {
        '黑,16G,电信': { price: 100, count: 10 },
        '黑,16G,移动': { price: 101, count: 11 },
        '黑,16G,联通': { price: 102, count: 0 },
        '黑,32G,电信': { price: 103, count: 13 },
        '黑,32G,移动': { price: 104, count: 14 },
        '黑,32G,联通': { price: 105, count: 0 },
        '金,16G,电信': { price: 106, count: 16 },
        '金,16G,移动': { price: 107, count: 17 },
        '金,16G,联通': { price: 108, count: 18 },
        '金,32G,电信': { price: 109, count: 0 },
        '金,32G,移动': { price: 110, count: 20 },
        '金,32G,联通': { price: 111, count: 21 },
        // '白,16G,电信': { price: 112, count: 0 },
        // '白,16G,移动': { price: 113, count: 23 },
        // '白,16G,联通': { price: 114, count: 24 },
        // '白,32G,电信': { price: 115, count: 0 },
        // '白,32G,移动': { price: 116, count: 26 },
        // '白,32G,联通': { price: 117, count: 27 }
        '白,16G,电信': { price: 112, count: 0 },
        '白,16G,移动': { price: 113, count: 0 },
        '白,16G,联通': { price: 114, count: 0 },
        '白,32G,电信': { price: 115, count: 0 },
        '白,32G,移动': { price: 116, count: 0 },
        '白,32G,联通': { price: 117, count: 1 }
      }
    }
  },
  components: {

  },
  watch: {
    // 监听选中的组合改变库存和组合关联
    selectArr (newV) {
      // console.log(newV)
      this.stock = this.skuResultList[newV.toString()].count
      this.price = Math.min.apply(Math, this.skuResultList[newV.toString()].prices)
      this.linkedSkuStatus()
    }
  },
  created () {
    // 将sku结果集排列组合成所有选择情况结果集
    this.skuResultList = this.initSKU(this.sku)
    // console.log(this.skuResultList)
    this.selectArr = Array(this.spu.length)
    this.showStockPrice()
    this.initSkuStatus()
  },
  methods: {
    // 显示库存和价格
    showStockPrice () {
      this.stock = this.skuResultList[this.selectArr.toString()].count
      this.price = Math.min.apply(Math, this.skuResultList[this.selectArr.toString()].prices)
    },
    // 初始化sku状态
    initSkuStatus () {
      // 循环找到单个组合结果集库存为零的情况，置灰
      this.spu.forEach((item, index) => {
        const initArr = Array(this.spu.length)
        item.cont.forEach((smallItem, smallIndex) => {
          this.$set(smallItem, 'disabled', false)
          initArr[index] = smallItem.type
          if (this.skuResultList[initArr.toString()].count <= 0) {
            this.$set(smallItem, 'disabled', true)
          }
        })
      })
    },
    // 点击选中
    selectSingle (item, index, spuItem, spuIndex) {
      if (!spuItem.disabled) {
        if (!spuItem.select) {
          item.cont.forEach((value, i) => {
            if (!value.disabled) {
              this.$set(value, 'select', false)
            }
          })
          this.$set(spuItem, 'select', true)
          // 直接用索引值制定数组值，watch无法监听到变化
          // 根据所在组索引放到对应位置，方便确定未选组的索引
          this.selectArr.splice(index, 1, spuItem.type)
        } else {
          this.$set(spuItem, 'select', false)
          this.selectArr.splice(index, 1, null)
        }
      }
    },
    // sku关联验证
    linkedSkuStatus () {
      // 选中的组数
      let count = 0
      let checkArr = JSON.parse(JSON.stringify(this.selectArr))
      // 未选中的组合值对应的索引集合，用于确定只剩一组未选时，未选组的索引号
      let noSelectIndexCheckArr = []
      checkArr.forEach((item, index) => {
        if (!item) {
          noSelectIndexCheckArr.push(index)
        }
        if (item != null) {
          count++
        }
      })
      // 当只剩一组没选时
      if (count === this.spu.length - 1) {
        this.initSkuStatus()
        // 将之前选中的组合与未选中组的所有组合，判断库存为0的组合，置灰
        this.spu.forEach((item, index) => {
          item.cont.forEach((smallItem, smallIndex) => {
            noSelectIndexCheckArr.forEach((checkIndexItem, checkIndex) => {
              if (index === checkIndexItem) {
                checkArr[index] = smallItem.type
                if (this.skuResultList[checkArr.toString()].count <= 0) {
                  this.$set(smallItem, 'disabled', true)
                }
              }
            })
          })
        })
      } else if (count === this.spu.length) {
        // 当所有组都选中时
        this.initSkuStatus()
        // 未选中的所有值集合
        const noSelectArr = []
        // 未选中所有值对应的类型集合（值所在组索引集合）
        const noSelectArrIndex = []
        this.spu.forEach((item, index) => {
          item.cont.forEach((smallItem, smallIndex) => {
            if (!smallItem.disabled && !smallItem.select) {
              noSelectArr.push(smallItem.type)
              noSelectArrIndex.push(index)
            }
          })
        })
        // 按类型存放未选中的选项，key为值所在的组标记，value为值的集合
        const noChecKObj = {}
        // 根据值所在索引将未选中的所有值分类
        noSelectArrIndex.forEach((item, index) => {
          if (noChecKObj[item]) {
            noChecKObj[item].push(noSelectArr[index])
          } else {
            noChecKObj[item] = [noSelectArr[index]]
          }
        })
        // 按照不同类型，根据组标记按照顺序组合，判断库存为0的情况，置灰
        for (let key in noChecKObj) {
          noChecKObj[key].forEach(item => {
            const newArr = JSON.parse(JSON.stringify(checkArr))
            newArr[key] = item
            if (this.skuResultList[newArr.toString()].count <= 0) {
              const result = this.difference(newArr, checkArr)
              this.findButton(result[0])
            }
          })
        }
      } else {
        this.initSkuStatus()
      }
    },
    // 差集
    difference (arr1, arr2) {
      let result = []
      arr1.forEach(item => {
        if (!arr2.includes(item)) {
          result.push(item)
        }
      })
      return result
    },
    // 根据值寻找对应按钮，置灰
    findButton (key) {
      this.spu.forEach(item => {
        item.cont.forEach(smallItem => {
          if (smallItem.type === key) {
            this.$set(smallItem, 'disabled', true)
          }
        })
      })
    },
    // 获得对象的key
    getObjKeys (obj) {
      if (obj !== Object(obj)) {
        throw new TypeError('Invalid object')
      }
      let keys = []
      for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          keys[keys.length] = key
        }
      }
      return keys
    },
    arrayCombine (targetArr) {
      let resultArr = []
      for (let n = 0; n <= targetArr.length; n++) {
        let flagArrs = this.getFlagArrs(targetArr.length, n)
        while (flagArrs.length) {
          let flagArr = flagArrs.shift()
          let combArr = Array(targetArr.length)
          for (let i = 0; i < targetArr.length; i++) {
            if (flagArr[i]) {
              combArr[i] = targetArr[i]
            }
          }
          resultArr.push(combArr)
        }
      }
      return resultArr
    },
    // 从m中取n的所有组合
    getFlagArrs (m, n) {
      let flagArrs = []
      let flagArr = []
      let isEnd = false
      for (let i = 0; i < m; i++) {
        flagArr[i] = i < n ? 1 : 0
      }
      flagArrs.push(flagArr.concat())
      // 当n不等于0并且m大于n的时候进入
      if (n && m > n) {
        while (!isEnd) {
          let leftCnt = 0
          for (let i = 0; i < m - 1; i++) {
            if (flagArr[i] === 1 && flagArr[i + 1] === 0) {
              for (let j = 0; j < i; j++) {
                flagArr[j] = j < leftCnt ? 1 : 0
              }
              flagArr[i] = 0
              flagArr[i + 1] = 1
              let aTmp = flagArr.concat()
              flagArrs.push(aTmp)
              if (aTmp.slice(-n).join('').indexOf('0') === -1) {
                isEnd = true
              }
              break
            }
            flagArr[i] === 1 && leftCnt++
          }
        }
      }
      return flagArrs
    },
    initSKU (sku) {
      let resultSKU = []
      let skuKeys = this.getObjKeys(sku)
      for (let i in skuKeys) {
        let skuKey = skuKeys[i] // 获取一条SKU的key
        let skuData = sku[skuKey] // 获取一条SKU的相关数据
        let skuKeyAttrs = skuKey.split(',') // 获取SKU的key的属性数组
        let combArr = this.arrayCombine(skuKeyAttrs)
        for (let j = 0; j < combArr.length; j++) {
          let key = combArr[j].join(',')
          if (resultSKU[key]) {
            resultSKU[key].count += skuData.count
            resultSKU[key].prices.push(skuData.price)
          } else {
            resultSKU[key] = {
              count: skuData.count,
              prices: [skuData.price]
            }
          }
        }
      }
      return resultSKU
    }
  }
}
</script>

<style scoped lang="scss">
  .sku-select{
    .sku-box{
      .select-title{
        margin-top: 20px;
        margin-left: 50px;
      }
      .select-cont-box{
        display: flex;
      }
      .select-cont{
        width:80px;
        height:40px;
        margin-top: 20px;
        border: 1px #888888 solid;
        border-radius: 10px;
        line-height: 40px;
        text-align: center;
        &.select{
          border: 1px red solid;
        }
        &.disabled{
          background-color: #888888;
        }
      }
    }
  }
</style>
