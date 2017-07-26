'use strict'

const form = document.forms[0];

class Item {
  constructor(name) {
    this.name = name;
    }
}

const controller = {
  watch(form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // prevent the form from being submitted
      this.add(form.name.value);
    }, false);
  },

  add(name) {
    const item = new Item(name);
    view.render(item);
  }
}

const view = {
  render(item) {
    const list = document.getElementById('list');
    const li = document.createElement('li');
    li.innerHTML = item.name;
    list.appendChild(li);
    // reset the input field
    form.name.value = '';
  }
}

controller.watch(form);
