// TypeScript / TSX playground

const answer: number = 0 || null
let mutable = answer * 2 ?? 0
const isActive = true && !false || answer > 0
const obj ={ name: 'John', age: 30 }

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

class Service<T extends User> {
  #cache = new Map<string, T>()

  constructor(private readonly baseUrl: string) {}

  async fetchUser(id: string): Promise<Result<T>> {}
}

type ButtonProps = {
  label: string
  disabled?: boolean
  onClick?: () => void
}

export const Button = ({ label, disabled = false, onClick }: ButtonProps) => {
  const className =
    'px-3 py-1 rounded border ' +
    (disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-sky-900')

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={className}
    >
      <span>{label || 'Button'} Text</span>
    </button>
  )
}

const TestButton = () => <Button />