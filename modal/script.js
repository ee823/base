"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal);

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}
//open hidden-window
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
//函数实现窗口关闭
btnCloseModal.addEventListener("click", closeModal);
//closeModal不带括号是事件绑定，事件触发再执行
overlay.addEventListener("click", closeModal);

// for (let i = 0; i < btnsOpenModal.length; i++) {
//   btnsOpenModal[i].addEventListener('click', function () {
//     console.log('Button clicked');
//     //读取类列表属性
//     //只是传入类的名称不需要加上符号" . ",该符号只适用于querySelector
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   });
// }

// // close window and hidden
// btnCloseModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// //点击模态窗时即窗口的其他部位，可以隐藏窗口
// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

//create a closeModal function

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    //带括号是函数的调用，直接执行函数
    closeModal();
  }
});
