export class user {
  constructor(
    public firstname: string,
    public lastname: string,
    public address: string,
    public postalCode: string,
    public tel: string,
    public mail: string,
    public civ: string,
    public login: string,
    public password: string,
    public passwordConfirm: string
  ) {}

  /**
   * Check for empty field
   * @returns {boolean} If there is an empty field
   */
  hasEmptyField() {
    return (
      this.firstname === '' ||
      this.lastname === '' ||
      this.address === '' ||
      this.postalCode === '' ||
      this.tel === '' ||
      this.mail === '' ||
      this.civ === '' ||
      this.login === '' ||
      this.password === '' ||
      this.passwordConfirm === ''
    );
  }
}
