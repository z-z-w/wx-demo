// pages/home/home.js
Page({
  data: {
    i: 1,
    result: {
      V: 0,
      K: 0,
      A: 0
    },
    question: {},
    answer: [],
  },
  onLoad: function() {
    var ques = getApp().globalData.question[0];
    this.setData({
      question: ques,
      answer: this.OptionSort([ques.option.A, ques.option.V, ques.option.K])
    })
  },
  OptionSort(arr){
    return arr.sort(function () { return Math.random() > 0.5 ? -1 : 1 });
  },
  nextQues: function (e) {
    if (e.target.dataset.select === this.data.question.option.A){
      this.data.result.A++;
    } else if (e.target.dataset.select === this.data.question.option.V){
      this.data.result.V++;
    } else {
      this.data.result.K++;
    }
    this.setData({
      result: this.data.result
    });
    if (this.data.i < getApp().globalData.question.length) {
      this.data.i++;
      var ques = getApp().globalData.question[this.data.i -1];
      this.setData({
        i: this.data.i,
        question: ques,
        answer: this.OptionSort([ques.option.A, ques.option.V, ques.option.K])
      })
    }else{
      wx.redirectTo({
        url: '/pages/result/result?V=' + this.data.result.V + '&A=' + this.data.result.A + '&K=' + this.data.result.K
      })
    }
  }
})