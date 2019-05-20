export class Marker {

  public lat: number;
  public long: number;
  public title: string = 'No title';
  public description: string = 'No description';

  constructor(lat: number,long: number) {
    this.lat = lat;
    this.long = long;
  }

}
