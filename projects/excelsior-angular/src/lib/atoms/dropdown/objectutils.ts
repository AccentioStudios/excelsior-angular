/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-var */
export class ObjectUtils {
  public static isArray(value: string | any[], empty = true) {
    return Array.isArray(value) && (empty || value.length !== 0)
  }

  public static isObject(value: any | null, empty = true) {
    return (
      typeof value === 'object' && !Array.isArray(value) && value != null && (empty || Object.keys(value).length !== 0)
    )
  }
  public static isFunction(obj: any) {
    return !!(obj && obj.constructor && obj.call && obj.apply)
  }
  public static resolveFieldData(data: any, field: any): any {
    if (data && field) {
      if (this.isFunction(field)) {
        return field(data)
      } else if (field.indexOf('.') == -1) {
        return data[field]
      } else {
        const fields: string[] = field.split('.')
        let value = data
        for (let i = 0, len = fields.length; i < len; ++i) {
          if (value == null) {
            return null
          }
          value = value[fields[i]]
        }
        return value
      }
    } else {
      return null
    }
  }
}
