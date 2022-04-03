// データオブジェクト
const data = {
  fontSize: "16",
  color: "#ffffff",
  backgroundColor: "#0000ff",
  borderRadius: "5",
  opacity: 1,
  disabled: false,
  buttonText: "button text",
};

var vm = new Vue({
  el: "#myapp",
  data: data,
  methods: {
    showMessage: function () {
      console.log("button is clicked");
    },
  },
  computed: {
    styleObject: function () {
      return {
        fontSize: this.fontSize + "px",
        color: this.color,
        backgroundColor: this.backgroundColor,
        borderRadius: this.borderRadius + "px",
        opacity: this.opacity,
        disabled: this.disabled,
        buttonText: this.buttonText,
      };
    },
  },
});

// ・font-size
//   input type=range

// ・color
//   input type=color

// ・background-color
//   input type=color

// ・border-radius
//   input type=range

// ・opacity
//   input type=range

//   ・button 要素の disabled 属性
// 　input type=checkbox

// ・button 要素の value 属性 (ボタンに表示するテキスト)
// 　input type=text
