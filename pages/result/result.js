// pages/result/result.js
Page({
  data: {
    result: {
      A: 0,
      K: 0,
      V: 0,
      Type: '听觉型'
    }
  },
  onLoad: function (query) {
    this.data.result.A = query.A;
    this.data.result.V = query.V;
    this.data.result.K = query.K;
    this.data.result.Type = this.compType(query.V, query.K, query.A);
    this.setData({
      result: this.data.result
    }) 
  },
  compType: function (v, k, a) {
    if (v == k && v > a){
      return '视觉动觉均衡型';
    } else if (v == a && v > k) {
      return  '视觉听觉均衡型';
    } else if (a == k && a > v) {
      return  '听觉动觉均衡型';
    } else if (v == k && v == a) {
      return  '均衡型';
    } else {
      if (v > k && v > a){
        return  '视觉型';
      } else if (k > v && k > a) {
        return  '动觉型';
      } else if (a > v && a > k) {
        return  '听觉型';
      }
    }
  },
})