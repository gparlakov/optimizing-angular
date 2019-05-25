import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  generatedMnemonic: string;
  walletAddress: string;
  walletPrivateKey: string;
  constructor() {}

  ngOnInit() {}

  createWallet() {
    const bip39Import = import('bip39');
    const ethersImport = import('ethers');
    Promise.all([bip39Import, ethersImport]).then(([bip39, ethers]) => {
      const mnemonic = bip39.generateMnemonic();
      const wallet = ethers.Wallet.fromMnemonic(mnemonic);
      this.generatedMnemonic = mnemonic;
      this.walletAddress = wallet.address;
      this.walletPrivateKey = wallet.privateKey;
    });
  }
}
