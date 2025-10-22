export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}
export class Triangle implements Figure {
  public readonly shape = 'triangle';

  constructor(
    public color: string,
    public a: number = 1,
    public b: number = 1,
    public c: number = 1,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(`sides cannot be equal zero or less`);
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error(`sides 1, 2 and 3 can't form a triangle`);
    }
  }

  public getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.round(area * 100) / 100;
  }
}
export class Circle implements Figure {
  public shape: string = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius cannot be equal to zero or less');
    }
  }

  public getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: string = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Width or Height cannot be equal zero or less');
    }
  }

  public getArea(): number {
    const area = this.width * this.height;

    return Math.round(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
