<template>
  <div>
    名称:<input type="text" placeholder="名称" v-model='name'><br />
    年龄:<input type="text" placeholder="年龄" v-model='age'><br />
    <el-button type="primary" @click='tian()'>主要按钮</el-button>
    <table>
      <tr v-for='(item,key) in this.$store.state.list'>
        <td>{{item.name}}</td>
        <td>{{item.age}}</td>
        <td><button @click='shan(key)'>删除</button></td>
      </tr>
    </table>
    <table>
      <tr>
        <td>
          <p v-show="this.$store.state.list.length==0?'show':''">暂无记录。。。</p>
          <button v-show="this.$store.state.list.length>0?'!show':''" @click='quan()'>全部删除</button>
        </td>
      </tr>
    </table>

  </div>
</template>

<script>
  export default {
    name: 'Head',
    data() {
      return {
        list: [],
        name: '',
        age: '',
        show: false
      }
    },
    methods: {
      tian() {
        var list = this.$store.state.list
        if (this.name == '' || this.age == '') {
          return false
        }
        var obj = {
          name: this.name,
          age: this.age
        }
        this.$store.commit('tian', obj)
        console.log(obj);
        this.name = this.age = ''
      },
      shan(key) {
        this.$store.commit('shan', key)
      },
      quan() {
        this.$store.commit('quan')
      }
    }
  }

</script>

<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  table {
    border: 0.1px solid red;
    border-collapse: collapse;
  }

  td {
    width: 120px;
    height: 20px;
    border: 0.1px solid red;
  }

</style>
