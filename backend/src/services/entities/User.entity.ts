import * as bcrypt from 'bcryptjs'

export class User {
  name: string

  password: string

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, 10)
    return hash === this.password
  }
}
