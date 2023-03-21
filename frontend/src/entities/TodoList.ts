import Item from "./Item";
import Observable from "./Observable";

export default class TodoList extends Observable {
  items: Item[];

  constructor (items?: any) {
    super();
    this.items = []

    if (items) {
      for (const item of items) {
        this.items.push(new Item(item.id, item.description, item.done))
      }
    }
  }

  async addItem (itemDescription: string) {
    if(!itemDescription) return;
    if(this.items.filter((item: any) => !item.done).length > 4) return;
    if(itemDescription === " ") return;
    const item = new Item(null, itemDescription)

    this.items.push(item);
    this.notify("addItem", item);

    //? You warn (notify) all interesteds on this event but you really don't need to know who
    //? these interesteds are
  }

  async removeItem(item: any) {
    this.items.splice(this.items.indexOf(item), 1)
    this.notify("removeItem", item)
  }

  async toggleDone (item: any) {
    item.done = !item.done
    this.notify("toggleDone", item)
  }

  getItem(itemDescription: string) {
    return this.items.find((item: any) => item.description === itemDescription);
  }

  getCompleted () {
    const total = this.items.length;
    if(total === 0) return 0;
    const done = this.items.filter((item: any) => item.done).length;
    return Math.round((done/total) * 100)
  }
}