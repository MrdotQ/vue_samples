// データオブジェクト
const data = {
  message: "hello world",
  isBold: false,
};
const changeMessage = () => {
  data.message = "goodbyd world";
};
var vm = new Vue({
  el: "#myapp",
  data: data,
  methods: {
    changeMessage: changeMessage,
  },
  computed: {
    // アロー関数は使えない。thisを持ってないから
    reversedMessage: function () {
      return this.message.split("").reverse().join("");
    },
  },
});
