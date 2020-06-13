// 头条面试题

class Chain {
  constructor () {
    this.running = false
    this.tasks = []
  }

  async runTasks () {
    if (this.running) return
    this.running = true
    for (const task of this.tasks) {
      await task()
    }
    this.tasks = []
    this.running = false
  }

  eat () {
    this.tasks.push(() => {
      console.log('eat')
    })
    this.runTasks()
    return this
  }

  sleep (delay) {
    this.tasks.push(() => new Promise(resolve => setTimeout(resolve, delay * 1000)))
    this.runTasks()
    return this
  }

  work () {
    this.tasks.push(() => {
      console.log('work')
    })
    this.runTasks()
    return this
  }
}

const c = new Chain()

c.eat().sleep(5).eat().sleep(6).work()

// c.runTasks()
