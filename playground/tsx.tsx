// TypeScript / TSX playground

const answer: number = 0
let mutable = answer * 2 ?? 0
const isActive = true && !false || answer > 0
const obj = { name: 'John', age: 30 }
const b = true
  ? 2
  : null

export const Button = ({ disabled = false }: ButtonProps) => {
  const className =
    'px-3 py-1 rounded border ' +
    (disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-sky-900')

  return (
    <>
      {/* 有类型的高亮组件 */ }
      <Button />

      {/* 普通 html 标签 */ }
      <button
        type="button"
        disabled={ disabled }
        className={ className }
      >
        <span>Text</span>
      </button>
    </>
  )
}

const TestButton = () => <Button />

class Service<T extends User> {
  #cache = new Map<string, T>()

  constructor(private readonly baseUrl: string) { }

  async fetchUser(id: string): Promise<Result<T>> {
    return new Promise<Result<T>>(() => { })
  }
}

enum Status {
  Idle = 'IDLE',
  Loading = 'LOADING',
  Done = 'DONE'
}

interface User {
  id: string
  name: string
  role?: 'admin' | 'user'
  tags: string[]
}

type Result<T> = { ok: true; value: T } | { ok: false; error: Error }

type ButtonProps = {
  disabled?: boolean
}
