import JoiOriginal from 'joi'

export default JoiOriginal.defaults((schema) => {
  return schema.options({ presence: 'required' })
})
