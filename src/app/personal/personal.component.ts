import { Component, OnInit } from '@angular/core';
import { generateMnemonic } from 'bip39';
import { Wallet } from 'ethers';
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
    const mnemonic = generateMnemonic();
    const wallet = Wallet.fromMnemonic(mnemonic);
    this.generatedMnemonic = mnemonic;
    this.walletAddress = wallet.address;
    this.walletPrivateKey =  wallet.privateKey;
  }
}
