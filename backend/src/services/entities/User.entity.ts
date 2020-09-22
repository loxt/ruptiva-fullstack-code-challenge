import * as bcrypt from 'bcryptjs'

export class User {
  name: string

  // @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z)(?=.*[a-z]).*$/, {
  //   message: 'password too weak'
  // })
  password: string

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, 10)
    return hash === this.password
  }
}
