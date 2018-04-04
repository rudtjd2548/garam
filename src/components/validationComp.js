
export const normalizePhone = (value) => {
  if (!value) {
    return value
  }

  const onlyNums = value.replace(/[^\d]/g, '')
  if (onlyNums.length <= 3) {
    return onlyNums
  }
  if (onlyNums.length <= 8) {
    return `${onlyNums.slice(0, 3)} ${onlyNums.slice(3)}`
  }
  return `${onlyNums.slice(0, 3)} ${onlyNums.slice(3, 7)} ${onlyNums.slice(7, 11)}`
}

export const validate = values => {
  const errors = {}
  const requiredFields = [ 'Ename', 'Ecompany', 'Ephone', 'Eemail', 'Enotes' ]
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = '필수 입력 사항입니다.'
    }
  })
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = '타당하지 않은 이메일 형식입니다.'
  }
  return errors
}