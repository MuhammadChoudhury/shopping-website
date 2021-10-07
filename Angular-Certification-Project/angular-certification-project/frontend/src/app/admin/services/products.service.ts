import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http : HttpClient) {  

  }


    addNewProduct(product : any, image : any)
      {
          const formdata = new FormData();
          formdata.append("name", product.name)
          formdata.append("description", product.description)
          formdata.append("image", image, image.name)
          return this.http.post("http://localhost:3000/api/v1/admin/products", formdata)
      }
}
