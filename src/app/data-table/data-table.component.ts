import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';
import { MangaDBService } from '../manga-db.service';

@Component({
    templateUrl: './tabledynamicdemo.html',
})
export class TableDynamicDemo implements OnInit {

    products: Product[];

    cols: any[];

    constructor(private mangaDBService: MangaDBService) { }

    ngOnInit() {
        this.productService.getProductsSmall().then(data => this.products = data);

        this.cols = [
            { field: 'code', header: 'Code' },
            { field: 'name', header: 'Name' },
            { field: 'category', header: 'Category' },
            { field: 'quantity', header: 'Quantity' }
        ];
    }
}