//
//  Torch.swift
//  NativeModulesIntro
//
//  Created by Dipti Agrawal on 07/08/21.
//

import Foundation
import AVFoundation

@objc(Torch)
class torch: RCTEventEmitter {
  
  @objc
  func on() {
    toggleTorch(on: true)
  }
  
  @objc
  func off() {
    toggleTorch(on: false)
  }
  
  private func toggleTorch(on :Bool) {
              guard let device = AVCaptureDevice.default(for: AVMediaType.video)
              else{
                  return
              }
              if (device.hasTorch) {
                      do {
                          try device.lockForConfiguration()
                          if (on == true) {
                              device.torchMode = .on
                          } else {
                              device.torchMode = .off

                          }
                          device.unlockForConfiguration()
                        
                        sendEvent(withName: "onChange", body: on)
                      } catch {

                          print("Torch could not be used")
                          print(error)
                      }
                  }
              else{
                  print("Torch is not available")
              }
          }
  
  override func supportedEvents() -> [String]! {
    return ["onChange"]
  }
}
