import type { Form } from 'element-ui'

export const submitForm = (formEl: InstanceType<typeof Form> | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

export const resetForm = (formEl: InstanceType<typeof Form> | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
