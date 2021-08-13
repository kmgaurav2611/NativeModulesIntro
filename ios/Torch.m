//
//  Torch.m
//  NativeModulesIntro
//
//  Created by Dipti Agrawal on 07/08/21.
//

#import "React/RCTBridgeModule.h"
#import "React/RCTEventEmitter.h"

@interface RCT_EXTERN_MODULE(Torch, RCTEventEmitter)
RCT_EXTERN_METHOD(on)
RCT_EXTERN_METHOD(off)
@end
