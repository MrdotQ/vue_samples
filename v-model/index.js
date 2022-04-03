// データオブジェクト
const data = {
  message: "hello world",
  isBold: false,
};
const changeMessage = () => {
  data.message = "goodbyd world";
};
// messageをboldにする
// messageを変更する
var vm = new Vue({
  el: "#myapp", // htmlのどこに対応しているか
  data: data, // これにより vm.message === data.messageとなる
  methods: {
    changeMessage: changeMessage,
  },
});
