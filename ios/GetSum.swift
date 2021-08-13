//
//  Torch.swift
//  NativeModulesIntro
//
//  Created by Dipti Agrawal on 07/08/21.
//

import Foundation

@objc(GetSum)
class getSum: NSObject{
 
  @objc
  func returnSum(_ firstNum: Int,num secondNum:Int,  callback successCallback: RCTResponseSenderBlock){
    NSLog("Log from Swift: \(secondNum) \(firstNum)")
       successCallback([NSNull(), firstNum+secondNum])
    }

}
