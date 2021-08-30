export class ComPort {
  locationId: string | null;
  manufacturer: string;
  path: string;
  pnpId: string;
  productId: string | null;
  serialNumber: string | null;
  vendorId: string | null;

  constructor() {
    this.locationId = '';
    this.manufacturer = '';
    this.path = '';
    this.pnpId = '';
    this.productId = '';
    this.serialNumber = '';
    this.vendorId = '';
  }
}
