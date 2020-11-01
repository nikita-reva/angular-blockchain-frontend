import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/service/blockchain.service';
import { Transaction } from 'savjeecoin/src/blockchain';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent implements OnInit {

  public newTx;
  public ownWalletKey;

  constructor(private blockchainService: BlockchainService) { 
    this.ownWalletKey = blockchainService.walletKeys[0];
  }

  ngOnInit(): void {
    this.newTx = new Transaction();
  }

  createTransaction() {
    this.newTx.fromAddress = this.ownWalletKey.publicKey;
    this.newTx.signTransaction(this.ownWalletKey.keyObj);

    try {
      this.blockchainService.addTransaction(this.newTx);
    } catch (e) {
      alert(e);
      return;
    }

    this.newTx = new Transaction();
  }

}
