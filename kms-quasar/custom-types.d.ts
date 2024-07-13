







import { Text } from 'slate'

//【注意】需要把自定义的 Element 引入到最外层的 custom-types.d.ts

export type ParagraphElement = {
  type: 'paragraph'
  parent_id:string
  children: Text[]
}

