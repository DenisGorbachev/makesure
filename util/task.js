import _ from 'lodash'

export class Task {
  constructor(message, properties = {}, renderer = null) {
    this.message = message
    this.properties = properties
    this.renderer = renderer
  }

  toString(color = false) {
    return this.renderer(this)
  }

}

export function task(name, properties = {}, renderer = render) {
  return new Task(name.trim(), properties, renderer)
}

export function render(task) {
  return `* ${task.message} ${!_.isEmpty(task.properties) ? JSON.stringify(task.properties, null, 2) : ''}`.trim()
}

export function go(name, properties = {}) {
  throw task(name, properties)
}

export function rethrow(tasks) {
  if (tasks.length) {
    throw tasks[0]
  }
}

export function recombine(combinations) {
  const results = []
  let tasks = []
  for (let i = 0; i < combinations.length; i++) {
    results.push(combinations[i][0])
    tasks = tasks.concat(combinations[i][1])
  }
  return [results, tasks]
}

export function pluckProperties(tasks) {
  return tasks.map(task => task.properties)
}

export function not(value) {
  return _.isUndefined(value) || _.isNull(value) || _.isNaN(value) || ((_.isObject(value) || _.isArray(value) || _.isString(value)) && _.isEmpty(value))
}

export function has(value) {
  return !not(value)
}

export function uid(collection, object) {
  return `${collection}:${object._id}`
}
