//
//  CheckSimulator.swift
//  NativeModulesIntro
//
//  Created by Dipti Agrawal on 10/08/21.
//

import Foundation

@objc(CheckSimulator)
class checkSimulator: NSObject {
  
  @objc
  func isSimulator(_ successCallback: RCTResponseSenderBlock){
    if(TARGET_OS_SIMULATOR != 0){
      successCallback([NSNull(),true])
    }
    else
    {
      successCallback([NSNull(),false])
    }
       
    }

}
