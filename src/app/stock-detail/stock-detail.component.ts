import { Component, OnInit } from '@angular/core';
import {StockService} from '../service/stock-service/stock.service';
import {Widget} from '../model/widget';
import {CompanyDetails} from '../model/company-details';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit {

  private info: CompanyDetails;
  private widget: Widget;
  public lineChartData: Array<any> = [
    {data: [], label: 'Price'}
  ];
  public lineChartLabels: Array<any> = [];
  public lineChartLegend = false;
  public lineChartType = 'line';



  constructor( private route: ActivatedRoute, private stockService: StockService, private location: Location) { }

  ngOnInit() {
    this.getStockDetails();
  }
  async getStockDetails() {
    const symbol = this.route.snapshot.paramMap.get('symbol');

    if (!this.stockService.widgetExists(symbol)) {
      await this.stockService.addNewWidget(symbol);
      this.stockService.getFirstWidget().subscribe(widget => this.widget = widget);
    } else {
      this.stockService.getWidgetBySymbol(symbol).subscribe(widget => this.widget = widget);
    }
    this.stockService.fetchCompanyData(symbol).subscribe(info => this.info = info);
    await this.updateChart(symbol);

  }

 async updateChart(symbol: string) {
  let chartResponse: any;
  await fetch(`https://api.iextrading.com/1.0/stock/${symbol}/chart/dynamic`)
  .then(resp => resp.json())
  .then((data) => chartResponse = data);
  let counter = 0;
  chartResponse.data.forEach(element => {
    counter++;
    if (element.average === 0 || counter % 2 !== 0 || counter % 3 !== 0) {
      return;
    }
    this.lineChartData[0].data.push(element.average);
    this.lineChartLabels.push(element.label);
  });
  }


}
