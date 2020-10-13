import _ from 'lodash'

export class Task {
  constructor(message, properties) {
    this.message = message
    this.properties = properties
  }
}

export function task(name, properties = {}) {
  return new Task(name.trim(), properties)
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

export function uid(collection, object) {
  return `${collection}:${object._id}`
}
