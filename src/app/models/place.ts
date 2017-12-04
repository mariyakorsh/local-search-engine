export class Place{
  constructor(
    public name: string,
    public address: string,
    public hours: any,
    public phones: Phone[]){}
}

export class Phone {
  constructor(public formatted: string,
              public info: string) {
  }
}
