import { Component, OnInit } from '@angular/core';
// import * as bip39 from 'bip39';
// import * as ethers from 'ethers';

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
    const bip39Promise = import(/* webpackChunkName: 'bip39_ethers' */'bip39');
    const ethersPromise = import(/* webpackChunkName: 'bip39_ethers' */'ethers');
    Promise.all([bip39Promise, ethersPromise]).then(([bip39, ethers]) => {
      const mnemonic = bip39.generateMnemonic();
      const wallet = ethers.Wallet.fromMnemonic(mnemonic);
      this.generatedMnemonic = mnemonic;
      this.walletAddress = wallet.address;
      this.walletPrivateKey = wallet.privateKey;
    });
  }
}
