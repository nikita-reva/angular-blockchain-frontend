import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/service/blockchain.service';

@Component({
  selector: 'app-pending-transactions',
  templateUrl: './pending-transactions.component.html',
  styleUrls: ['./pending-transactions.component.scss']
})
export class PendingTransactionsComponent implements OnInit {
  public pendingTransactions = [];

  constructor(private blockchainService: BlockchainService) { 
    this.pendingTransactions = blockchainService.getPendingTransactions();
  }

  ngOnInit(): void {
  }

  minePendingTransactions() {
    this.blockchainService.minePendingTransactions();
  }

}
